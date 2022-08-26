function anexaDocumentoAssinado(idDocumento, nr_pasta,nr_solicitacao,nmArquivo) {
    var constraints = [DatasetFactory.createConstraint('codArquivo', idDocumento, idDocumento, ConstraintType.MUST)];
    chaveArquivoAssinado = DatasetFactory.getDataset('ds_form_aux_vertsign', ["chaveArquivo"], constraints, null);
    var posicao = chaveArquivoAssinado.rowsCount-1
    constraints = [DatasetFactory.createConstraint('chaveArquivo', chaveArquivoAssinado.getValue(posicao, 'chaveArquivo'), chaveArquivoAssinado.getValue(0, 'chaveArquivo'), ConstraintType.MUST)];
    arquivoassinado = DatasetFactory.getDataset('recuperaDocumentoAssinado_vertsign', null, constraints, null);
    
    var constraintsDocument = new Array();
	constraintsDocument.push(DatasetFactory.createConstraint("nm_arquivo", nmArquivo, nmArquivo, ConstraintType.MUST));
	constraintsDocument.push(DatasetFactory.createConstraint("nr_pasta", nr_pasta, nr_pasta, ConstraintType.MUST));
	var posicao = arquivoassinado.rowsCount-1
	constraintsDocument.push(DatasetFactory.createConstraint("base64", arquivoassinado.getValue(posicao, 'arquivo_base64'), arquivoassinado.getValue(0, 'arquivo_base64'), ConstraintType.MUST));
	var dsDocument = DatasetFactory.getDataset('ds_grava_documento', null, constraintsDocument, null)
	dsDocument == ''
	if (dsDocument != null && dsDocument != undefined) {
	      if (dsDocument.values.length > 0) {
	    	  var posicao = dsDocument.rowsCount-1
	          documentId = dsDocument.getValue(posicao, 'documentId');
	          documentId = replaceString(documentId)
	          hAPI.attachDocument(documentId);
	      }
	 }
}

function replaceString(documentId){
	log.info("#### >> ADITIVO REPLACE - INICIO")
	log.info(documentId)
	var novoDocumentId = new java.lang.String(documentId)
	novoDocumentId = novoDocumentId.replace('.0','')
    log.info("#### >> ADITIVO REPLACE - FIM")
	return novoDocumentId
}