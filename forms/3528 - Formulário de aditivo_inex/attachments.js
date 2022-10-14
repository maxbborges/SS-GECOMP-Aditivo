// GlobalModules = window['GlobalModules'] || {}
// GlobalModules.fileUpload = (function(){
 
// })
let ATTACHMENT = {
    // MAP: {
    //     "Anexo Termo de Referencia Preliminar": {
    //         uploadBtn: "modeloAnexo",
    //         relatedContainer: "div_modeloAnexo",
    //         obj: null
    //     },
    // },
    init: function () {
        // if (ATIVIDADE == 0 || ATIVIDADE == 1){
        //     setInterval(function () {
        //         let attachments = parent.ECM.attachmentTable.getData();
        //         let tamanho = attachments.length;
        //         if(attachments != null && tamanho > 0){
        //             console.log(attachments[tamanho-1])
        //         }
        //     },2000)
		// }
        

//        console.log(GlobalModules)
//        console.log(parent.ECM.attachmentTable)
//        console.log(window.parent)
//        console.log(parent)
//        console.log(parent.WKFViewAttachment)
//        console.log(parent.ECM)

        $('#abreGED').click(function(){
        	window.parent.$("[data-attachments-load-ged]")[0].click()
        });
        // window.parent.$('#div-btn-attachment').hide()
        // window.parent.$('#datatable-area-search').hide()
        // if (ATIVIDADE != 1 && ATIVIDADE !=19){
        //     window.parent.$('#dLabel').hide()
        // }
    },
    showCamera:function (param) {
        var d = new Date();
        var dataparemeter = ('_'+nProcesso+"___"+d.getTime());
        console.log("Attachments.showCamera - " + param);
        JSInterface.showCamera(param+dataparemeter);

        if (param=='Manifestação-fornecedor'){
            $("#txt_nomeArquivo_01").val(param+dataparemeter)
        }

        if (param=='Nota-Tecnica-Solicitante'){
            $("#txt_nomeArquivo_27").val(param+dataparemeter)
            $('#workflowview-header .active').removeClass('active').removeClass('out')
            $('#workflow-detail-card').removeClass()
        }

         if (param=='ParecerJuridico'){
             $("#txt_nomeArquivoParecer_10").val(param+dataparemeter)
         }

         if (param=='MinutaTécnica'){
             $("#txt_nomeArquivoMinuta_10").val(param+dataparemeter)
         }

         if (param=='Nota-Tecnica-Compras'){
             $("#txt_nomeArquivo_07").val(param+dataparemeter)
         }
         
         setTimeout(() => {
            window.parent.$('#workflow-detail-card').removeClass()
            window.parent.$('#workflowview-header .active').removeClass('active').removeClass('out')
        }, 500);
        

        // $.each(parent.ECM.attachmentTable.getData(), function(i,attachment) {
        //     var attachmentId = attachment.id;
        //     var attachmentName = attachment.name;
        //     console.log(attachmentId)
        //     console.log(attachmentName)
        //     console.log(attachment)
    
        //     // $('[data-ref="'+ fieldId +'"]').val(attachmentId +" - "+ attachmentName)
    
        // })
    },
    view: function(targetDescription) {	
		$.each(parent.ECM.attachmentTable.getData(), function(i,attachment) {
			let description = attachment.description;
			let attachmentId = attachment.id;
			let attachmentName = attachment.name;
	        if(description == targetDescription){
	        	parent.WKFViewAttachment.openAttachmentView('admin', attachment.documentId, 1000);
	        }
	    });
	},
    download: function(targetDescription) {
		$.each(parent.ECM.attachmentTable.getData(), function(i,attachment) {
			let description = attachment.description;
			let attachmentId = attachment.id;
			let attachmentName = attachment.name;
	        if(description == targetDescription){
                console.log([i])
	        	parent.WKFViewAttachment.downloadAttach([i]);
	        	return;
	        }
	    });
	},
    obterIdDocumento: function (ativAtual,fieldDestino,nmArquivo){
        $.each(parent.ECM.attachmentTable.getData(), function(i,attachment) {
            let description = attachment.description;
            if(description == nmArquivo){
                let idAnexo = attachment.documentId
                $(fieldDestino).val(idAnexo);
                console.log('entrouAqui')
	        	return;
	        }
        });
        // var docs = hAPI.listAttachments();
        // console.log(docs)
        // for (var i = 0; i < docs.size(); i++) {
        //     var doc = docs.get(i);
        //     var dsAnexo = doc.getDocumentDescription();
        //     if (dsAnexo==nmArquivo){
        //         var idAnexo = doc.getDocumentId();
        //         hAPI.setCardValue(fieldDestino,idAnexo);
        //     }
        // }
    }
}