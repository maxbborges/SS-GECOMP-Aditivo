function servicetask180(attempt, message) {
    log.info("#### >> ADITIVO TASK180 - INICIO")
    var nr_pasta = hAPI.getCardValue("txt_nrPasta");
    var idDocumento = hAPI.getCardValue("txt_idDoc07")
    var solicitacao = getValue("WKNumProces")
    var nmArquivo = hAPI.getCardValue("txt_nomeArquivo_07");
    anexaDocumentoAssinado(idDocumento,nr_pasta,solicitacao,nmArquivo+'_assinado.pdf')
    log.info("#### >> ADITIVO TASK180 - FIM")
}