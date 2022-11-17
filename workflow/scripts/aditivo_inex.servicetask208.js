function servicetask208(attempt, message) {
  log.info('TGS - MAANANGERAPPROVES');
  var errorMsg = [];
  var idUser = getValue('WKUser');
  var idProcess = getValue('WKNumProces');
  // var manangerApproves = true;
  var contrato = hAPI.getCardValue('txt_nProcesso_17');

  var cs = [
    DatasetFactory.createConstraint('contrato', contrato, contrato, ConstraintType.MUST),
  ];

  var dataset = DatasetFactory.getDataset('ds_tornar_aditivo_vigente', null, cs, null);
  
  try{
	  if (
			    dataset != undefined &&
			    dataset != null &&
			    dataset.rowsCount != null &&
			    dataset.rowsCount != undefined &&
			    dataset.rowsCount > 0
			  ) {
			    var retorno = dataset.getValue(0, "status");
			    log.info('RETORNO MANAGER APPROVES');
			    log.dir(retorno)
			    if (hasValue(retorno)) {
			      if (retorno == 201) {
			        var msgValidacao = dataset.getValue(0, 'status') + ' - ' + dataset.getValue(0, 'msg');
			        addSetTaskComments(idUser, idProcess, msgValidacao);
			        return true
			      } else if (retorno != 201) {
			        var msgValidacao = dataset.getValue(0, 'status') + ' - ' + dataset.getValue(0, 'msg');
			        var errorMsgManagerApproves = 'Integração Gestor Aprova: ' + msgValidacao;
			        errorMsg.push(errorMsgManagerApproves)
			      }
			    } else {
			      throw 'O retorno da integração GESTOR APROVA não obteve êxito. Por favor, entre em contato com a TI.';
			    }
			  }
  }catch (e) {
	  throw "algum erro TryCatch";
  }

}