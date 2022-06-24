function servicetask139(attempt, message) {
    log.info("#### >> ADITIVO TASK139 - INICIO")
    var nr_pasta = hAPI.getCardValue("txt_nrPasta");
    var idDocumento = hAPI.getCardValue("txt_idDoc10Minuta")
    var solicitacao = getValue("WKNumProces")
    var nmArquivo = hAPI.getCardValue("txt_nomeArquivoMinuta_10");
    anexaDocumentoAssinado(idDocumento,nr_pasta,solicitacao,nmArquivo+'_assinado.pdf')
    log.info("#### >> ADITIVO TASK139 - FIM")
}