let loading = FLUIGC.loading(window);
$(document).ready(function () {
    setTimeout(() => {
        // dados=$('.title-form-application').nextAll('[type="hidden"]')
        dados=$("input[type='hidden']")
        for(i=66;i<dados.length;i++){
            dados[i].type='text'
            
        }
    }, 300);
    loadHideShow();
    loadClicks();
    loadChange();
    loadMasks();
    setTimeout(() => {
        loadCollapse()
    }, 300);
    
    // loadDatasets();

    // window.parent.$('#workflow-detail-card').removeClass()
    // window.parent.$('#workflowview-header .active').removeClass('active').removeClass('out')

    // wdkAddChild("tbl_012_24");
});

function msgsToast(msg, tipo) {
    FLUIGC.toast({
        title: 'Atenção: ',
        message: msg,
        type: tipo
    });
    if (tipo=='danger'){
        throw "Erro! "+msg
    }
}

function loadHideShow() {
    //    window.parent.$('#div-btn-attachment').hide()

    if (($('[tablename="tbl_notaTecnica_02"] tbody').children()).length < 2) {
        $('[tablename="tbl_notaTecnica_02"]').hide()
    }

    if (($('[tablename="tbl_assinantes_15"] tbody').children()).length < 2) {
        $('[tablename="tbl_assinantes_15"]').hide()
    }

    if (($('[tablename="tbl_pesquisa_06"] tbody').children()).length < 2) {
        $('[tablename="tbl_pesquisa_06"]').hide()
    }

    $('#div_tipoAditivo_30').hide()
    hideTiposAditivo()

    if (ATIVIDADE != ACTIVITY.PREPARAR_ADITIVO) {
        // var conteudo = $('#div_02 .row')
        // for (i = 5; i <= 10; i++) {
        // $(conteudo[i]).hide()
        // }
    }

    if (ATIVIDADE == ACTIVITY.INICIO || ATIVIDADE == ACTIVITY.ZERO) {
        $('[name="slc_fornecedor_associar"]').parent().hide()
    } else {
        $('[name="rd_tipoContratacao_02"]').prop('readonly', true);
    }
    // if (ATIVIDADE!=ACTIVITY.INICIO && ATIVIDADE!=ACTIVITY.ZERO){
    //     // $('[name="slc_010_23"]').attr("disabled", true);
    //     // $('[name="slc_010_23"]').attr("style", "pointer-events: none;");
    //     // 
    //     // setTimeout(() => {
    //     //     $('[name="zf_gpAtual_23"]').attr("disabled", true); 
    //     // }, 300);
    // }


    if (ATIVIDADE == ACTIVITY.PREPARAR_ADITIVO) {
        $('[name="txt_nProc"]').val(nProcesso)
        // if(($('[tablename="tbl_notaTecnica_02"] tbody').children()).length<2){
        //     $('[tablename="tbl_notaTecnica_02"]').hide()
        // }
        // $('[name="atxt_itensAlterados"]').parent().hide()
        // $('[name="txt_vigencia_novo"]').parent().hide()
        // $('[name="txt_execucao_nova"]').parent().hide()
        // $('[name="txt_percentualAcrescimo_02"]').parent().hide()
        // $('[name="txt_ValorAcrescimo_02"]').parent().hide()
        // $('[name="txt_percentualSupressao_02"]').parent().hide()
        // $('[name="txt_valorSupressao_02"]').parent().hide()
        // $('[name="txt_percentualReajuste_02"]').parent().hide()
        // $('[name="txt_valorReajuste_02"]').parent().hide()
        // $('[name="txt_valorRepactuacao_02"]').parent().hide()
        // $('[name="txt_percentualRepactuacao_02"]').parent().hide()
        // $('[name="txt_percentualRevisao_02"]').parent().hide()
        // $('[name="txt_valorRevisao_02"]').parent().hide()
        // $('[name="atxt_outrosJustificativa_02"]').parent().hide()
    } else {
        if (FORM_MODE == 'MOD') {
            $('[tablename="tbl_notaTecnica_02"] tbody td:first-child').hide()
            $('[tablename="tbl_notaTecnica_02"] thead th:first-child').hide()
        }

    }

    if (ATIVIDADE == ACTIVITY.FAZER_PESQUISA_PRECO) {
        // if(($('[tablename="tbl_pesquisa_06"] tbody').children()).length<2){
        //     $('[tablename="tbl_pesquisa_06"]').hide()
        // }
    } else {
        if (FORM_MODE == 'MOD') {
            $('[tablename="tbl_pesquisa_06"] tbody td:first-child').hide()
            $('[tablename="tbl_pesquisa_06"] thead th:first-child').hide()
        }

    }

    if (ATIVIDADE == ACTIVITY.ANALISE_PREVIA) {
        // $('[name="cb_responsaval_09"]').parent().hide()
        // $('[name="atxt_justificativa_09"]').parent().hide()
    }

    if (ATIVIDADE == ACTIVITY.CADASTRAR_EMPRESA_VERTSIGN) {
        // if(($('[tablename="tbl_assinantes_15"] tbody').children()).length<2){
        //     $('[tablename="tbl_assinantes_15"]').hide()
        // }
    } else {
        if (FORM_MODE == 'MOD') {
            $('[tablename="tbl_assinantes_15"] tbody td:first-child').hide()
            $('[tablename="tbl_assinantes_15"] thead th:first-child').hide()
        }
    }

    if (ATIVIDADE != ACTIVITY.PREPARAR_ADITIVO) {
        // $('[name="slc_010_23"]').attr("disabled", true);
        // $('[name="slc_010_23"]').attr("style", "pointer-events: none;");
        // 
        // setTimeout(() => {
        //     $('[name="zf_fornecedores_24"]').attr("disabled", true); 
        // }, 300);
    }
}

