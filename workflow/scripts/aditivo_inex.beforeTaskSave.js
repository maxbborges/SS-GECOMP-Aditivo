function beforeTaskSave(colleagueId,nextSequenceId,userList){
	log.info('#### >> ADITIVO - BEFORETASKSAVE')
	var ativAtual = getValue("WKNumState");
	var solicitacao = getValue("WKNumProces")
	validarAnexosPorAtividade(ativAtual);
}

function validarAnexosPorAtividade(ativAtual){
	// Documento consultar fonecedor
	if (ativAtual==2){
		nmArquivo = hAPI.getCardValue("txt_nomeArquivo_01");
		obterIdDocumento(ativAtual,"txt_idDoc01",nmArquivo)
	}

	// Documento nota técnica Solicitante
	if (ativAtual==2){
		nmArquivo = hAPI.getCardValue("txt_nomeArquivo_27");
		obterIdDocumento(ativAtual,"txt_idDoc27",nmArquivo)
		validarAnexo(nmArquivo, false);
	}

	// DOCUMENTO NOTA TECNICA - COMPRAS
	if (ativAtual==7){
		nmArquivo = hAPI.getCardValue("txt_nomeArquivo_07");
		obterIdDocumento(ativAtual,"txt_idDoc07",nmArquivo)
		validarAnexo(nmArquivo, false);
	}

	// DOCUMENTO PARECER JURIDICO
	if (ativAtual==15){
		nmArquivo = hAPI.getCardValue("txt_nomeArquivoParecer_10");
		obterIdDocumento(ativAtual,"txt_idDoc10Parecer",nmArquivo)
		validarAnexo(nmArquivo, false);
	}

	// DOCUMENTO MINUTA
	if (ativAtual==15){
		nmArquivo = hAPI.getCardValue("txt_nomeArquivoMinuta_10");
		obterIdDocumento(ativAtual,"txt_idDoc10Minuta",nmArquivo)
		validarAnexo(nmArquivo, false);
	}
}

function validarAnexo(target, apenasPdf){
	var found = false;
	
	var docs = hAPI.listAttachments();
	if (docs.size() > 0) {
		var found = true;
	}
	if(!found) throw target + " é obrigatório!";
}

function obterIdDocumento(ativAtual,fieldDestino,nmArquivo){
	var docs = hAPI.listAttachments();
	for (var i = 0; i < docs.size(); i++) {
		var doc = docs.get(i);
		var dsAnexo = doc.getDocumentDescription();
		if (dsAnexo==nmArquivo){
			var idAnexo = doc.getDocumentId();
	        hAPI.setCardValue(fieldDestino,idAnexo);
		}
	}
}