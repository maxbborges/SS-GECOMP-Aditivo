function servicetask225(attempt, message) {
  log.info("SERVICETASKBANCODECONHECIMENTO - inicio servicetask225 ####");

  try {
    var id_usuario = getValue('WKUser');
    var id_processo = getValue('WKNumProces');

    var errorMsg = [];
    var signedDoc = hAPI.getCardValue('txt_nomeArquivoMinuta_10');
    var contractNumber = hAPI.getCardValue('txt_nProcesso_17')//'000000000004642' NUMERO CONTRATO
    var ctrDescription = hAPI.getCardValue('atxt_descricao_29');
    var ctrDataEmissao = hAPI.getCardValue('txt_dtEmissao_29');
    var ctrDataValidade = hAPI.getCardValue('txt_dtValidade_29');
    var ctrObs = hAPI.getCardValue('atxt_observacoes_29');
    var palavraChave = hAPI.getCardValue('txt_palavraChave_29');

    var cs = [
      DatasetFactory.createConstraint('signedDocument', signedDoc, signedDoc, ConstraintType.MUST),
      DatasetFactory.createConstraint('opcao', 3, 3, ConstraintType.MUST),
      DatasetFactory.createConstraint('documento', contractNumber, '', ConstraintType.MUST),
      DatasetFactory.createConstraint('ctr_descricao', ctrDescription, '', ConstraintType.MUST),
      DatasetFactory.createConstraint('ctr_data_emissao', ctrDataEmissao, '', ConstraintType.MUST),
      DatasetFactory.createConstraint('ctr_data_validade', ctrDataValidade, '', ConstraintType.MUST),
      DatasetFactory.createConstraint('ctr_obs', ctrObs, '', ConstraintType.MUST),
      DatasetFactory.createConstraint('palavra_chave', palavraChave, '', ConstraintType.MUST),
      DatasetFactory.createConstraint('solicitacao', id_processo, '', ConstraintType.MUST),
    ];

    var dataset = DatasetFactory.getDataset('ds_banco_de_conhecimento_aditivo', null, cs, null);

    if (
      dataset != undefined &&
      dataset != null &&
      dataset.rowsCount != null &&
      dataset.rowsCount != undefined &&
      dataset.rowsCount > 0
    ) {
      //Trata retorno do dataset
      var retorno = dataset.getValue(0, "status");
      log.info('Banco de Conhecimento Aditivo - servicetask225 - retorno ');
      log.dir(retorno)
      if (hasValue(retorno)) {
        if (retorno == 201) {
          var msgValidacao = dataset.getValue(0, 'status') + ' - ' + dataset.getValue(0, 'msg');
          addSetTaskComments(id_usuario, id_processo, msgValidacao);
        } else if (retorno != 201) {
          var msgValidacao = dataset.getValue(0, 'status') + ' - ' + dataset.getValue(0, 'msg');
          var errorMsgPrazoQuantidade = 'Banco de Conhecimento Aditivo: ' + msgValidacao;
          errorMsg.push(errorMsgPrazoQuantidade)
        }
      } else {
        throw 'O retorno da integração BANCO DE CONHECIMENTO não teve êxito. Por favor, entre em contato com a TI.';
      }
    }


    if (errorMsg.length > 0) {
			log.error('Banco de Conhecimento Aditivo - servicetask225 - Levantando excecao para a plataforma: ' + errorMsg);
			var msgError = ' <br> ' + errorMsg.join(' <br> ') + ' <br> ';
			addSetTaskComments(id_usuario, id_processo, msgError);
			throw msgError;
		}

    log.info("fim do banco de conhecimento aditivo - FIM servicetask225 ####");
  } catch (e) {
    if (e != null && errorMsg != "ok") {
      log.error("Banco de Conhecimento Aditivo - ERRO servicetask225 => " + e);
      throw e;
    }
  }
}

/**Para evitar de gerar dois registros de documento no banco conhecimento protheus
	é avaliado se a integração já ocorreu pelo Fluig.
	Para tal verifica-se se há registro no histório da atividade posterior */
function jaCarregouBancoConhecimento(id_processo) {
  var cs = [
    DatasetFactory.createConstraint('stateSequence', 159, 159, ConstraintType.MUST), DatasetFactory.createConstraint('processHistoryPK.processInstanceId', id_processo, id_processo, ConstraintType.MUST)
  ];
  var ds = DatasetFactory.getDataset('processHistory', ['stateSequence'], cs, null);
  log.info('ja pass')
  return (ds != null && ds.rowsCount > 0);
}