function loadClicks() {
    $('#btn_CarregarProceso_00').on("click", function () {
        loading.show()
        var nprocessoAnterior = $('[name="txt_nProcAnterior"]').val()

        var slc_fornecedor_associar = $('[name="slc_fornecedor_associar"]')
        var options = $(slc_fornecedor_associar).find('option')

        var tbl_dadosContrato_17 = $('[tablename="tbl_dadosContrato_17"]').find('tr')
        var tbl_008_22 = $('[tablename="tbl_008_22"]').find('tr')
        var tbl_003_20 = $('[tablename="tbl_003_20"]').find('tr')
        var tbl_001_19 = $('[tablename="tbl_001_19"]').find('tr')

        // 
        // REMOVER AS OPTIONS ANTERIORES
        for (i = 1; i < options.length; i++) {
            options[i].remove()
        }
        // 
        // REMOVER AS LINHAS DA TABELAS TABELAS DIV17,
        for (i = 2; i < tbl_dadosContrato_17.length; i++) {
            tbl_dadosContrato_17[i].remove()
        }

        // REMOVER AS LINHAS DA TABELAS TABELAS DIV17,
        for (i = 2; i < tbl_008_22.length; i++) {
            tbl_008_22[i].remove()
        }

        // REMOVER AS LINHAS DA TABELAS TABELAS DIV17,
        for (i = 2; i < tbl_003_20.length; i++) {
            tbl_003_20[i].remove()
        }

        // REMOVER AS LINHAS DA TABELAS TABELAS DIV17,
        for (i = 2; i < tbl_001_19.length; i++) {
            tbl_001_19[i].remove()
        }

        if (nprocessoAnterior == null || nprocessoAnterior == '') {
            loading.hide()
            msgsToast("Necessário digitar algum processo para buscar!", 'danger')
        } else {
            constraints = [
                DatasetFactory.createConstraint("txt_numProtocolo", nprocessoAnterior, nprocessoAnterior, ConstraintType.MUST),
                DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST)
            ];
            let datasetSolicitacoes = (DatasetFactory.getDataset("ds_solicitacaoDeCompras", null, constraints, null)).values
            console.log(datasetSolicitacoes)
            if (datasetSolicitacoes.length > 0) {
                for (i = 0; i < datasetSolicitacoes.length; i++) {
                    $(slc_fornecedor_associar).append(
                        $('<option>', {
                            value: datasetSolicitacoes[i].descricaoFornecRet,
                            text: datasetSolicitacoes[i].descricaoFornecRet
                        })
                    );

                    $('[name="txt_codFilialAnterior"]').val(datasetSolicitacoes[i].cdFilial)
                    $('[name="txt_nContratoAnterior"]').val(datasetSolicitacoes[i].txt_numeroDoContratoRetorno)
                    $('[name="atxt_obj_17"]').val(datasetSolicitacoes[i].descricaoDocContrato)
                    $('[name="txt_entidade_17"]').val(datasetSolicitacoes[i].cdFilial)
                }
                $(slc_fornecedor_associar).parent().show()
                loadDatasets(datasetSolicitacoes[0].cdFilial, datasetSolicitacoes[0].txt_numSc);
            } else {
                loading.hide()
                msgsToast("Processo não encontrado!", 'danger')
                
            }
        }
    });

    $('#btn_carregarAssinante_15').on("click", function () {
        var cpfAssinante = $('[name="txt_cpf_fornecedor_15"]').val()
        console.log(cpfAssinante)
        if (cpfAssinante == null || cpfAssinante == '') {
            msgsToast("Necessário digitar algum CPF para buscar!", 'danger')
        } else {
            constraints = [
                DatasetFactory.createConstraint("cpf", cpfAssinante, cpfAssinante, ConstraintType.MUST),
            ];
            let datasetAssinante = (DatasetFactory.getDataset("ds_busca_assinante", null, constraints, null)).values
            console.log(datasetAssinante)
            if (datasetAssinante.length > 0) {
                $('[name="txt_nome_fornecedor_15"]').val(datasetAssinante[0].nome)
                $('[name="txt_email_fornecedor_15"]').val(datasetAssinante[0].email)
            } else {
                msgsToast("Assinante não encontrado!", 'danger')
            }
        }
    });

    $('#btn_incluirAssinante_15').on("click", function () {
        var cpfAssinante = $('[name="txt_cpf_fornecedor_15"]').val()
        var nomeAssinante = $('[name="txt_nome_fornecedor_15"]').val()
        var emailAssinante = $('[name="txt_email_fornecedor_15"]').val()
        if (cpfAssinante == '' || nomeAssinante == '' || emailAssinante == '') {
            msgsToast("Não foi possível carregar o assinante", 'danger')
        } else {
            wdkAddChild('tbl_assinantes_15')
            $('[tablename="tbl_assinantes_15"]').show()
            tbl = $('[tablename="tbl_assinantes_15"] tbody').children().find("input:last-child")
            tblLength = tbl.length
            $(tbl[tblLength - 3]).val(cpfAssinante)
            $(tbl[tblLength - 2]).val(nomeAssinante)
            $(tbl[tblLength - 1]).val(emailAssinante)
            $('[name="txt_cpf_fornecedor_15"]').val('')
            $('[name="txt_nome_fornecedor_15"]').val('')
            $('[name="txt_email_fornecedor_15"]').val('')
        }
    });

    $('#btn_Incluir_02').on("click", function () {
        var entidade = $('[name="rd_entidade_02"]:checked').val()
        var itemContrato = $('[name="rd_alteracaoReferente_02"]:checked').val()
        var tipoContratacao = $('[name="rd_tipoContratacao_02"]:checked').val()
        var pesquisaDePreco = $('[name="rd_pesquisaPreco_02"]:checked').val()
        // itens modificados //
        var acrescimo = $('[name="rd_acrescimo_02"]:checked').val()
        var supressao = $('[name="rd_supressao_02"]:checked').val()
        var reajuste = $('[name="rd_reajuste_02"]:checked').val()
        var repactuacao = $('[name="rd_repactuacao_02"]:checked').val()
        var revisao = $('[name="rd_revisao_02"]:checked').val()
        var outros = $('[name="rd_outros_02"]:checked').val()
        // itens modificados //
        var projeto = $('[name="txt_projeto_02"]').val()
        var programa = $('[name="txt_programa_02"]').val()
        var subprograma = $('[name="txt_subprograma_02"]').val()
        var centroDeCusto = $('[name="txt_centroCusto_02"]').val()
        var grupoOrcamentario = $('[name="txt_gpOrcamento_02"]').val()
        if ('a' == 'b') {
            msgsToast("Preencha todos os campos obrigatórios", 'danger')
        } else {
            wdkAddChild('tbl_notaTecnica_02')
            $('[tablename="tbl_notaTecnica_02"]').show()
            var modificacao = ''
            // tbl=$('[tablename="tbl_notaTecnica_02"] tbody').children().find("input:last-child")
            // tblLength = tbl.length
            $('#column1_1___' + newId).val(entidade)
            $('#column2_1___' + newId).val(itemContrato)
            $('#column3_1___' + newId).val(tipoContratacao)
            $('#column4_1___' + newId).val(pesquisaDePreco)
            if (acrescimo == 'Sim') {
                if (modificacao != '') {
                    modificacao = modificacao + '\n'
                }
                modificacao = modificacao + 'Acrescimo: ' + $('[name="txt_percentualAcrescimo_02"]').val() + ' - ' + $('[name="txt_ValorAcrescimo_02"]').val()
            }
            if (supressao == 'Sim') {
                if (modificacao != '') {
                    modificacao = modificacao + '\n'
                }
                modificacao = modificacao + 'Supressao: ' + $('[name="txt_percentualSupressao_02"]').val() + ' - ' + $('[name="txt_valorSupressao_02"]').val()
            }
            if (reajuste == 'Sim') {
                if (modificacao != '') {
                    modificacao = modificacao + '\n'
                }
                modificacao = modificacao + 'Reajuste: ' + $('[name="txt_percentualReajuste_02"]').val() + ' - ' + $('[name="txt_valorReajuste_02"]').val()
            }
            if (repactuacao == 'Sim') {
                if (modificacao != '') {
                    modificacao = modificacao + '\n'
                }
                modificacao = modificacao + 'Repactuacao: ' + $('[name="txt_percentualRepactuacao_02"]').val() + ' - ' + $('[name="txt_valorRepactuacao_02"]').val()
            }
            if (revisao == 'Sim') {
                if (modificacao != '') {
                    modificacao = modificacao + '\n'
                }
                modificacao = modificacao + 'Revisao: ' + $('[name="txt_percentualRevisao_02"]').val() + ' - ' + $('[name="txt_valorRevisao_02"]').val()
            }
            if (outros == 'Sim') {
                if (modificacao != '') {
                    modificacao = modificacao + '\n'
                }
                modificacao = modificacao + 'Outros: ' + $('[name="atxt_outrosJustificativa_02"]').val()
            }
            $('#column5_1___' + newId).val(modificacao)
            $('#column6_1___' + newId).val(projeto)
            $('#column7_1___' + newId).val(programa)
            $('#column8_1___' + newId).val(subprograma)
            $('#column9_1___' + newId).val(centroDeCusto)
            $('#column10_1___' + newId).val(grupoOrcamentario)
        }
    });

    $('#btn_incluir_06').on("click", function () {
        var cnpj = $('[name="txt_cnpj_06"]').val()
        var razaoSocial = $('[name="txt_razaoSocial_06"]').val()
        var valorUnitario = $('[name="txt_ValUnitario_06"]').val()
        var valorTotal = $('[name="txt_valorTotal_06"]').val()
        var descricao = $('[name="atxt_descricao_06"]').val()
        if ('a' == 'b') {
        } else {
            wdkAddChild('tbl_pesquisa_06')
            $('[tablename="tbl_pesquisa_06"]').show()
            // tbl=$('[tablename="tbl_pesquisa_06"] tbody').children().find(".form-control:last-child")
            // tblLength = tbl.length
            $('#column1_2___' + newId).val(cnpj)
            $('#column2_2___' + newId).val(razaoSocial)
            $('#column3_2___' + newId).val(valorUnitario)
            $('#column4_2___' + newId).val(valorTotal)
            $('#column5_2___' + newId).val(descricao)
        }
    });

    $('#btn_anexar_01').on("click", function () {
        ATTACHMENT.showCamera('Manifestação-fornecedor');
        $('#workflowview-header .active').removeClass('active').removeClass('out')
        $('#workflow-detail-card').removeClass()
    });

    $('#btn_download_01').on("click", function () {
        ATTACHMENT.download($('#txt_nomeArquivo_01').val());
    });

    $('#btn_visualizar_01').on("click", function () {
        ATTACHMENT.view($('#txt_nomeArquivo_01').val());
    });

    $('#btn_anexar_27').on("click", function () {
        ATTACHMENT.showCamera('Nota-Tecnica-Solicitante');
    });

    $('#btn_download_27').on("click", function () {
        ATTACHMENT.download($('#txt_nomeArquivo_27').val());
    });

    $('#btn_visualizar_27').on("click", function () {
        ATTACHMENT.view($('#txt_nomeArquivo_27').val());
    });

    $('#btn_anexar_07').on("click", function () {
        ATTACHMENT.showCamera('Nota-Tecnica-Compras');
        $('#workflowview-header .active').removeClass('active').removeClass('out')
        $('#workflow-detail-card').removeClass()
    });

    $('#btn_download_07').on("click", function () {
        ATTACHMENT.download($('#txt_nomeArquivo_07').val());
    });

    $('#btn_visualizar_07').on("click", function () {
        ATTACHMENT.view($('#txt_nomeArquivo_07').val());
    });

    $('#btn_anexarParecer_10').on("click", function () {
        ATTACHMENT.showCamera('ParecerJuridico');
        $('#workflowview-header .active').removeClass('active').removeClass('out')
        $('#workflow-detail-card').removeClass()
    });

    $('#btn_downloadParecer_10').on("click", function () {
        ATTACHMENT.download($('#txt_nomeArquivoParecer_10').val());
    });

    $('#btn_visualizarParecer_10').on("click", function () {
        ATTACHMENT.view($('#txt_nomeArquivoParecer_10').val());
    });

    $('#btn_anexarMinuta_10').on("click", function () {
        ATTACHMENT.showCamera('MinutaTécnica');
        $('#workflowview-header .active').removeClass('active').removeClass('out')
        $('#workflow-detail-card').removeClass()
    });

    $('#btn_downloadMinuta_10').on("click", function () {
        ATTACHMENT.download($('#txt_nomeArquivoMinuta_10').val());
    });

    $('#btn_visualizarMinuta_10').on("click", function () {
        ATTACHMENT.view($('#txt_nomeArquivoMinuta_10').val());
    });

    $('#btn_ass_notaTecnica').on("click", function () {
        var data = new Date().toLocaleDateString('pt-BR')
		var horario = new Date().toLocaleTimeString('pt-BR')
        var nr_pasta=$('[name="txt_nrPasta"]').val()
        var	nm_Arquivo=$('[name="txt_nomeArquivo_27"]').val()
        ATTACHMENT.obterIdDocumento('2','[name="txt_idDoc27"]',nm_Arquivo)
        var idDocumento=$('[name="txt_idDoc27"]').val()
        var solicitacao=$('[name="txt_nProc"]').val()
        var listaDeAtividades=['0','2']
        if (data=='' || horario=='' || nr_pasta=='' || nm_Arquivo=='' || idDocumento=='' || solicitacao==''){
            throw "CAMPOS EM BRANCO!"
        }
        
        var tabela = []
        var userIds=[]
		var assinantes=[]
		var emails=[]
		


        userIds = buscaIdsPorAtividade(userIds,listaDeAtividades,solicitacao)
    	emails = buscarEmailsPorId(userIds,emails);
		assinantes = buscarPorEmail(emails,assinantes,tabela)
        if (assinantes.length<1){
            msgsToast("Erro ao carregar assinantes",'danger')
        }
		var dadosAssinantes={
            "assinantes":JSON.stringify(assinantes),
            "idReponsavelEnvio":'71b454c9cd0b11ebaccaf6013dce9bda',
            "nomeResponsavelEnvio":'Maxwell Borges Bezerra'
        }
        var parametrosAssinatura = enviaParaAssinatura(nr_pasta, dadosAssinantes, idDocumento, nm_Arquivo, solicitacao,data,horario)
	    setTimeout(function(){ rodarDataset(parametrosAssinatura,solicitacao) }, 1000);
    });

    $('#btn_ass_novaNotaTecnica').on("click", function () {
        var data = new Date().toLocaleDateString('pt-BR')
		var horario = new Date().toLocaleTimeString('pt-BR')
        var nr_pasta=$('[name="txt_nrPasta"]').val()
        var	nm_Arquivo=$('[name="txt_nomeArquivo_07"]').val()
        ATTACHMENT.obterIdDocumento('2','[name="txt_idDoc07"]',nm_Arquivo)
        var idDocumento=$('[name="txt_idDoc07"]').val()
        var solicitacao=$('[name="txt_nProc"]').val()
        var listaDeAtividades=['7','0']
        if (data=='' || horario=='' || nr_pasta=='' || nm_Arquivo=='' || idDocumento=='' || solicitacao==''){
            throw "CAMPOS EM BRANCO!"
        }
        
        var tabela = []
        var userIds=[]
		var assinantes=[]
		var emails=[]
		


        userIds = buscaIdsPorAtividade(userIds,listaDeAtividades,solicitacao)
    	emails = buscarEmailsPorId(userIds,emails);
		assinantes = buscarPorEmail(emails,assinantes,tabela)
        if (assinantes.length<1){
            msgsToast("Erro ao carregar assinantes",'danger')
        }
		var dadosAssinantes={
            "assinantes":JSON.stringify(assinantes),
            "idReponsavelEnvio":'71b454c9cd0b11ebaccaf6013dce9bda',
            "nomeResponsavelEnvio":'Maxwell Borges Bezerra'
        }
        var parametrosAssinatura = enviaParaAssinatura(nr_pasta, dadosAssinantes, idDocumento, nm_Arquivo, solicitacao,data,horario)
	    setTimeout(function(){ rodarDataset(parametrosAssinatura,solicitacao) }, 1000);
    });

    $('#btn_ass_parecerJuridico').on("click", function () {
        var data = new Date().toLocaleDateString('pt-BR')
		var horario = new Date().toLocaleTimeString('pt-BR')
        var nr_pasta=$('[name="txt_nrPasta"]').val()
        var	nm_Arquivo=$('[name="txt_nomeArquivoParecer_10"]').val()
        ATTACHMENT.obterIdDocumento('2','[name="txt_idDoc10Parecer"]',nm_Arquivo)
        var idDocumento=$('[name="txt_idDoc10Parecer"]').val()
        var solicitacao=$('[name="txt_nProc"]').val()
        var listaDeAtividades=['172','14','0']
        if (data=='' || horario=='' || nr_pasta=='' || nm_Arquivo=='' || idDocumento=='' || solicitacao==''){
            throw "CAMPOS EM BRANCO!"
        }
        
        var tabela = []
        var userIds=[]
		var assinantes=[]
		var emails=[]
		


        userIds = buscaIdsPorAtividade(userIds,listaDeAtividades,solicitacao)
    	emails = buscarEmailsPorId(userIds,emails);
		assinantes = buscarPorEmail(emails,assinantes,tabela)
        console.log(assinantes)
        if (assinantes.length<1){
            msgsToast("Erro ao carregar assinantes",'danger')
        }
		var dadosAssinantes={
            "assinantes":JSON.stringify(assinantes),
            "idReponsavelEnvio":'71b454c9cd0b11ebaccaf6013dce9bda',
            "nomeResponsavelEnvio":'Maxwell Borges Bezerra'
        }
        var parametrosAssinatura = enviaParaAssinatura(nr_pasta, dadosAssinantes, idDocumento, nm_Arquivo, solicitacao,data,horario)
	    setTimeout(function(){ rodarDataset(parametrosAssinatura,solicitacao) }, 1000);
    });

    $('#btn_ass_minuta').on("click", function () {
        var data = new Date().toLocaleDateString('pt-BR')
		var horario = new Date().toLocaleTimeString('pt-BR')
        var nr_pasta=$('[name="txt_nrPasta"]').val()
        var	nm_Arquivo=$('[name="txt_nomeArquivoMinuta_10"]').val()
        ATTACHMENT.obterIdDocumento('2','[name="txt_idDoc10Minuta"]',nm_Arquivo)
        var idDocumento=$('[name="txt_idDoc10Minuta"]').val()
        var solicitacao=$('[name="txt_nProc"]').val()
        var listaDeAtividades=['0']
        if (data=='' || horario=='' || nr_pasta=='' || nm_Arquivo=='' || idDocumento=='' || solicitacao==''){
            throw "CAMPOS EM BRANCO!"
        }
        
        var tabela = $("input[name^='column3_4___']")
        var userIds=[]
		var assinantes=[]
		var emails=[]
		


        userIds = buscaIdsPorAtividade(userIds,listaDeAtividades,solicitacao)
    	emails = buscarEmailsPorId(userIds,emails);
		assinantes = buscarPorEmail(emails,assinantes,tabela)
        if (assinantes.length<1){
            msgsToast("Erro ao carregar assinantes",'danger')
        }
		var dadosAssinantes={
            "assinantes":JSON.stringify(assinantes),
            "idReponsavelEnvio":'71b454c9cd0b11ebaccaf6013dce9bda',
            "nomeResponsavelEnvio":'Maxwell Borges Bezerra'
        }
        var parametrosAssinatura = enviaParaAssinatura(nr_pasta, dadosAssinantes, idDocumento, nm_Arquivo, solicitacao,data,horario)
	    setTimeout(function(){ rodarDataset(parametrosAssinatura,solicitacao) }, 1000);
    });
}

