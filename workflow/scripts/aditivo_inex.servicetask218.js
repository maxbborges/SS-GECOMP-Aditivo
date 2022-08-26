function servicetask218(attempt, message) {
	log.info("TGSINICIO - Gerar Aditivo- inicio - servicetask218####");
	try {
		var gson = new com.google.gson.Gson();

		var errorMsg = [];
		var idUser = getValue('WKUser');
		var idProcess = getValue('WKNumProces');
		
		var isAditivo = hAPI.getCardValue('rd_tipoAditivo_30');
		log.info('###ISADITIVO')
		log.dir(isAditivo);

		var prazoQuantidade001 = 'Não';
		var reajuste003 = 'Não';
		var indice007 = 'Não';
		var realinhamento008 = 'Não';
		var grupoAprovador010 = 'Não';
		var trocaFornecedor012 = 'Não';

		if (isAditivo == 'div_19' ) {
			prazoQuantidade001 = 'Sim'
		}

		if (isAditivo == 'div_20') {
			reajuste003 = 'Sim'
		}

		if (isAditivo == 'div_21') {
			indice007 = 'Sim'
		}
		
		if (isAditivo == 'div_22') {
			realinhamento008 = 'Sim'
		}
		
		if (isAditivo == 'div_23') {
			grupoAprovador010 = 'Sim'
		}
		
		if (isAditivo == 'div_24') {
			trocaFornecedor012 = 'Sim'
		}

		log.info('PRAZO_E_QUANTIDADE');
		log.dir(prazoQuantidade001);
		log.info('REAJUSTE');
		log.dir(reajuste003);
		log.info('INDICE');
		log.dir(indice007);
		log.info('REALINHAMENTO');
		log.dir(realinhamento008);
		log.info('GRUPO_APROVADOR');
		log.dir(grupoAprovador010);
		log.info('TROCA_FORNECEDOR');
		log.dir(trocaFornecedor012);

		var NUMCNPJ = hAPI.getCardValue('txt_entidade_17') //'73471989000195'; VERIFICA SE O CNPJ E SEST OU SENAT
		var company = '' //'73471989000195'; NUMERO CNPJ SEST/SENAT

		if (NUMCNPJ == '010001') company = '73471989000195' //VERIFICA SE O CNPJ E SEST OU SENAT
		if (NUMCNPJ == '020001') company = '73471963000147' //VERIFICA SE O CNPJ E SEST OU SENAT

		var contrato = hAPI.getCardValue('txt_nProcesso_17'); //'000000000004627';
		
		// var revisao = hAPI.getCardValue('txt_revisao_19'); //'001';

		//CHAMA A INTEGRAÇÃO PRAZO E QUANTIDADE "001"
		if (prazoQuantidade001 == 'Sim') {
			var revisao = getLastRevisao(contrato);
			log.info("### ultima revisao retorno function:")
			log.dir(revisao);

			var justificativa = hAPI.getCardValue('atxt_objAditivo_19') //'TESTE FLUIG TREGUAS';
			log.info('TS - PRAZO E QUANTIDADE')
			var subItem = [];
			var indexes = hAPI.getChildrenIndexes('tbl_001_19');

			for (var i = 0; i < indexes.length; i++) {
				var idLine = parseInt(i) + 1;
				var CNB_ITEM = hAPI.getCardValue('column1_5___' + idLine); //"001"
				var CNB_QUANT = hAPI.getCardValue('column4_5___' + idLine); //3

				var cnbItem = {
					"tab": "CNB",
					"data": [{
							"CNB_ITEM": CNB_ITEM
						},
						{
							"CNB_QUANT": parseFloat(CNB_QUANT)
						}
					]
				}
				subItem.push(cnbItem);
			}

			var opcao = 1
			var tipo_aditivo = tipoAditivo(opcao);
			var dataObj = [{
					"CN9_VIGE": hAPI.getCardValue('txt_novaVigencia_19') //Vigencia do Contrato ex. '12'
				},
				{
					"CN9_UNVIGE": hAPI.getCardValue('cb_vigencia_19'), //Unidade de Vigencia ex. '2'
				},
				{
					"SubItem1": subItem,
				}
			]

			var cs = [
				DatasetFactory.createConstraint('company', company, company, ConstraintType.MUST),
				DatasetFactory.createConstraint('opcao', opcao, opcao, ConstraintType.MUST),
				DatasetFactory.createConstraint('contrato', contrato, contrato, ConstraintType.MUST),
				DatasetFactory.createConstraint('revisao', revisao, revisao, ConstraintType.MUST),
				DatasetFactory.createConstraint('tipo_aditivo', tipo_aditivo, tipo_aditivo, ConstraintType.MUST),
				DatasetFactory.createConstraint('justificativa', justificativa, justificativa, ConstraintType.MUST),
				DatasetFactory.createConstraint('dataItens', gson.toJson(dataObj), gson.toJson(dataObj), ConstraintType.MUST)
			];

			var dataset = DatasetFactory.getDataset('ds_aditivo_de_contrato', null, cs, null);

			if (
				dataset != undefined &&
				dataset != null &&
				dataset.rowsCount != null &&
				dataset.rowsCount != undefined &&
				dataset.rowsCount > 0
			) {
				//Trata retorno do dataset
				var retorno = dataset.getValue(0, "status");
				log.info('Retorno PRAZO E QUANTIDADE - servicetask218 - retorno ');
				log.dir(retorno)
				if (hasValue(retorno)) {
					if (retorno == 201) {
						//Caso sucesso
						log.info('Retorno PRAZO E QUANTIDADE - servicetask218 - retorno = 201');
						var msgValidacao = dataset.getValue(0, 'status') + ' - ' + dataset.getValue(0, 'msg');
						addSetTaskComments(idUser, idProcess, msgValidacao);
					} else if (retorno != 201) {
						log.info('Retorno PRAZO E QUANTIDADE - servicetask218 - retorno diferente de 201');
						var msgValidacao = dataset.getValue(0, 'status') + ' - ' + dataset.getValue(0, 'msg');
						var errorMsgPrazoQuantidade = 'Integração Prazo e Quantidade: ' + msgValidacao;
						errorMsg.push(errorMsgPrazoQuantidade)
					}
				} else {
					throw 'O retorno da integração PRAZO E QUANTIDADE não possui valor. Por favor, entre em contato com a TI.';
				}
			}
		} //*** FIM DA INTEGRAÇÃO PRAZO E QUANTIDADE "001"

		//CHAMA A INTEGRAÇÃO REAJUSTE "003"
		if (reajuste003 == 'Sim') {
			var revisao = getLastRevisao(contrato);
			log.info("### ultima revisao retorno function:")
			log.dir(revisao);




			log.info('TGSREAJUSTE - entrou no reajuste ADITIVO');
			var justificativaReajuste = hAPI.getCardValue('atxt_objAditivo_20');
			var dataReajuste = hAPI.getCardValue('txt_dtReajuste_20');
			var refReajuste = hAPI.getCardValue('txt_refReajuste_20');


			var opcao = 2
			var tipo_aditivo = tipoAditivo(opcao);
			var dataObj = [{
					"CN9_DTREAJ": dataReajuste
				},
				{
					"CN9_DREFRJ": refReajuste
				}
			];

			var cs = [
				DatasetFactory.createConstraint('company', company, company, ConstraintType.MUST),
				DatasetFactory.createConstraint('opcao', opcao, opcao, ConstraintType.MUST),
				DatasetFactory.createConstraint('contrato', contrato, contrato, ConstraintType.MUST),
				DatasetFactory.createConstraint('revisao', revisao, revisao, ConstraintType.MUST),
				DatasetFactory.createConstraint('tipo_aditivo', tipo_aditivo, tipo_aditivo, ConstraintType.MUST),
				DatasetFactory.createConstraint('justificativa', justificativaReajuste, justificativaReajuste, ConstraintType.MUST),
				DatasetFactory.createConstraint('dataItens', gson.toJson(dataObj), gson.toJson(dataObj), ConstraintType.MUST)
			];

			var dataset = DatasetFactory.getDataset('ds_aditivo_de_contrato', null, cs, null);

			if (
				dataset != undefined &&
				dataset != null &&
				dataset.rowsCount != null &&
				dataset.rowsCount != undefined &&
				dataset.rowsCount > 0
			) {
				//Trata retorno do dataset
				var retorno = dataset.getValue(0, "status");
				log.info('Retorno reajuste - servicetask218 - retorno ');
				log.dir(retorno)
				if (hasValue(retorno)) {
					if (retorno == 201) {
						//Caso sucesso
						log.info('Retorno reajuste - servicetask218 - retorno = 201');
						var msgValidacao = dataset.getValue(0, 'status') + ' - ' + dataset.getValue(0, 'msg');
						addSetTaskComments(idUser, idProcess, msgValidacao);
					} else if (retorno != 201) {
						log.info('Retorno reajuste - servicetask218 - retorno diferente de 201');
						var msgValidacao = dataset.getValue(0, 'status') + ' - ' + dataset.getValue(0, 'msg');
						var errorMsgReajuste = 'Integração Reajuste: ' + msgValidacao;
						errorMsg.push(errorMsgReajuste)
					}
				} else {
					throw 'O retorno da integração REAJUSTE não possui valor. Por favor, entre em contato com a TI.';
				}
			}
		} //*** FIM DA INTEGRAÇÃO REAJUSTE "003"

		//CHAMA A INTEGRAÇÃO INDICE "007"
		if (indice007 == 'Sim') {
			var revisao = getLastRevisao(contrato);
			log.info("### ultima revisao retorno function:")
			log.dir(revisao);


			log.info('TGSINDICE - entrou no INDICE');
			var justificativaIndice = hAPI.getCardValue('atxt_objAditivo_21');
			var cn9Indice = hAPI.getCardValue('txt_zf_indice'); //005
			// var cn9Indice = '005' //005

			var opcao = 9
			var tipo_aditivo = tipoAditivo(opcao);
			var dataObj = [{
				"CN9_INDICE": cn9Indice
			}];

			var cs = [
				DatasetFactory.createConstraint('company', company, company, ConstraintType.MUST),
				DatasetFactory.createConstraint('opcao', opcao, opcao, ConstraintType.MUST),
				DatasetFactory.createConstraint('contrato', contrato, contrato, ConstraintType.MUST),
				DatasetFactory.createConstraint('revisao', revisao, revisao, ConstraintType.MUST),
				DatasetFactory.createConstraint('tipo_aditivo', tipo_aditivo, tipo_aditivo, ConstraintType.MUST),
				DatasetFactory.createConstraint('justificativa', justificativaIndice, justificativaIndice, ConstraintType.MUST),
				DatasetFactory.createConstraint('dataItens', gson.toJson(dataObj), gson.toJson(dataObj), ConstraintType.MUST)
			];

			var dataset = DatasetFactory.getDataset('ds_aditivo_de_contrato', null, cs, null);

			if (
				dataset != undefined &&
				dataset != null &&
				dataset.rowsCount != null &&
				dataset.rowsCount != undefined &&
				dataset.rowsCount > 0
			) {
				//Trata retorno do dataset
				var retorno = dataset.getValue(0, "status");
				log.info('Retorno indice - servicetask218 - retorno ');
				log.dir(retorno)
				if (hasValue(retorno)) {
					if (retorno == 201) {
						//Caso sucesso
						log.info('Retorno indice - servicetask218 - retorno = 201');
						var msgValidacao = dataset.getValue(0, 'status') + ' - ' + dataset.getValue(0, 'msg');
						addSetTaskComments(idUser, idProcess, msgValidacao);
					} else if (retorno != 201) {
						log.info('Retorno indice - servicetask218 - retorno diferente de 201');
						var msgValidacao = dataset.getValue(0, 'status') + ' - ' + dataset.getValue(0, 'msg');
						var errorMsgIndice = 'Integração Indice: ' + msgValidacao;
						errorMsg.push(errorMsgIndice)
					}
				} else {
					throw 'O retorno da integração INDICE não possui valor. Por favor, entre em contato com a TI.';
				}
			}

		} //*** FIM DA INTEGRAÇÃO INDICE "007"

		//CHAMA A INTEGRAÇÃO REALINHAMENTO "008"
		if (realinhamento008 == 'Sim') {
			var revisao = getLastRevisao(contrato);
			log.info("### ultima revisao retorno function:")
			log.dir(revisao);








			log.info('TGSREALINHAMENTO - entrou no REALINHAMENTO');
			var cn9Numero = hAPI.getCardValue('txt_nProcesso_17'); //NUMERO DO PROCESSO
			var justificativaRealinhamento = hAPI.getCardValue('atxt_008_22');

			var subItemRealinhamento = [];
			var indexesRealinhamento = hAPI.getChildrenIndexes('tbl_008_22');
			for (var i = 0; i < indexesRealinhamento.length; i++) {
				var idLine = parseInt(i) + 1;
				var CNB_ITEM_REALINHAMENTO = hAPI.getCardValue('column1_7___' + idLine); //"001"
				var CNB_VALOR_UNITARIO = hAPI.getCardValue('column6_7___' + idLine); //3


				var itensRealinhamento = {
					"tab": "CNB",
					"data": [{
							"CNB_ITEM": CNB_ITEM_REALINHAMENTO
						},
						{
							"CNB_VLUNIT": parseFloat(CNB_VALOR_UNITARIO) //12 VALOR UNITARIO
						}
					]
				}
				subItemRealinhamento.push(itensRealinhamento);
			}

			var opcao = 3
			var tipo_aditivo = tipoAditivo(opcao);
			var dataObj = [{
					"CN9_NUMERO": cn9Numero
				},
				{
					"SubItem1": subItemRealinhamento,
				}
			];

			var cs = [
				DatasetFactory.createConstraint('company', company, company, ConstraintType.MUST),
				DatasetFactory.createConstraint('opcao', opcao, opcao, ConstraintType.MUST),
				DatasetFactory.createConstraint('contrato', contrato, contrato, ConstraintType.MUST),
				DatasetFactory.createConstraint('revisao', revisao, revisao, ConstraintType.MUST),
				DatasetFactory.createConstraint('tipo_aditivo', tipo_aditivo, tipo_aditivo, ConstraintType.MUST),
				DatasetFactory.createConstraint('justificativa', justificativaRealinhamento, justificativaRealinhamento, ConstraintType.MUST),
				DatasetFactory.createConstraint('dataItens', gson.toJson(dataObj), gson.toJson(dataObj), ConstraintType.MUST)
			];

			var dataset = DatasetFactory.getDataset('ds_aditivo_de_contrato', null, cs, null);

			if (
				dataset != undefined &&
				dataset != null &&
				dataset.rowsCount != null &&
				dataset.rowsCount != undefined &&
				dataset.rowsCount > 0
			) {
				//Trata retorno do dataset
				var retorno = dataset.getValue(0, "status");
				log.info('Retorno REALINHAMENTO - servicetask218 - retorno ');
				log.dir(retorno)
				if (hasValue(retorno)) {
					if (retorno == 201) {
						//Caso sucesso
						log.info('Retorno REALINHAMENTO - servicetask218 - retorno = 201');
						var msgValidacao = dataset.getValue(0, 'status') + ' - ' + dataset.getValue(0, 'msg');
						addSetTaskComments(idUser, idProcess, msgValidacao);
					} else if (retorno != 201) {
						log.info('Retorno REALINHAMENTO - servicetask218 - retorno diferente de 201');
						var msgValidacao = dataset.getValue(0, 'status') + ' - ' + dataset.getValue(0, 'msg');
						var errorMsgRealinhamento = 'Integração Realinhamento: ' + msgValidacao;
						errorMsg.push(errorMsgRealinhamento);
					}
				} else {
					throw 'O retorno da integração REALINHAMENTO não possui valor. Por favor, entre em contato com a TI.';
				}
			}
		} //*** FIM DA INTEGRAÇÃO REALINHAMENTO "008"

		//CHAMA A INTEGRAÇÃO GRUPO_DE_APROVADOR "010"
		if (grupoAprovador010 == 'Sim') {
			var revisao = getLastRevisao(contrato);
			log.info("### ultima revisao retorno function:")
			log.dir(revisao);


			log.info('TGSGRUPOAPROVADOR - entrou no GRUPO APROVADOR');
			var cn9APROV = hAPI.getCardValue('txt_zf_grupoAprovador'); //"000005"
			var justificativaGrupoAprov = hAPI.getCardValue('atxt_010_23');

			var opcao = 11
			var tipo_aditivo = tipoAditivo(opcao);
			var dataObj = [{
				"CN9_APROV": cn9APROV
			}];

			var cs = [
				DatasetFactory.createConstraint('company', company, company, ConstraintType.MUST),
				DatasetFactory.createConstraint('opcao', opcao, opcao, ConstraintType.MUST),
				DatasetFactory.createConstraint('contrato', contrato, contrato, ConstraintType.MUST),
				DatasetFactory.createConstraint('revisao', revisao, revisao, ConstraintType.MUST),
				DatasetFactory.createConstraint('tipo_aditivo', tipo_aditivo, tipo_aditivo, ConstraintType.MUST),
				DatasetFactory.createConstraint('justificativa', justificativaGrupoAprov, justificativaGrupoAprov, ConstraintType.MUST),
				DatasetFactory.createConstraint('dataItens', gson.toJson(dataObj), gson.toJson(dataObj), ConstraintType.MUST)
			];

			var dataset = DatasetFactory.getDataset('ds_aditivo_de_contrato', null, cs, null);

			if (
				dataset != undefined &&
				dataset != null &&
				dataset.rowsCount != null &&
				dataset.rowsCount != undefined &&
				dataset.rowsCount > 0
			) {
				//Trata retorno do dataset
				var retorno = dataset.getValue(0, "status");
				log.info('Retorno GRUPO DE APROVADOR - servicetask218 - retorno ');
				log.dir(retorno)
				if (hasValue(retorno)) {
					if (retorno == 201) {
						//Caso sucesso
						log.info('Retorno GRUPO DE APROVADOR - servicetask218 - retorno = 201');
						var msgValidacao = dataset.getValue(0, 'status') + ' - ' + dataset.getValue(0, 'msg');
						addSetTaskComments(idUser, idProcess, msgValidacao);
					} else if (retorno != 201) {
						log.info('Retorno GRUPO DE APROVADOR - servicetask218 - retorno diferente de 201');
						var msgValidacao = dataset.getValue(0, 'status') + ' - ' + dataset.getValue(0, 'msg');
						var errorMsgGrupoAprovador = 'Integração Grupo de Aprovador: ' + msgValidacao;
						errorMsg.push(errorMsgGrupoAprovador);
					}
				} else {
					throw 'O retorno da integração GRUPO DE APROVADOR não possui valor. Por favor, entre em contato com a TI.';
				}
			}

		} //*** FIM DA INTEGRAÇÃO GRUPO DE APROVADOR "010"

		//CHAMA A INTEGRAÇÃO GRUPO_DE_APROVADOR "012"
		if (trocaFornecedor012 == 'Sim') {
			var revisao = getLastRevisao(contrato);
			log.info("### ultima revisao retorno function:")
			log.dir(revisao);


			log.info('TGSTROCAFORNECEDOR - entrou no TROCA_DE_FORNECEDOR');
			var justificativaTrocaFornecedor = hAPI.getCardValue('atxt_012_24');
			var tabTrocaFornecedor = 'CNC';

			var loja = [{
				"tab": "CNC",
				"data": [
					{
						"CNC_CODIGO": hAPI.getCardValue('txt_codNovoFornecedor_24') //'000015'
					},
					{
						"CNC_LOJA": hAPI.getCardValue('LojaSelecionada_24') //'01'
					}
				]
			}]

			var opcao = 10
			var tipo_aditivo = tipoAditivo(opcao);
			var dataObj = loja;

			var cs = [
				DatasetFactory.createConstraint('company', company, company, ConstraintType.MUST),
				DatasetFactory.createConstraint('opcao', opcao, opcao, ConstraintType.MUST),
				DatasetFactory.createConstraint('contrato', contrato, contrato, ConstraintType.MUST),
				DatasetFactory.createConstraint('revisao', revisao, revisao, ConstraintType.MUST),
				DatasetFactory.createConstraint('tipo_aditivo', tipo_aditivo, tipo_aditivo, ConstraintType.MUST),
				DatasetFactory.createConstraint('justificativa', justificativaTrocaFornecedor, justificativaTrocaFornecedor, ConstraintType.MUST),
				DatasetFactory.createConstraint('tabela', tabTrocaFornecedor, tabTrocaFornecedor, ConstraintType.MUST),
				DatasetFactory.createConstraint('dataItens', gson.toJson(dataObj), gson.toJson(dataObj), ConstraintType.MUST),
			];

			var dataset = DatasetFactory.getDataset('ds_aditivo_de_contrato', null, cs, null);

			if (
				dataset != undefined &&
				dataset != null &&
				dataset.rowsCount != null &&
				dataset.rowsCount != undefined &&
				dataset.rowsCount > 0
			) {
				//Trata retorno do dataset
				var retorno = dataset.getValue(0, "status");
				log.info('Retorno reajuste - servicetask218 - retorno ');
				log.dir(retorno)
				if (hasValue(retorno)) {
					if (retorno == 201) {
						//Caso sucesso
						log.info('Retorno TROCA DE FORNECEDOR - servicetask218 - retorno = 201');
						var msgValidacao = dataset.getValue(0, 'status') + ' - ' + dataset.getValue(0, 'msg');
						addSetTaskComments(idUser, idProcess, msgValidacao);
					} else if (retorno != 201) {
						log.info('Retorno TROCA DE FORNECEDOR - servicetask218 - retorno diferente de 201');
						var msgValidacao = dataset.getValue(0, 'status') + ' - ' + dataset.getValue(0, 'msg');
						var errorMsgTrocaFornecedor = 'Integração Troca de Fornecedor: ' + msgValidacao;
						errorMsg.push(errorMsgTrocaFornecedor);
					}
				} else {
					throw 'O retorno da integração TROCA DE FORNECEDOR não possui valor. Por favor, entre em contato com a TI.';
				}
			}

		} //*** FIM DA INTEGRAÇÃO TROCA DE FORNECEDOR "012"

		if (errorMsg.length > 0) {
			log.error('Aditivo - servicetask218 - Levantando excecao para a plataforma: ' + errorMsg);
			var msgError = ' <br> ' + errorMsg.join(' <br> ') + ' <br> ';
			addSetTaskComments(idUser, idProcess, msgError);
			throw msgError;
		}



		log.info("Aditivo - FIM servicetask218 ####");
	} catch (e) {
		if (e != null && errorMsg != "ok") {
			log.error("Aditivo- ERRO servicetask218 => " + e);
			throw e;
		}
	}
}

function tipoAditivo(opcao) {
	if (opcao == 1) return '001'
	else if (opcao == 2) return '003';
	else if (opcao == 3) return '008';
	else if (opcao == 9) return '007';
	else if (opcao == 10) return '012';
	else if (opcao == 11) return '010';
}