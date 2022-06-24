function replaceString(documentId){
	log.info("#### >> ADITIVO REPLACE - INICIO")
	log.info(documentId)
	var novoDocumentId = new java.lang.String(documentId)
	novoDocumentId = novoDocumentId.replace('.0','')
    log.info("#### >> ADITIVO REPLACE - FIM")
	return novoDocumentId
}