function loadChange() {
    $('[name="rd_alteracaoReferente_02"]').on('change', function () {
        if ($(this).val() == 'Um ou varios') {
            $('[name="atxt_itensAlterados"]').prop('readonly',false).parent().find('label').addClass('required')
        } else {
            $('[name="atxt_itensAlterados"]').prop('readonly',true).parent().find('label').removeClass('required')
        }
    });

    $('[name="rd_vigencia_02"]').on('change', function () {
        if ($(this).val() == 'Sim') {
            $('[name="txt_vigencia_novo"]').prop('readonly',false).parent().find('label').addClass('required')
        } else {
            $('[name="txt_vigencia_novo"]').prop('readonly',true).parent().find('label').removeClass('required')
        }
    });

    $('[name="rd_execucao_02"]').on('change', function () {
        if ($(this).val() == 'Sim') {
            $('[name="txt_execucao_nova"]').prop('readonly',false).parent().find('label').addClass('required')
        } else {
            $('[name="txt_execucao_nova"]').prop('readonly',true).parent().find('label').removeClass('required')
        }
    });

    $('[name="rd_acrescimo_02"]').on('change', function () {
        if ($(this).val() == 'Sim') {
            $('[name="txt_percentualAcrescimo_02"]').prop('readonly',false).parent().find('label').addClass('required')
            $('[name="txt_ValorAcrescimo_02"]').prop('readonly',false).parent().find('label').addClass('required')
        } else {
            $('[name="txt_percentualAcrescimo_02"]').prop('readonly',true).parent().find('label').removeClass('required')
            $('[name="txt_ValorAcrescimo_02"]').prop('readonly',true).parent().find('label').removeClass('required')
        }
    });

    $('[name="rd_supressao_02"]').on('change', function () {
        if ($(this).val() == 'Sim') {
            $('[name="txt_percentualSupressao_02"]').prop('readonly',false).parent().find('label').addClass('required')
            $('[name="txt_valorSupressao_02"]').prop('readonly',false).parent().find('label').addClass('required')
        } else {
            $('[name="txt_percentualSupressao_02"]').prop('readonly',true).parent().find('label').removeClass('required')
            $('[name="txt_valorSupressao_02"]').prop('readonly',true).parent().find('label').removeClass('required')
        }
    });
    $('[name="rd_reajuste_02"]').on('change', function () {
        if ($(this).val() == 'Sim') {
            $('[name="txt_percentualReajuste_02"]').prop('readonly',false).parent().find('label').addClass('required')
            $('[name="txt_valorReajuste_02"]').prop('readonly',false).parent().find('label').addClass('required')
        } else {
            $('[name="txt_percentualReajuste_02"]').prop('readonly',true).parent().find('label').removeClass('required')
            $('[name="txt_valorReajuste_02"]').prop('readonly',true).parent().find('label').removeClass('required')
        }
    });
    $('[name="rd_repactuacao_02"]').on('change', function () {
        if ($(this).val() == 'Sim') {
            $('[name="txt_valorRepactuacao_02"]').prop('readonly',false).parent().find('label').addClass('required')
            $('[name="txt_percentualRepactuacao_02"]').prop('readonly',false).parent().find('label').addClass('required')
        } else {
            $('[name="txt_valorRepactuacao_02"]').prop('readonly',true).parent().find('label').removeClass('required')
            $('[name="txt_percentualRepactuacao_02"]').prop('readonly',true).parent().find('label').removeClass('required')
        }
    });
    $('[name="rd_revisao_02"]').on('change', function () {
        if ($(this).val() == 'Sim') {
            $('[name="txt_percentualRevisao_02"]').prop('readonly',false).parent().find('label').addClass('required')
            $('[name="txt_valorRevisao_02"]').prop('readonly',false).parent().find('label').addClass('required')
        } else {
            $('[name="txt_percentualRevisao_02"]').prop('readonly',true).parent().find('label').removeClass('required')
            $('[name="txt_valorRevisao_02"]').prop('readonly',true).parent().find('label').removeClass('required')
        }
    });

    $('[name="rd_outros_02"]').on('change', function () {
        if ($(this).val() == 'Sim') {
            $('[name="atxt_outrosJustificativa_02"]').prop('readonly',false).parent().find('label').addClass('required')
        } else {
            $('[name="atxt_outrosJustificativa_02"]').prop('readonly',true).parent().find('label').removeClass('required')
        }
    });

    $('[name="rd_apAnalise_09"]').on('change', function () {
        if ($(this).val() == 'Nao') {
            // $('#select_field_id option:not(:selected)').attr('disabled', true);
            $('[name="cb_responsaval_09"] :not(:selected)').attr('disabled', false).parent().parent().find('label').addClass('required')
            $('[name="atxt_justificativa_09"]').prop('readonly',false).parent().find('label').addClass('required')
        } else {
            $('[name="cb_responsaval_09"] :not(:selected)').attr('disabled', true).parent().find('label').removeClass('required')
            $('[name="atxt_justificativa_09"]').prop('readonly',true).parent().parent().find('label').removeClass('required')
        }
    });

    $('[name="slc_fornecedor_associar"]').on('change', function () {
        var conteudo = $(this).val()
        $('[name="txt_fornecedor_associar_00"]').val(conteudo)
    });

    // $('[name="cb_indice_21"]').on('change', function () {
    //     $('[name="_txt_descIndice_21"').val(indices[$(this).val()])
    // });

    // $('[name="cb_indice_21"]').on('change', function () {
    //     $('[name="_txt_descIndice_21"').val(indices[$(this).val()])
    // });

    $('[name="rd_incluirAditivo_30"]').on('change', function () {
        if ($(this).val() == 'Sim') {
            $('[name="rd_tipoAditivo_30"]').parent().show()
        } else {
            $('[name="rd_tipoAditivo_30"]').parent().hide()
        }
    });
    
    $('[name="rd_tipoAditivo_30"]').on('change', function () {
        var conteudo = $(this).val()
        hideTiposAditivo()
        $('#'+conteudo+' .panel-collapse.collapse').addClass('in')
        $('#'+conteudo+' .collapse-icon').addClass('down')
        $('#'+conteudo).show()
        // $('[name="rd_tipoAditivo_30"]').val(conteudo)
    });
}

