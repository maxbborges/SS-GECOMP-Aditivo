let ATTACHMENT = {
    init: function () {
        $('#abreGED').click(function(){
        	window.parent.$("[data-attachments-load-ged]")[0].click()
        });
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
	        	return;
	        }
        });
    }
}