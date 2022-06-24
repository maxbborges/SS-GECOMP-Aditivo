function servicetask122(attempt, message) {
    log.info("#### >> ADITIVO TASK122 - INICIO")
    var nr_pasta = hAPI.getCardValue("txt_nrPasta");
    var idDocumento = hAPI.getCardValue("txt_idDoc10Parecer")
    var solicitacao = getValue("WKNumProces")
    var nmArquivo = hAPI.getCardValue("txt_nomeArquivoParecer_10");
    anexaDocumentoAssinado(idDocumento,nr_pasta,solicitacao,nmArquivo+'_assinado.pdf')
    log.info("#### >> ADITIVO TASK122 - FIM")
}