function loadDatasets(c_filial, sc) {
    let c_chave = $('[name="txt_nContratoAnterior"]').val()
    if (c_filial == null || c_chave == null) {
        msgsToast("Valores errados!")
    }
    constraints = [
        DatasetFactory.createConstraint('C_FILIAL', c_filial, '', ConstraintType.MUST),
        DatasetFactory.createConstraint('C_CHAVE', c_chave, '', ConstraintType.MUST),
        DatasetFactory.createConstraint('expandir_fornecedores', 'true', '', ConstraintType.MUST),
        DatasetFactory.createConstraint('expandir_produtos', 'true', '', ConstraintType.MUST)
    ];

    let datasetContrato = (DatasetFactory.getDataset("ds_consulta_contrato", null, constraints, null)).values
    contrato = datasetContrato[datasetContrato.length - 1]
    console.log('datasetContrato')
    console.log(datasetContrato)
    console.log(contrato)

    constraints = [
        DatasetFactory.createConstraint('C1_FILIAL', c_filial, c_filial, ConstraintType.MUST),
        DatasetFactory.createConstraint('C1_NUM', sc, sc, ConstraintType.MUST),
    ];

    let datasetSC = (DatasetFactory.getDataset("ds_busca_solicitacao_compras", null, constraints, null)).values
    console.log('datasetSC')
    console.log(datasetSC)

    let datasetListaFornecedores = (DatasetFactory.getDataset("ds_consulta_fornecedor", null, null, null)).values
    console.log('datasetListaFornecedores')
    console.log(datasetListaFornecedores)
    // let datasetIndice = (DatasetFactory.getDataset("ds_consulta_indice", null, null, null)).values
    // console.log('datasetIndice')
    // console.log(datasetIndice)
    // listaDeIndices={}
    // for (i=0;i<datasetIndice.length;i++){
    //     listaDeIndices[datasetIndice[i].CN6_CODIGO]=datasetIndice[i].CN6_DESCRI
    // }

    let gpAprovacao = (DatasetFactory.getDataset("ds_consulta_grupo_aprovacao", null, null, null)).values
    console.log('gpAprovacao')
    console.log(gpAprovacao)
    var listaDeGpAprovacao = {}
    for (i = 0; i < gpAprovacao.length; i++) {
        listaDeGpAprovacao[gpAprovacao[i].AL_COD] = gpAprovacao[i].AL_DESC
    }

    var numeroContrato = contrato.CN9_NUMERO
    constraints = [
        DatasetFactory.createConstraint('numeroContrato', numeroContrato, '', ConstraintType.MUST),
    ]
    let datasetRevisao = (DatasetFactory.getDataset("ds_field_revisao", null, constraints, null)).values
    console.log('datasetRevisao')
    console.log(datasetRevisao)

    let datasetAdicionais = (DatasetFactory.getDataset("ds_campos_contrato_protheus", null, constraints, null)).values
    console.log('datasetAdicionais')
    console.log(datasetAdicionais)

    constraints = [
        DatasetFactory.createConstraint('C_CHAVE', c_chave, '', ConstraintType.MUST),
        DatasetFactory.createConstraint('REVISAO', datasetRevisao, '', ConstraintType.MUST)
    ]
    let datasetItensContrato = (DatasetFactory.getDataset("ds_itens_contrato_protheus", null, constraints, null)).values
    console.log('datasetItensContrato')
    console.log(datasetItensContrato)

    fornecedores = JSON.parse(contrato.fornecedores);
    $('[name="txt_dtInicio_17"]').val(formataDataBr(contrato.CN9_DTINIC))
    $('[name="txt_final_17"]').val(formataDataBr(contrato.CN9_DTFIM))
    $('[name="txt_reajuste_17"]').val(contrato.CN9_FLGREJ)
    $('[name="txt_ipca_17"]').val(contrato.CN6_DESCRI)
    $('[name="atxt_obj_17"]').val()
    $('[name="txt_gpAprovacao_17"]').val(contrato.CN9_APROV)
    $('[name="txt_fornecedor_17"]').val(fornecedores[0].A2_NOME)
    $('[name="txt_nProcesso_17"]').val(numeroContrato)
    $('[name="txt_entidade_17"]').val()

    $('[name="txt_vigencia_inicio"]').val(formataDataBr(contrato.CN9_DTINIC))
    $('[name="txt_vigencia_fim"]').val(formataDataBr(contrato.CN9_DTFIM))
    $('[name="txt_CN9_VIGE"]').val(contrato.CN9_VIGE)
    $('[name="txt_CN9_UNVIGE"]').val(contrato.CN9_UNVIGE)
    $('[name="txt_valor_inicial"]').val(datasetAdicionais[0].CN9_VLINI)
    $('[name="txt_valor_atual"]').val(datasetAdicionais[0].CN9_VLATU)

    // 001
    $('[name="_txt_vigencia_19"]').val(contrato.CN9_UNVIGE)
    $('[name="_txt_novaVigencia_19"]').val(contrato.CN9_UNVIGE) // VERIFICAR NOVO VALOR
    if (datasetRevisao.length > 0) {
        $('[name="txt_revisao_19"]').val(datasetRevisao[0].CN9_REVISA)
    } else {
        $('[name="txt_revisao_19"]').val('000')
    }

    // 007
    if (datasetAdicionais[0].CN9_FLGREJ == '1') {
        txtReajuste = 'Sim'
    } else {
        txtReajuste = 'Não'
    }
    $('[name="txt_reajuste_21"]').val(txtReajuste)

    // 010
    $('[name="slc_gpAtual_23"]').val(listaDeGpAprovacao[contrato.CN9_APROV])

    // 012
    $('[name="txt_codAnterior_24"]').val(fornecedores[0].CNA_FORNEC)
    $('[name="txt_lojaAnterior_24"]').val(fornecedores[0].CNA_LJFORN)
    $('[name="txt_CNPJAnterior_24"]').val(fornecedores[0].A2_CGC)
    $('[name="txt_RazaoAnterior_24"]').val(fornecedores[0].A2_NOME)

    // let produtos = JSON.parse(datasetContrato[0].produtos);
    if (datasetSC.length > 0) {
        // if (datasetRevisao.length > 0) {
        for (i = 0; i < datasetSC.length; i++) {
            // for (i = 0; i < datasetRevisao.length; i++) {
            var idProduto = wdkAddChild("tbl_dadosContrato_17");
            wdkAddChild("tbl_008_22");
            wdkAddChild("tbl_003_20");
            wdkAddChild("tbl_001_19");

            // let produto = produtos[i];
            let produto1 = datasetSC[i];
            let produto2 = datasetItensContrato[i]

            // if (datasetRevisao.length > 0) {
            //     console.log("entrou")
            //     produto2 = datasetItensContrato[i + datasetSC.length]
            // }


            console.log(produto1)
            console.log(produto2)

            $('#column1_3___' + idProduto).val(produto2.CNB_ITEM).prop('readonly', true);
            $('#column2_3___' + idProduto).val(produto2.CNB_PRODUT).prop('readonly', true);
            $('#column3_3___' + idProduto).val(produto2.CNB_DESCRI).prop('readonly', true);
            $('#column4_3___' + idProduto).val(produto2.CNB_UM).prop('readonly', true);
            $('#column5_3___' + idProduto).val(produto2.CNB_QUANT).prop('readonly', true);
            $('#column6_3___' + idProduto).val(produto2.CNB_VLUNIT).prop('readonly', true);
            $('#column7_3___' + idProduto).val(produto2.CNB_VLTOT).prop('readonly', true);
            $('#column8_3___' + idProduto).val(produto1.C1_CLVL).prop('readonly', true);
            $('#column9_3___' + idProduto).val(produto1.C1_CC).prop('readonly', true);
            $('#column10_3___' + idProduto).val(produto1.C1_EC06DB).prop('readonly', true);
            $('#column11_3___' + idProduto).val(produto1.C1_EC07DB).prop('readonly', true);
            $('#column12_3___' + idProduto).val(produto1.C1_CONTA).prop('readonly', true);
            $('#column13_3___' + idProduto).val(produto1.C1_EC08DB).prop('readonly', true);
            $('#column14_3___' + idProduto).val(produto2.CNB_QTDMED).prop('readonly', true);
            $('#column15_3___' + idProduto).val(produto2.CNB_SLDMED).prop('readonly', true);

            $('#column1_5___' + idProduto).val(produto2.CNB_ITEM).prop('readonly', true);
            $('#column2_5___' + idProduto).val(produto2.CNB_PRODUT).prop('readonly', true);
            $('#column3_5___' + idProduto).val(produto2.CNB_DESCRI).prop('readonly', true);
            $('#column4_5___' + idProduto).val(produto2.CNB_QUANT).prop('readonly', true);
            $('#column5_5___' + idProduto).val(produto2.CNB_SLDMED).prop('readonly', true);

            $('#column1_6___' + idProduto).val(produto2.CNB_ITEM).prop('readonly', true);
            $('#column2_6___' + idProduto).val(produto2.CNB_PRODUT).prop('readonly', true);
            $('#column3_6___' + idProduto).val(produto2.CNB_DESCRI).prop('readonly', true);
            $('#column4_6___' + idProduto).val(produto2.CNB_QUANT).prop('readonly', true);
            $('#column5_6___' + idProduto).val(produto2.CNB_SLDMED).prop('readonly', true);

            $('#column1_7___' + idProduto).val(produto2.CNB_ITEM).prop('readonly', true);
            $('#column2_7___' + idProduto).val(produto2.CNB_PRODUT).prop('readonly', true);
            $('#column3_7___' + idProduto).val(produto2.CNB_DESCRI).prop('readonly', true);
            $('#column4_7___' + idProduto).val(produto2.CNB_QUANT).prop('readonly', true);
            $('#column5_7___' + idProduto).val(produto2.CNB_SLDMED).prop('readonly', true);
            $('#column6_7___' + idProduto).val(produto2.CNB_VLUNIT).prop('readonly', true);
            $('#column7_7___' + idProduto).val(produto2.CNB_VLTOT).prop('readonly', true);
        }
        loading.hide()
    } else {
        loading.hide()
        msgsToast("Processo não encontrado!", 'danger')
        return
    }
}

