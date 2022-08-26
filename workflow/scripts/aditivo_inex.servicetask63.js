function servicetask63(attempt, message) {
    log.info("#### >> ADITIVO TASK63 - INICIO")
    var nr_pasta = hAPI.getCardValue("txt_nrPasta");
    var idDocumento = hAPI.getCardValue("txt_idDoc27")
    var solicitacao = getValue("WKNumProces")
    var nmArquivo = hAPI.getCardValue("txt_nomeArquivo_27");
    anexaDocumentoAssinado(idDocumento,nr_pasta,solicitacao,nmArquivo+'_assinado.pdf')
    log.info("#### >> ADITIVO TASK63 - FIM")
}
