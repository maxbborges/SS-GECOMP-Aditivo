function utils(){}

function efetivaAlteracoesNoFormulario(dataset){
	log.warn("Solicitação de Compras - efetivaAlteracoesNoFormulario - pendente validar funcionamento");
	if(dataset != null && dataset != undefined && dataset.rowsCount > 0){
		for(var i = 1; i < dataset.rowsCount; i++){
			var nomeCampo = dataset.getValue(i, "CAMPO");
			var valorCampo = dataset.getValue(i, "VALOR");
			
			if(temValor(nomeCampo)){
				hAPI.setCardValue(nomeCampo, valorCampo);
				log.info("#### NOMECAMPO: " + nomeCampo + " || VALORCAMPO: " + valorCampo);
			}
		}
	}
}

function addSetTaskComments(idUser, idProcess, errorMsg){
	if(hasValue(idUser) && hasValue(idProcess) && hasValue(errorMsg)){
		hAPI.setTaskComments(idUser, idProcess, 0, errorMsg);
	}
}

function hasValue(field) {
	if (field != null && field != undefined && field != '')	return true;
	return false;
}

function getLastRevisao() {
	var contrato = hAPI.getCardValue('txt_nProcesso_17'); //numero do contrato
	var cs1 = [
		DatasetFactory.createConstraint('numeroContrato', contrato, contrato, ConstraintType.MUST),
	];

	var datasetResult = DatasetFactory.getDataset('ds_field_revisao', null, cs1, null);
	var revisao = "";
	
	if (
		datasetResult != undefined &&
		datasetResult != null &&
		datasetResult.rowsCount != null &&
		datasetResult.rowsCount != undefined &&
		datasetResult.rowsCount > 0
		) {
			revisao = datasetResult.getValue(0, "CN9_REVISA");
		} else {
			revisao = "";
		}

		return revisao;

}