function loadMasks() {
    $(".money").maskMoney();
    $('.date').mask('00/00/0000');
    // $('.money').mask('000.000.000.000.000,00', { reverse: true });
    $('.cpf').mask('000.000.000-00', { reverse: true });
    $('.percent').mask('##0,00%', { reverse: true });
}

function formataDataBr(data) {
    if (data == null || data == "") return "";
    return data.substr(6, 2) + '/' + data.substr(4, 2) + '/' + data.substr(0, 4);
}

function selecionarFornecedor(elemento) {
    fornecedorSelecionado = $(elemento).val()
    console.log(fornecedorSelecionado)

    radios = $("#div_24 td [type='radio']")
    for (i = 1; i < radios.length; i++) {
        if (i != fornecedorSelecionado) {
            radios[i].checked = false
        }
    }


}

function setSelectedZoomItem(selectedItem) {
    console.log(selectedItem)
    if (selectedItem.inputName == "zf_fornecedores_24") {
        $('[name="txt_codNovoFornecedor_24"]').val(selectedItem.A2_COD)
        $('[name="LojaSelecionada_24"]').val(selectedItem.A2_LOJA)
        $('[name="CNPJSelecionado_24"]').val(selectedItem.A2_CGC)
        $('[name="RazaoSelecionada_24"]').val(selectedItem.A2_NOME)
    }
    if (selectedItem.inputName == "zf_indice_21") {
        $('[name="txt_zf_indice"]').val(selectedItem.CN6_CODIGO)
    }
    if (selectedItem.inputName == "zf_gpAtual_23") {
        $('[name="txt_zf_grupoAprovador"]').val(selectedItem.AL_COD)
    }
    // constraint do ds_consulta_fornecedor: CS_CNPJ = CNPJ, C_TABELA = '999'
    // reloadZoomFilterValues('CS_CNPJ', '');
    // reloadZoomFilterValues('C_TABELA', '999');
    // var proximo_usuario = $('#hidden_lista_proximo_usuario').val()
    // var usuarios=$('#usuarios_selecionados').val()

    // if (proximo_usuario){
    //     proximo_usuario=proximo_usuario+','+selectedItem.colleagueId
    //     usuarios=usuarios+' // '+selectedItem.colleagueName
    // } else {
    //     proximo_usuario=selectedItem.colleagueId
    //     usuarios=selectedItem.colleagueName
    // }
    // $('#hidden_lista_proximo_usuario').val(proximo_usuario)
    // $('#hidden_proximo_usuario').val(proximo_usuario.split(',')[0])
    // $('#usuarios_selecionados').val(usuarios)
}

function removedZoomItem(removedItem) {
    console.log(removedItem)
    if (removedItem.inputName == "zf_fornecedores_24") {
        $('[name="txt_codNovoFornecedor_24"]').val('')
        $('[name="LojaSelecionada_24"]').val('')
        $('[name="CNPJSelecionado_24"]').val('')
        $('[name="RazaoSelecionada_24"]').val('')
    }
    if (selectedItem.inputName == "zf_indice_21") {
        $('[name="txt_zf_indice"]').val('')
    }
    if (selectedItem.inputName == "zf_gpAtual_23") {
        $('[name="txt_zf_grupoAprovador"]').val('')
    }
    // var proximo_usuario = $('#hidden_lista_proximo_usuario').val()
    // var usuarios=$('#usuarios_selecionados').val()

    // proximo_usuario=proximo_usuario.replace(removedItem.colleagueId+',', '');
    // proximo_usuario=proximo_usuario.replace(removedItem.colleagueId, '');

    // usuarios=usuarios.replace(removedItem.colleagueName+' // ', '');
    // usuarios=usuarios.replace(removedItem.colleagueName, '');

    // $('#hidden_lista_proximo_usuario').val(proximo_usuario)
    // $('#hidden_proximo_usuario').val(proximo_usuario.split(',')[0])
    // $('#usuarios_selecionados').val(usuarios)
}

// function ()

function loadCollapse() {
    // return
    // $('.collapse').collapse('show')
    // return
    if (FORM_MODE == 'VIEW') {
        $('#div_00 .collapse').collapse('show')
        return
    }

    // DIV_00
    if (ATIVIDADE == ACTIVITY.ZERO || ATIVIDADE == ACTIVITY.INICIO) {
        $('#div_00 .collapse').collapse('show')
        for (i = 1; i < DIVS.length; i++) {
            $('#' + DIVS[i]).hide()
        }
    } else {
        BTNs = BTN00
        for (i = 0; i < BTNs.length; i++) {
            $('#' + BTNs[i]).hide()
        }

        FIELDS = FIELDS00
        for (i = 0; i < FIELDS.length; i++) {
            $('[name="' + FIELDS[i] + '"]').prop('readonly', true);
        }
    }

    // DIV_01, DIV_02, DIV_27
    if (ATIVIDADE == ACTIVITY.PREPARAR_ADITIVO) {
        $('#div_01 .collapse').collapse('show')
        $('#div_02 .collapse').collapse('show')
        $('#div_27 .collapse').collapse('show')
        for (i = 4; i < DIVS.length; i++) {
            $('#' + DIVS[i]).hide()
        }
    } else {
        BTNs = BTN01
        for (i = 0; i < BTNs.length; i++) {
            $('#' + BTNs[i]).hide()
        }

        FIELDS = FIELDS01
        for (i = 0; i < FIELDS.length; i++) {
            $('[name="' + FIELDS[i] + '"]').prop('readonly', true);
        }
        $('#div_01 input:radio:not(:checked)').prop('disabled', 'disabled');
        $('#div_02 input:radio:not(:checked)').prop('disabled', 'disabled');
        $('#div_27 input:radio:not(:checked)').prop('disabled', 'disabled');
    }

    // DIV_03
    if (ATIVIDADE == ACTIVITY.APROVAR_SOLICITACAO) {
        $('#div_03 .collapse').collapse('show')
        for (i = 5; i < DIVS.length; i++) {
            $('#' + DIVS[i]).hide()
        }
    }

    // DIV_04
    if (ATIVIDADE == ACTIVITY.ANALISAR_VANTAJOSIDADE) {
        $('#div_04 .collapse').collapse('show')
        for (i = 6; i < DIVS.length; i++) {
            $('#' + DIVS[i]).hide()
        }
    }

    // DIV_05
    if (ATIVIDADE == ACTIVITY.APROVAR_VANTAJOSIDADE) {
        $('#div_05 .collapse').collapse('show')
        for (i = 7; i < DIVS.length; i++) {
            $('#' + DIVS[i]).hide()
        }
    }

    // DIV_06
    if (ATIVIDADE == ACTIVITY.FAZER_PESQUISA_PRECO) {
        $('#div_06 .collapse').collapse('show')
        for (i = 8; i < DIVS.length; i++) {
            $('#' + DIVS[i]).hide()
        }
    } else {
        BTNs = BTN06
        for (i = 0; i < BTNs.length; i++) {
            $('#' + BTNs[i]).hide()
        }
    }

    // DIV_07
    if (ATIVIDADE == ACTIVITY.FAZER_NOTA_TECNICA) {
        $('#div_07 .collapse').collapse('show')
        for (i = 9; i < DIVS.length; i++) {
            $('#' + DIVS[i]).hide()
        }
    } else {
        BTNs = BTN07
        for (i = 0; i < BTNs.length; i++) {
            $('#' + BTNs[i]).hide()
        }
    }

    // DIV_28
    if (ATIVIDADE == ACTIVITY.APROVACAO_GERENCIA) {
        $('#div_28 .collapse').collapse('show')
        for (i = 10; i < DIVS.length; i++) {
            $('#' + DIVS[i]).hide()
        }
    }

    // DIV_08
    if (ATIVIDADE == ACTIVITY.DISTRIBUIR_PROCESSO) {
        $('#div_08 .collapse').collapse('show')
        for (i = 11; i < DIVS.length; i++) {
            $('#' + DIVS[i]).hide()
        }
    }

    // DIV_09
    if (ATIVIDADE == ACTIVITY.ANALISE_PREVIA) {
        $('#div_09 .collapse').collapse('show')
        for (i = 12; i < DIVS.length; i++) {
            $('#' + DIVS[i]).hide()
        }
    }

    // DIV_10
    if (ATIVIDADE == ACTIVITY.ELABORAR_PARECER_JURIDICO) {
        $('#div_10 .collapse').collapse('show')
        for (i = 13; i < DIVS.length; i++) {
            $('#' + DIVS[i]).hide()
        }
    } else {
        BTNs = BTN10
        for (i = 0; i < BTNs.length; i++) {
            // $('#' + BTNs[i]).hide()
        }
    }

    // DIV_12
    if (ATIVIDADE == ACTIVITY.REVISAR_PARECER_JURIDICO) {
        $('#div_12 .collapse').collapse('show')
        for (i = 14; i < DIVS.length; i++) {
            $('#' + DIVS[i]).hide()
        }
    }

    // DIV_13
    if (ATIVIDADE == ACTIVITY.APROVAR_COORDENADOR) {
        $('#div_13 .collapse').collapse('show')
        for (i = 15; i < DIVS.length; i++) {
            $('#' + DIVS[i]).hide()
        }
    }

    // DIV_14
    if (ATIVIDADE == ACTIVITY.APROVAR_ASSESSOR) {
        $('#div_14 .collapse').collapse('show')
        for (i = 16; i < DIVS.length; i++) {
            $('#' + DIVS[i]).hide()
        }
    }

    // DIV_15
    if (ATIVIDADE == ACTIVITY.CADASTRAR_EMPRESA_VERTSIGN) {
        $('#div_15 .collapse').collapse('show')
        for (i = 17; i < DIVS.length; i++) {
            $('#' + DIVS[i]).hide()
        }
    } else {
        BTNs = BTN15
        for (i = 0; i < BTNs.length; i++) {
            $('#' + BTNs[i]).hide()
        }
    }

    // EM QUAL ETAPA EXIBIR DIV_17, DIV_18, DIV_19, DIV_20, DIV_21, DIV_22, DIV_23, DIV_24, DIV_25, DIV_26
    if (ATIVIDADE == ACTIVITY.CADASTRAR_NO_PROTHEUS) {
        $('#div_17 .collapse').collapse('show')
        $('#div_18 .collapse').collapse('show')
        $('#div_30 .collapse').collapse('show')
        for (i = 19; i < DIVS.length; i++) {
            $('#' + DIVS[i]).hide()
        }
    }

    if (ATIVIDADE == ACTIVITY.INCLUIR_DOCUMENTO) {
        $('#div_29 .collapse').collapse('show')
        for (i = 26; i < DIVS.length; i++) {
            $('#' + DIVS[i]).hide()
        }
    }

    if (ATIVIDADE == ACTIVITY.REVISAR_CADASTRO) {

    }

    if (ATIVIDADE == ACTIVITY.DEVOLVER_SOLICITANTE) {

    }
}

function hideTiposAditivo(){
    if ($('[name="rd_001_19"]:checked').val()=='Nao'){
        $('#div_19').hide()
    } else {
        $('#div_19').show()
    }

    if ($('[name="rd_3_20"]:checked').val()=='Nao'){
        $('#div_20').hide()
    } else {
        $('#div_20').show()
    }

    if ($('[name="rd_7_21"]:checked').val()=='Nao'){
        $('#div_21').hide()
    } else {
        $('#div_21').show()
    }

    if ($('[name="rd_8_22"]:checked').val()=='Nao'){
        $('#div_22').hide()
    } else {
        $('#div_22').show()
    }

    if ($('[name="rd_010_23"]:checked').val()=='Nao'){
        $('#div_23').hide()
    } else {
        $('#div_23').show()
    }

    if ($('[name="rd_012_24"]:checked').val()=='Nao'){
        $('#div_24').hide()
    } else {
        $('#div_24').show()
    }
}

function buscarEmailsPorId(userIds,emails){
	for(x=0;x<userIds.length;x++){
		constraints = [DatasetFactory.createConstraint("colleagueId", userIds[x], userIds[x], ConstraintType.MUST)];
	    var retornoColleague = (DatasetFactory.getDataset('colleague', ["mail"], constraints, null))['values'];
	    if (retornoColleague.length>0) {
			userMail = retornoColleague[0].mail
		} else {
			msgsToast('Assinante: '+userIds[x]+' não encontrado! Realizar o cadastro do mesmo.','danger')
		}
	    if(emails.indexOf(userMail)==-1){
	    	emails.push(userMail)
	    }
	}
	return emails
}

function buscarPorEmail(emails,assinantes,tabela){
	for (i=0;i<tabela.length;i++){
		emails.push($(tabela[i]).val())
	}
	
	for(i=0;i<emails.length;i++){
	    constraints = [DatasetFactory.createConstraint('email', emails[i], emails[i], ConstraintType.MUST)];
	    assinante = (DatasetFactory.getDataset('ds_busca_assinante', null, constraints, null))['values'];
	    if(assinante.length>0){
	    	assinantes.push({
	            nome: new String(assinante[0].nome),
	            email: new String(assinante[0].email),
	            cpf: new String(assinante[0].cpf),
	            tipo: new String(assinante[0].tipoAssinatura),
	            status: "Pendente"
	        })
	    }
    }
	return assinantes
}

function buscaIdsPorAtividade(usersIds,listaDeAtividades,solicitacao){
	var processInstanceId = DatasetFactory.createConstraint('processInstanceId', solicitacao, solicitacao, ConstraintType.MUST);
	for (var i = 0; i < listaDeAtividades.length; i++) {
		var constraints = new Array();
		var choosedSequence = DatasetFactory.createConstraint('choosedSequence', listaDeAtividades[i], listaDeAtividades[i], ConstraintType.MUST);
		
		constraints.push(processInstanceId)
        constraints.push(choosedSequence)
        constraints.push(DatasetFactory.createConstraint('processTaskPK.colleagueId', 'System:Auto', 'System:Auto', ConstraintType.MUST_NOT))
        var retornoProcessTask = (DatasetFactory.getDataset('processTask', ["colleagueId"], constraints, null)).values;
		
		if (retornoProcessTask.length>0){
            var posicao=retornoProcessTask.length-1
            usersIds.push(retornoProcessTask[posicao]['processTaskPK.colleagueId'])
			
		}
	}
	return usersIds
}

function enviaParaAssinatura(nr_pasta, dadosResponsavel, idDocumento, nm_Arquivo, numeroProcesso,data,horario) {
    var nmArquivo = {
        name: "nmArquivo",
        value: nm_Arquivo
    };
    var codArquivo = {
        name: "codArquivo",
        value: idDocumento
    };
    var vrArquivo = {
        name: "vrArquivo",
        value: '1000'
    };
    var codPasta = {
        name: "codPasta",
        value: nr_pasta
    };
    var codRemetente = {
        name: "codRemetente",
        value: dadosResponsavel.idReponsavelEnvio
    };
    var nmRemetente = {
        name: "nmRemetente",
        value: dadosResponsavel.nomeResponsavelEnvio

    };
    var formDescription = {
        name: "formDescription",
        value: nm_Arquivo
    };
    var status = {
        name: "status",
        value: "Enviando para assinatura"
    };
    var metodo = {
        name: "metodo",
        value: "create"
    };

    var dataEnvio = {
        name: "dataEnvio",
        value: data
    };
    var jsonSigners = {
        name: "jsonSigners",
        value: dadosResponsavel.assinantes
    };

    var horaEnvio = {
        name: "horaEnvio",
        value: horario
    };

    var numSolic = {
        name: "numSolic",
        value: numeroProcesso
    };

    var choosedState = {
        name: "choosedState",
        value: "45"
    };

    var constraints = [jsonSigners, nmArquivo, codArquivo, vrArquivo, codPasta, codRemetente, nmRemetente, formDescription, status, metodo, dataEnvio, horaEnvio, numSolic, choosedState];
    return constraints;
}

function rodarDataset(params,solicitacao) {
    constraints = []
    params.forEach(function (param) {
        constraints.push(DatasetFactory.createConstraint(param.name, param.value, param.value, ConstraintType.MUST));
    });

    if (constraints.length > 0) {
        var dsAux = (DatasetFactory.getDataset("ds_auxiliar_vertsign", null, constraints, null)).values;
        console.log(dsAux)
        if(dsAux == null || dsAux.length == 0){
    		throw "Falha de comunicação com a VertSign. "
    		+ "O TOTVS Fluig não conseguir realizar a comunicação, tente novamente mais tarde";
    	}
        if (dsAux.rowsCount > 0) {
            if (dsAux.getValue(0, "Result") === "OK") {
            	console.log('ok')
            }
        }
    }
    setTimeout(function(){ enviarArquivo(solicitacao) }, 1000);
}

function enviarArquivo(solicitacao) {
    try{
        DatasetFactory.getDataset("ds_upload_vertsign", null, null, null);
        var c1 = DatasetFactory.createConstraint('numSolic', solicitacao, solicitacao, ConstraintType.MUST);
		var form_aux = (DatasetFactory.getDataset('ds_form_aux_vertsign', null, [c1], null)).values;
        if (form_aux.length > 0) {
        	var posicao = form_aux.length-1
            var c2 = DatasetFactory.createConstraint('codArquivo', form_aux[posicao].codArquivo, form_aux[posicao].codArquivo, ConstraintType.MUST);
			var ds_upload = DatasetFactory.getDataset("ds_upload_vertsign_manual", null, [c2], null);   
        }
    } catch (e){
        throw ("Erro ao enviar documento para integração: " + (e));
    }
    setTimeout(function(){ verificaStatus(solicitacao) }, 1000);
}

function verificaStatus(solicitacao){
	var c1 = DatasetFactory.createConstraint('numSolic', solicitacao, solicitacao, ConstraintType.MUST);
	form_aux = (DatasetFactory.getDataset('ds_form_aux_vertsign', null, [c1], null)).values;
	if (form_aux.length > 0) {
		var posicao = form_aux.length-1
		console.log(">>> Status do Documento: " + form_aux[posicao].statusAssinatura);
        msgsToast("Documento Enviado para assinatura","Success")
		
		if (form_aux[posicao].statusAssinatura == "Enviando para assinatura"){
			throw "Houve erros durante o envio do documento, verifique novamente.";
		}
	}
}

function msgsToast(msg, tipo) {
    FLUIGC.toast({
        title: 'Atenção: ',
        message: msg,
        type: tipo
    });
    if (tipo=='danger'){
        throw "Erro! "+msg
    }
}

function validaArquivos(elemento){
    if ($(elemento).val() == '' || $(elemento).val() == null) {
        ExibirMensagem.msg($(elemento).attr("name") + ' obrigatório!');
    }
}

function validaCampos(elementoDiv) {
    var divSelecionada = $('#' + elementoDiv + ' label.required').next()
    for (i = 0; i < divSelecionada.length; i++) {
        elemento = divSelecionada[i]
        if ($(elemento).attr('class') == 'radio-options') {
            if ($(elemento).find('input:checked').val() == undefined) {
                ExibirMensagem.msg($(elemento).find('input').attr("name") + ' obrigatório!'); break;
            }
        } else {
            if ($(elemento).val() == '' || $(elemento).val() == null) {
                ExibirMensagem.msg($(elemento).attr("name") + ' obrigatório!'); break;
            }
        }
    }
}

var beforeSendValidate = function (numState, nextState) {

    if (numState == ACTIVITY.INICIO || numState == ACTIVITY.ZERO) {
        validaCampos('div_00')

    } else if (numState == ACTIVITY.PREPARAR_ADITIVO) {
        if ($("input[name^='column1_1___']").length<1){
            ExibirMensagem.msg("Necessário incluir ao menos um registro de alteração!")
        }
        validaCampos('div_01')
        validaCampos('div_02')
        validaCampos('div_27')
        validaArquivos('#txt_nomeArquivo_27')
    } else if (numState == ACTIVITY.FAZER_PESQUISA_PRECO){
        validaCampos('div_06')
        if ($("input[name^='column1_2___']").length<1){
            ExibirMensagem.msg("Necessário incluir ao menos uma pesquisa!")
        }
    } else if (numState == ACTIVITY.FAZER_NOTA_TECNICA){
        validaCampos('div_07')
        validaArquivos('#txt_nomeArquivo_07')
    } else if (numState == ACTIVITY.ANALISE_PREVIA){
        validaCampos('div_09')
    } else if (numState == ACTIVITY.ELABORAR_PARECER_JURIDICO){
        validaCampos('div_10')
        validaArquivos("#txt_nomeArquivoParecer_10")
        validaArquivos("#txt_nomeArquivoMinuta_10")
    } else if (numState == ACTIVITY.REVISAR_PARECER_JURIDICO){
        validaCampos('div_12')
    } else if (numState == ACTIVITY.APROVAR_COORDENADOR){
        validaCampos('div_13')
    } else if (numState == ACTIVITY.APROVAR_ASSESSOR){
        validaCampos('div_14')
    }
}

class ExibirMensagem {
    static msg(mensagem) {
        throw "<div class='alert alert-warning' role='alert'>" +
        "<strong>Atenção:</strong> " + mensagem +
        "</div><i class='fluigicon fluigicon-tag icon-sm'></i> <font style='font-weight: bold'>Dúvidas?</font> Entre em contato com o departamento de TI.";
    }
}