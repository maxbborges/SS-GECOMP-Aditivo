let loading = FLUIGC.loading(window);
$(document).ready(function () {
    // setTimeout(() => {
    //     // dados=$('.title-form-application').nextAll('[type="hidden"]')
    //     dados = $("input[type='hidden']")
    //     for (i = 0; i < dados.length; i++) {
    //         dados[i].type = 'text'

    //     }
    // }, 500);
    loadHideShow();
    loadClicks();
    loadChange();
    loadMasks();
    loadZooms();
    setTimeout(() => {
        loadCollapse()
    }, 300);

    $('.labelHidden').hide()




    exibirDivsHidden()
});

function loadHideShow() {
    //    window.parent.$('#div-btn-attachment').hide()

    if (($('[tablename="tbl_notaTecnica_02"] tbody').children()).length < 2) {
        $('[tablename="tbl_notaTecnica_02"]').hide()
    }

    if (($('[tablename="tbl_pesquisa_06"] tbody').children()).length < 2) {
        $('[tablename="tbl_pesquisa_06"]').hide()
    }

    if (ATIVIDADE == ACTIVITY.INICIO || ATIVIDADE == ACTIVITY.ZERO) {
        $('[name="slc_fornecedor_associar"]').parent().hide()
        $('[name="txt_fornecedor_associar_00"]').hide()
    } else {
        $('[name="rd_tipoContratacao_02"]').prop('readonly', true);
    }

    if (ATIVIDADE == ACTIVITY.PREPARAR_ADITIVO) {
        $('[name="txt_nProc"]').val(nProcesso)
        // $('[name="rd_entidade_02"]:not(:checked)').prop('disabled', 'true');
    } else {
        if (FORM_MODE == 'MOD') {
            $('[tablename="tbl_notaTecnica_02"] tbody td:first-child').hide()
            $('[tablename="tbl_notaTecnica_02"] thead th:first-child').hide()
        }
    }

    if (ATIVIDADE == ACTIVITY.FAZER_PESQUISA_PRECO) { }
    else {
        if (FORM_MODE == 'MOD') {
            $('[tablename="tbl_pesquisa_06"] tbody td:first-child').hide()
            $('[tablename="tbl_pesquisa_06"] thead th:first-child').hide()
        }
    }

    if (ATIVIDADE != ACTIVITY.CADASTRAR_EMPRESA_VERTSIGN) {
        if (FORM_MODE == 'MOD') {
            $('[tablename="tbl_assinantes_15"] tbody td:first-child').hide()
            $('[tablename="tbl_assinantes_15"] thead th:first-child').hide()
        }
    }

    if (ATIVIDADE == ACTIVITY.CADASTRAR_NO_PROTHEUS) {
        $("[name='rd_incluirAditivo_30']").prop('checked', false);
        $("[name='rd_30_continuar']").prop('checked', false);
        $("[name='rd_haveraRevisao_30']").prop('checked', false);
        $("[name='rd_tipoAditivo_30']").val('')

        $('#div_tipoAditivo_30').hide()
        $('#div_30_terminarAditivo').hide()
        hideTiposAditivo()
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

        // REMOVER AS OPTIONS ANTERIORES
        for (i = 1; i < options.length; i++) { options[i].remove() }

        // REMOVER AS LINHAS DA TABELAS TABELAS DIV17,
        for (i = 2; i < tbl_dadosContrato_17.length; i++) { tbl_dadosContrato_17[i].remove() }

        // REMOVER AS LINHAS DA TABELAS TABELAS DIV17,
        for (i = 2; i < tbl_008_22.length; i++) { tbl_008_22[i].remove() }

        // REMOVER AS LINHAS DA TABELAS TABELAS DIV17,
        for (i = 2; i < tbl_003_20.length; i++) { tbl_003_20[i].remove() }

        // REMOVER AS LINHAS DA TABELAS TABELAS DIV17,
        for (i = 2; i < tbl_001_19.length; i++) { tbl_001_19[i].remove() }

        if (nprocessoAnterior == null || nprocessoAnterior == '') { loading.hide(); msgsToast("Necessário digitar algum processo para buscar!", 'warning'); return }
        else {
            var params = [{ name: "txt_numProtocolo", value: nprocessoAnterior }, { name: "metadata#active", value: true }]
            // datasetSolicitacoes = customDataset("ds_solicitacaoDeCompras", params, [], [], null)
            var datasetSolicitacoes = customDataset("solicitacao_compras_inex_vanat", params, [], [], null)

            for (var i = 0; i < datasetSolicitacoes.length; i++) {
                console.log(datasetSolicitacoes[i])
                var documentId = datasetSolicitacoes[i]["metadata#id"];
                var documentVersion = datasetSolicitacoes[i]["metadata#version"];
                var descricaoDocContrato = datasetSolicitacoes[i]['descricaoDocContrato']
            }

            var params = [{ name: "tablename", value: 'tableContrato' }, { name: "metadata#id", value: documentId }, { name: "metadata#version", value: documentVersion }]
            var datasetFilhos = customDataset("solicitacao_compras_inex_vanat", params, [], [], null)
            // console.log(datasetFilhos)
            // return

            var listaNContratos = []
            var listaScs = []
            var listaFiliais = []
            for (var i = 0; i < datasetFilhos.length; i++) {
                listaFiliais.push(datasetFilhos[i]['txt_FilialDoContratoRetorno']);
                listaNContratos.push(datasetFilhos[i]['txt_numeroDoContratoRetorno']);
                listaScs.push(datasetFilhos[i]['txt_SCDoContratoRetorno']);
            }
            $(slc_fornecedor_associar).parent().show()

            if (datasetSolicitacoes.length == 0) { loading.hide(); msgsToast("Processo não encontrado!", 'warning'); return }
            for (i = 0; i < datasetSolicitacoes.length; i++) {

                // if (datasetFilhos[i]['descricaoFornecRet'] == '' || datasetFilhos[i]['descricaoFornecRet'] == null) {
                //     msgsToast('Erro ao buscar fornecedores: ds_solicitacaoDeCompras', 'warning');
                //     loading.hide()
                //     // return;
                // }

                // if (tempFornec.indexOf(datasetFilhos[i]['descricaoFornecRet']) == -1) {
                //     tempFornec.push(datasetFilhos[i]['descricaoFornecRet']);

                //     $(slc_fornecedor_associar).append(
                //         $('<option>', {
                //             value: datasetFilhos[i]['descricaoFornecRet'],
                //             text: datasetFilhos[i]['descricaoFornecRet']
                //         })
                //     );
                // }

                // $('[name="txt_codFilialAnterior"]').val(datasetSolicitacoes[i].cdFilial)
                // $('[name="txt_nContratoAnterior"]').val(datasetSolicitacoes[i].txt_numeroDoContratoRetorno)
                // $('[name="atxt_obj_17"]').val(datasetSolicitacoes[i].descricaoDocContrato)
                // $('[name="txt_entidade_17"]').val(datasetSolicitacoes[i].cdFilial)
            }
            // loadDatasets(datasetSolicitacoes[0].cdFilial, datasetSolicitacoes[0].txt_numSc);
            loadDatasets(listaFiliais, listaScs, listaNContratos, descricaoDocContrato);
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
        
        var modificacao = ''

        if (entidade==undefined){msgsToast("Selecione a Entidade", 'warning');loading.hide();return;}
        if (itemContrato==undefined){msgsToast("Selecione os itens do contrato", 'warning');loading.hide();return;}
        if (tipoContratacao==undefined){msgsToast("Selecione o tipo de contratação", 'warning');loading.hide();return;}
        if (pesquisaDePreco==undefined){msgsToast("Selecione a pesquisa de preço", 'warning');loading.hide();return;}
        if (projeto==''){msgsToast("Preencha todos os campos obrigatórios", 'warning');loading.hide();return;}
        if (programa==''){msgsToast("Preencha todos os campos obrigatórios", 'warning');loading.hide();return;}
        if (subprograma==''){msgsToast("Preencha todos os campos obrigatórios", 'warning');loading.hide();return;}
        if (centroDeCusto==''){msgsToast("Preencha todos os campos obrigatórios", 'warning');loading.hide();return;}
        if (grupoOrcamentario==''){msgsToast("Preencha todos os campos obrigatórios", 'warning');loading.hide();return;}

        if (acrescimo == 'Sim') {
            var percentual =  $('[name="txt_percentualAcrescimo_02"]').val()
            var valor = $('[name="txt_ValorAcrescimo_02"]').val()
            if (percentual==''||valor==''){msgsToast("Preencha todos os campos obrigatórios", 'warning');loading.hide();return;}
            if (modificacao != '') { modificacao = modificacao + '\n' }
            modificacao = modificacao + 'Acrescimo: ' + percentual + ' - ' + valor
        }
        if (supressao == 'Sim') {
            var percentual =   $('[name="txt_percentualSupressao_02"]').val()
            var valor = $('[name="txt_valorSupressao_02"]').val()
            if (percentual==''||valor==''){msgsToast("Preencha todos os campos obrigatórios", 'warning');loading.hide();return;}
            if (modificacao != '') { modificacao = modificacao + '\n' }
            modificacao = modificacao + 'Supressao: ' + percentual + ' - ' + valor
        }
        if (reajuste == 'Sim') {
            var percentual =  $('[name="txt_percentualReajuste_02"]').val()
            var valor = $('[name="txt_valorReajuste_02"]').val()
            if (percentual==''||valor==''){msgsToast("Preencha todos os campos obrigatórios", 'warning');loading.hide();return;}
            if (modificacao != '') { modificacao = modificacao + '\n' }
            modificacao = modificacao + 'Reajuste: ' + percentual + ' - ' + valor
        }
        if (repactuacao == 'Sim') {
            var percentual =  $('[name="txt_percentualRepactuacao_02"]').val()
            var valor = $('[name="txt_valorRepactuacao_02"]').val()
            if (percentual==''||valor==''){msgsToast("Preencha todos os campos obrigatórios", 'warning');loading.hide();return;}
            if (modificacao != '') { modificacao = modificacao + '\n' }
            modificacao = modificacao + 'Repactuacao: ' + percentual + ' - ' + valor
        }
        if (revisao == 'Sim') {
            var percentual =   $('[name="txt_percentualRevisao_02"]').val()
            var valor = $('[name="txt_valorRevisao_02"]').val()
            if (percentual==''||valor==''){msgsToast("Preencha todos os campos obrigatórios", 'warning');loading.hide();return;}
            if (modificacao != '') { modificacao = modificacao + '\n' }
            modificacao = modificacao + 'Revisao: ' + percentual + ' - ' + valor
        }
        if (outros == 'Sim') {
            var percentual =  $('[name="atxt_outrosJustificativa_02"]').val()
            if (percentual==''){msgsToast("Preencha todos os campos obrigatórios", 'warning');loading.hide();return;}
            if (modificacao != '') { modificacao = modificacao + '\n' }
            modificacao = modificacao + 'Outros: ' + percentual
        }

        wdkAddChild('tbl_notaTecnica_02')
        $('[tablename="tbl_notaTecnica_02"]').show()

        $('#column1_1___' + newId).val(entidade)
        $('#column2_1___' + newId).val(itemContrato)
        $('#column3_1___' + newId).val(tipoContratacao)
        $('#column4_1___' + newId).val(pesquisaDePreco)

        $('#column5_1___' + newId).val(modificacao)
        $('#column6_1___' + newId).val(projeto)
        $('#column7_1___' + newId).val(programa)
        $('#column8_1___' + newId).val(subprograma)
        $('#column9_1___' + newId).val(centroDeCusto)
        $('#column10_1___' + newId).val(grupoOrcamentario)

        $('[name="txt_percentualAcrescimo_02"]').val('')
        $('[name="txt_percentualSupressao_02"]').val('')
        $('[name="txt_percentualReajuste_02"]').val('')
        $('[name="txt_percentualRepactuacao_02"]').val('')
        $('[name="txt_percentualRevisao_02"]').val('')
        $('[name="atxt_outrosJustificativa_02"]').val('')
        $('[name="txt_ValorAcrescimo_02"]').val('')
        $('[name="txt_valorSupressao_02"]').val('')
        $('[name="txt_valorReajuste_02"]').val('')
        $('[name="txt_valorRepactuacao_02"]').val('')
        $('[name="txt_valorRevisao_02"]').val('')
        $('[name="txt_projeto_02"]').val('')
        $('[name="txt_programa_02"]').val('')
        $('[name="txt_subprograma_02"]').val('')
        $('[name="txt_centroCusto_02"]').val('')
        $('[name="txt_gpOrcamento_02"]').val('')
        $('[name="rd_entidade_02"]').prop('checked',false)
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
            $('#column1_2___' + newId).val(cnpj)
            $('#column2_2___' + newId).val(razaoSocial)
            $('#column3_2___' + newId).val(valorUnitario)
            $('#column4_2___' + newId).val(valorTotal)
            $('#column5_2___' + newId).val(descricao)
        }
    });

    // ANEXAR
    $('#btn_anexar_01').on("click", function () { anexarArquivo('Manifestação-fornecedor', nProcesso, "#txt_nomeArquivo_01") });
    $('#btn_anexar_27').on("click", function () { anexarArquivo('Nota-Tecnica-Solicitante', nProcesso, "#txt_nomeArquivo_27") });
    $('#btn_anexar_07').on("click", function () { anexarArquivo('Nota-Tecnica-Compras', nProcesso, "#txt_nomeArquivo_07") });
    $('#btn_anexarParecer_10').on("click", function () { anexarArquivo('ParecerJuridico', nProcesso, "#txt_nomeArquivoParecer_10") });
    $('#btn_anexarMinuta_10').on("click", function () { anexarArquivo('MinutaTécnica', nProcesso, "#txt_nomeArquivoMinuta_10") });

    // BAIXAR
    $('#btn_download_01').on("click", function () { baixarArquivo($('#txt_nomeArquivo_01').val()) });
    $('#btn_download_27').on("click", function () { baixarArquivo($('#txt_nomeArquivo_27').val()) });
    $('#btn_download_07').on("click", function () { baixarArquivo($('#txt_nomeArquivo_07').val()) });
    $('#btn_downloadParecer_10').on("click", function () { baixarArquivo($('#txt_nomeArquivoParecer_10').val()) });
    $('#btn_downloadMinuta_10').on("click", function () { baixarArquivo($('#txt_nomeArquivoMinuta_10').val()) });

    // VISUALIZAR
    $('#btn_visualizar_01').on("click", function () { visualizarArquivo($('#txt_nomeArquivo_01').val()); });
    $('#btn_visualizar_27').on("click", function () { visualizarArquivo($('#txt_nomeArquivo_27').val()); });
    $('#btn_visualizar_07').on("click", function () { visualizarArquivo($('#txt_nomeArquivo_07').val()); });
    $('#btn_visualizarParecer_10').on("click", function () { visualizarArquivo($('#txt_nomeArquivoParecer_10').val()) });
    $('#btn_visualizarMinuta_10').on("click", function () { visualizarArquivo($('#txt_nomeArquivoMinuta_10').val()) });
}

function loadChange() {
    $('[name="txt_execucao_inicio"]').prop('readonly', true).parent().find('label').removeClass('required')
    $('[name="txt_execucao_fim"]').prop('readonly', true).parent().find('label').removeClass('required')
    $('[name="txt_vigencia_novo"]').prop('readonly', true).parent().find('label').removeClass('required')

    $('[name="rd_alteracaoReferente_02"]').on('change', function () {
        if ($(this).val() == 'Um ou varios') { $('[name="atxt_itensAlterados"]').prop('readonly', false).parent().find('label').addClass('required') }
        else { $('[name="atxt_itensAlterados"]').prop('readonly', true).parent().find('label').removeClass('required') }
    });

    $('[name="rd_vigencia_02"]').on('change', function () {
        if ($(this).val() == 'Sim') { $('[name="txt_vigencia_novo"]').prop('readonly', false).parent().find('label').addClass('required') }
        else { $('[name="txt_vigencia_novo"]').prop('readonly', true).parent().find('label').removeClass('required') }
    });

    $('[name="rd_execucao_02"]').on('change', function () {
        if ($(this).val() == 'Sim') {
            $('[name="txt_execucao_nova"]').prop('readonly', false).parent().find('label').addClass('required')
            $('[name="txt_execucao_inicio"]').prop('readonly', false).parent().find('label').addClass('required')
            $('[name="txt_execucao_fim"]').prop('readonly', false).parent().find('label').addClass('required')
        }
        else {
            $('[name="txt_execucao_nova"]').prop('readonly', true).parent().find('label').removeClass('required')
            $('[name="txt_execucao_inicio"]').prop('readonly', true).parent().find('label').removeClass('required')
            $('[name="txt_execucao_fim"]').prop('readonly', true).parent().find('label').removeClass('required')
        }
    });

    $('[name="rd_acrescimo_02"]').on('change', function () {
        if ($(this).val() == 'Sim') {
            $('[name="txt_percentualAcrescimo_02"]').prop('readonly', false).parent().find('label').addClass('required')
            $('[name="txt_ValorAcrescimo_02"]').prop('readonly', false).parent().find('label').addClass('required')
        } else {
            $('[name="txt_percentualAcrescimo_02"]').prop('readonly', true).parent().find('label').removeClass('required')
            $('[name="txt_ValorAcrescimo_02"]').prop('readonly', true).parent().find('label').removeClass('required')
        }
    });

    $('[name="rd_supressao_02"]').on('change', function () {
        if ($(this).val() == 'Sim') {
            $('[name="txt_percentualSupressao_02"]').prop('readonly', false).parent().find('label').addClass('required')
            $('[name="txt_valorSupressao_02"]').prop('readonly', false).parent().find('label').addClass('required')
        } else {
            $('[name="txt_percentualSupressao_02"]').prop('readonly', true).parent().find('label').removeClass('required')
            $('[name="txt_valorSupressao_02"]').prop('readonly', true).parent().find('label').removeClass('required')
        }
    });

    $('[name="rd_reajuste_02"]').on('change', function () {
        if ($(this).val() == 'Sim') {
            $('[name="txt_percentualReajuste_02"]').prop('readonly', false).parent().find('label').addClass('required')
            $('[name="txt_valorReajuste_02"]').prop('readonly', false).parent().find('label').addClass('required')
        } else {
            $('[name="txt_percentualReajuste_02"]').prop('readonly', true).parent().find('label').removeClass('required')
            $('[name="txt_valorReajuste_02"]').prop('readonly', true).parent().find('label').removeClass('required')
        }
    });

    $('[name="rd_repactuacao_02"]').on('change', function () {
        if ($(this).val() == 'Sim') {
            $('[name="txt_valorRepactuacao_02"]').prop('readonly', false).parent().find('label').addClass('required')
            $('[name="txt_percentualRepactuacao_02"]').prop('readonly', false).parent().find('label').addClass('required')
        } else {
            $('[name="txt_valorRepactuacao_02"]').prop('readonly', true).parent().find('label').removeClass('required')
            $('[name="txt_percentualRepactuacao_02"]').prop('readonly', true).parent().find('label').removeClass('required')
        }
    });

    $('[name="rd_revisao_02"]').on('change', function () {
        if ($(this).val() == 'Sim') {
            $('[name="txt_percentualRevisao_02"]').prop('readonly', false).parent().find('label').addClass('required')
            $('[name="txt_valorRevisao_02"]').prop('readonly', false).parent().find('label').addClass('required')
        } else {
            $('[name="txt_percentualRevisao_02"]').prop('readonly', true).parent().find('label').removeClass('required')
            $('[name="txt_valorRevisao_02"]').prop('readonly', true).parent().find('label').removeClass('required')
        }
    });

    $('[name="rd_outros_02"]').on('change', function () {
        if ($(this).val() == 'Sim') { $('[name="atxt_outrosJustificativa_02"]').prop('readonly', false).parent().find('label').addClass('required') }
        else { $('[name="atxt_outrosJustificativa_02"]').prop('readonly', true).parent().find('label').removeClass('required') }
    });

    $('[name="rd_apAditivo_03"]').on('change', function () {
        if ($(this).val() == 'Nao') { $('#btn_ass_notaTecnica').hide() }
        else { $('#btn_ass_notaTecnica').show() }
    });

    $('[name="rd_apAnalise_09"]').on('change', function () {
        if ($(this).val() == 'Nao') {
            $('[name="cb_responsaval_09"]').css({ 'background-color': '', 'border-color': '', 'pointer-events': '' })
            $('[name="cb_responsaval_09"] :not(:selected)').css({ 'background-color': '', 'border-color': '', 'pointer-events': '' }).attr('disabled', false).parent().parent().find('label').addClass('required')
            $('[name="atxt_justificativa_09"]').prop('readonly', false).parent().find('label').addClass('required')
        } else {
            $('[name="cb_responsaval_09"]').css({ 'background-color': '#f2f2f2', 'border-color': '#f2f2f2', 'pointer-events': 'none' })
            $('[name="cb_responsaval_09"] :not(:selected)').attr('disabled', true).parent().find('label').removeClass('required')
            $('[name="atxt_justificativa_09"]').prop('readonly', true).parent().parent().find('label').removeClass('required')
        }
    });

    $('[name="slc_fornecedor_associar"]').on('change', function () { $('[name="txt_fornecedor_associar_00"]').val($(this).val()) });

    $('[name="rd_incluirAditivo_30"]').on('change', function () {
        if ($(this).val() == 'Sim') {
            $('#div_tipoAditivo_30').show();
            $('#div_tipoAditivo_30').find('label').addClass('required')
            $('#div_30_terminarAditivo').show()
            $($('#div_30_terminarAditivo').find('label')[0]).addClass('required')
        }
        else {
            // $('#div_tipoAditivo_30').hide();$('#div_30_terminarAditivo').hide()
            $('#div_tipoAditivo_30').find('label').removeClass('required')
            $($('#div_30_terminarAditivo').find('label')[0]).removeClass('required')
        }
    });

    $('[name="rd_tipoAditivo_30"]').on('change', function () {
        var conteudo = $(this).val()
        hideTiposAditivo()
        if (conteudo == '') { return }
        $('#' + conteudo + ' .panel-collapse.collapse').addClass('in')
        $('#' + conteudo + ' .collapse-icon').addClass('down')
        $('#' + conteudo).show()
        var labels = $('#' + conteudo).find('label')
        for (var i = 0; i < labels.length; i++) {
            if ($(labels[i]).children().length == 0 && $(labels[i]).parent()[0]['nodeName'] != 'TD') {
                $(labels[i]).addClass('required')
            }
        }

        // if (conteudo == 'div_19') {

            // contrato = consultaContrato()
            // $('[name="txt_vigencia_19"]').val(contrato.CN9_VIGE) // 001
        // }
    });
}

function consultaContrato(c_chave, c_filial) {
    if (c_filial == null || c_chave == null) { msgsToast("Valores errados!", 'warning') }
    constraints = [
        DatasetFactory.createConstraint('C_FILIAL', c_filial, '', ConstraintType.MUST),
        DatasetFactory.createConstraint('C_CHAVE', c_chave, '', ConstraintType.MUST),
        DatasetFactory.createConstraint('expandir_fornecedores', 'true', '', ConstraintType.MUST),
        DatasetFactory.createConstraint('expandir_produtos', 'true', '', ConstraintType.MUST)
    ];

    let datasetContrato = (DatasetFactory.getDataset("ds_consulta_contrato", null, constraints, null)).values
    console.log(datasetContrato)
    if (datasetContrato.length == 0) { loading.hide(); msgsToast('Erro no Protheus!', 'warning'); }
    return datasetContrato[datasetContrato.length - 1]
}

// contrato = ds_consulta_contrato
// datasetListaFornecedores = ds_consulta_fornecedor
// gpAprovacao = ds_consulta_grupo_aprovacao


function loadDatasets(listaFiliais, listaSCs, nContratos, descricaoDocContrato) {
    var listaDeGpAprovacao = {}
    listaFornecedores = []

    var datasetListaFornecedores = customDataset('ds_consulta_fornecedor', [], [], []);
    console.log(datasetListaFornecedores)

    var gpAprovacao = customDataset('ds_consulta_grupo_aprovacao', [], [], []);
    for (i = 0; i < gpAprovacao.length; i++) {
        listaDeGpAprovacao[gpAprovacao[i].AL_COD] = gpAprovacao[i].AL_DESC
    }


    for (i = 0; i < listaFiliais.length; i++) {
        var num = wdkAddChild("tbl_17_geral");

        wdkAddChild("tbl_19_001");
        wdkAddChild("tbl_20_003");
        wdkAddChild("tbl_21_007");
        wdkAddChild("tbl_23_010");
        wdkAddChild("tbl_24_012");
        wdkAddChild('tableValoresContrato')


        var contrato = consultaContrato(nContratos[i], listaFiliais[i])
        var numeroContrato = contrato.CN9_NUMERO
        var filial = listaFiliais[i]

        $('[name="txt_dtInicio_17___' + num + '"]').val(formataDataBr(contrato.CN9_DTINIC))
        $('[name="txt_final_17___' + num + '"]').val(formataDataBr(contrato.CN9_DTFIM))
        $('[name="txt_reajuste_17___' + num + '"]').val(contrato.CN9_FLGREJ)
        $('[name="txt_ipca_17___' + num + '"]').val(contrato.CN6_DESCRI)
        $('[name="txt_gpAprovacao_17___' + num + '"]').val(contrato.CN9_APROV)
        $('[name="txt_nProcesso_17___' + num + '"]').val(numeroContrato)
        $('[name="txt_entidade_17___' + num + '"]').val(filial)
        $('[name="atxt_obj_17___' + num + '"]').val(descricaoDocContrato)
        $('[name="txt_vigencia_inicio"]').val(formataDataBr(contrato.CN9_DTINIC))
        $('[name="txt_vigencia_fim"]').val(formataDataBr(contrato.CN9_DTFIM))
        $('[name="txt_CN9_VIGE"]').val(contrato.CN9_VIGE)
        $('[name="txt_CN9_UNVIGE"]').val(contrato.CN9_UNVIGE)
        $('[name="txt_gpAtual_23___' + num + '"]').val(listaDeGpAprovacao[contrato.CN9_APROV]) // 010
        $('[name="txt_02_contrato___' + num + '"]').val(numeroContrato)
        $('[name="txt_02_filial___' + num + '"]').val(filial)
        $('[name="txt_19_contrato___' + num + '"]').val(numeroContrato)
        $('[name="txt_19_filial___' + num + '"]').val(filial)
        $('[name="txt_vigencia_19___' + num + '"]').val(contrato.CN9_VIGE)
        $('[name="txt_21_contrato___' + num + '"]').val(numeroContrato)
        $('[name="txt_21_filial___' + num + '"]').val(filial)
        $('[name="txt_20_contrato___' + num + '"]').val(numeroContrato)
        $('[name="txt_20_filial___' + num + '"]').val(filial)
        $('[name="txt_23_contrato___' + num + '"]').val(numeroContrato)
        $('[name="txt_23_filial___' + num + '"]').val(filial)
        $('[name="txt_24_contrato___' + num + '"]').val(numeroContrato)
        $('[name="txt_24_filial___' + num + '"]').val(filial)
        // $('[name="txt_19_vigencia2"]').val(contrato.CN9_VIGE)

        fornecedores = JSON.parse(contrato.fornecedores);
        for (var x = 0; x < fornecedores.length; x++) {
            var nomeFornec = fornecedores[x].A2_NOME
            $('[name="txt_fornecedor_17___' + num + '"]').val(nomeFornec)

            if (listaFornecedores.indexOf(nomeFornec) == -1) {
                listaFornecedores.push(nomeFornec)
                $('#slc_fornecedor_associar').append(
                    $('<option>', {
                        value: nomeFornec,
                        text: nomeFornec
                    })
                );
            }

            $('[name="txt_codAnterior_24___' + num + '"]').val(fornecedores[x].CNA_FORNEC) // 012
            $('[name="txt_lojaAnterior_24___' + num + '"]').val(fornecedores[x].CNA_LJFORN) // 012
            $('[name="txt_CNPJAnterior_24___' + num + '"]').val(fornecedores[x].A2_CGC) // 012
            $('[name="txt_RazaoAnterior_24___' + num + '"]').val(fornecedores[x].A2_NOME) // 012

        }

        var constraints = [{ name: "C1_FILIAL", value: filial }, { name: "C1_NUM", value: listaSCs[i] }]
        var datasetSC = customDataset('ds_busca_solicitacao_compras', constraints, [], []);
        console.log(datasetSC)

        var constraints = [{ name: "numeroContrato", value: numeroContrato }]
        var datasetRevisao = customDataset('ds_field_revisao', constraints, [], []);
        console.log(datasetRevisao)

        if (datasetRevisao.length > 0 && datasetRevisao[0].CN9_REVISA != '') { $('[name="txt_revisao_19___' + num + '"]').val(datasetRevisao[0].CN9_REVISA) } // 001
        else { $('[name="txt_revisao_19___' + num + '"]').val('000') }// 001

        var constraints = [{ name: "numeroContrato", value: numeroContrato }, { name: "filial", value: filial }]
        var datasetAdicionais = customDataset('ds_campos_contrato_protheus', constraints, [], []);
        console.log(datasetAdicionais)

        $('[name="txt_valor_inicial___' + num + '"]').maskMoney({ thousands: '.', decimal: ',', prefix: 'R$ ' }).maskMoney('mask', datasetAdicionais[0].CN9_VLINI)
        $('[name="txt_valor_atual___' + num + '"]').maskMoney({ thousands: '.', decimal: ',', prefix: 'R$ ' }).maskMoney('mask', datasetAdicionais[0].CN9_VLATU)
        if (datasetAdicionais[0].CN9_FLGREJ == '1') { txtReajuste = 'Sim' }
        else { txtReajuste = 'Não' } // 007
        $('[name="txt_reajuste_21___' + num + '"]').val(txtReajuste) // 007

        var constraints = [{ name: "C_CHAVE", value: numeroContrato }, { name: "REVISAO", value: datasetRevisao[0].CN9_REVISA }, { name: "C_FILIAL", value: filial }]
        var datasetItensContrato = customDataset('ds_itens_contrato_protheus', constraints, [], []);
        console.log(datasetItensContrato)

        // if (filial == '010001') { 
        //     $('[name="siglaFilial___' + num + '"]').html('SEST') 
        //     $('[name="cbox_02_entidade_sest"]').prop('checked', true);
        // }
        // else { 
        //     $('[name="siglaFilial___' + num + '"]').html('SENAT') 
        //     $('[name="cbox_02_entidade_senat"]').prop('checked', true);
        // }

        for (var x = 0; x < datasetItensContrato.length; x++) {
            var idProduto = wdkAddChild("tbl_17_itensContrato");
            wdkAddChild("tbl_008_22");
            wdkAddChild("tbl_003_20");
            wdkAddChild("tbl_001_19");

            produto = Object.assign({}, datasetSC[0], datasetItensContrato[x]);
            console.log(produto)

            $('#C1_FILIAL___' + idProduto).val(produto.C1_FILIAL)

            $('#CNB_ITEM___' + idProduto).val(produto.CNB_ITEM)
            $('#CNB_PRODUT___' + idProduto).val(produto.CNB_PRODUT).prop('readonly', true);
            $('#CNB_DESCRI___' + idProduto).val(produto.CNB_DESCRI).prop('readonly', true);
            $('#CNB_VLUNIT___' + idProduto).val(produto.CNB_VLUNIT).prop('readonly', true);
            $('#CNB_VLTOT___' + idProduto).val(produto.CNB_VLTOT).prop('readonly', true);

            $('#C1_CLVL___' + idProduto).val(produto.C1_CLVL)
            $('#C1_CC___' + idProduto).val(produto.C1_CC)
            $('#C1_EC06DB___' + idProduto).val(produto.C1_EC06DB)
            $('#C1_EC07DB___' + idProduto).val(produto.C1_EC07DB)
            $('#C1_CONTA___' + idProduto).val(produto.C1_CONTA)
            $('#C1_EC08DB___' + idProduto).val(produto.C1_EC08DB)


            $('#CNB_UM___' + idProduto).val(produto.CNB_UM).prop('readonly', true);
            $('#CNB_QUANT___' + idProduto).val(produto.CNB_QUANT).prop('readonly', true);
            $('#CNB_QTDMED___' + idProduto).val(produto.CNB_QTDMED).prop('readonly', true);
            $('#CNB_SLDMED___' + idProduto).val(produto.CNB_SLDMED).prop('readonly', true);




            
            // let tpl = Mustache.render($("#tpl_contrato_produtos").html(), produto);
            // $('#produtosContrato___' + num).append(tpl);

            $('#column1_5___' + idProduto).val(produto.CNB_ITEM).prop('readonly', true);
            $('#column2_5___' + idProduto).val(produto.CNB_PRODUT).prop('readonly', true);
            $('#column3_5___' + idProduto).val(produto.CNB_DESCRI).prop('readonly', true);
            $('#column4_5___' + idProduto).val(produto.CNB_QUANT).prop('readonly', true);
            $('#column5_5___' + idProduto).val(produto.CNB_SLDMED).prop('readonly', true);

            $('#column1_6___' + idProduto).val(produto.CNB_ITEM).prop('readonly', true);
            $('#column2_6___' + idProduto).val(produto.CNB_PRODUT).prop('readonly', true);
            $('#column3_6___' + idProduto).val(produto.CNB_DESCRI).prop('readonly', true);
            $('#column4_6___' + idProduto).val(produto.CNB_QUANT).prop('readonly', true);
            $('#column5_6___' + idProduto).val(produto.CNB_SLDMED).prop('readonly', true);

            $('#column1_7___' + idProduto).val(produto.CNB_ITEM).prop('readonly', true);
            $('#column2_7___' + idProduto).val(produto.CNB_PRODUT).prop('readonly', true);
            $('#column3_7___' + idProduto).val(produto.CNB_DESCRI).prop('readonly', true);
            $('#column4_7___' + idProduto).val(produto.CNB_QUANT).prop('readonly', true);
            $('#column5_7___' + idProduto).val(produto.CNB_SLDMED).prop('readonly', true);
            $('#column6_7___' + idProduto).val(produto.CNB_VLUNIT).prop('readonly', true);
            $('#column7_7___' + idProduto).val(produto.CNB_VLTOT).prop('readonly', true);
        }

    }

    // if (datasetSC.length > 0) {
    //     for (i = 0; i < datasetSC.length; i++) {
    //         var idProduto = wdkAddChild("tbl_dadosContrato_17");
    //         let produto1 = datasetSC[i];
    //         let produto2 = datasetItensContrato[i]

    //         wdkAddChild("tbl_008_22");
    //         wdkAddChild("tbl_003_20");
    //         wdkAddChild("tbl_001_19");

    //         $('#column1_3___' + idProduto).val(produto2.CNB_ITEM).prop('readonly', true);
    //         $('#column2_3___' + idProduto).val(produto2.CNB_PRODUT).prop('readonly', true);
    //         $('#column3_3___' + idProduto).val(produto2.CNB_DESCRI).prop('readonly', true);
    //         $('#column4_3___' + idProduto).val(produto2.CNB_UM).prop('readonly', true);
    //         $('#column5_3___' + idProduto).val(produto2.CNB_QUANT).prop('readonly', true);
    //         $('#column6_3___' + idProduto).val(produto2.CNB_VLUNIT).prop('readonly', true);
    //         $('#column7_3___' + idProduto).val(produto2.CNB_VLTOT).prop('readonly', true);
    //         $('#column8_3___' + idProduto).val(produto1.C1_CLVL).prop('readonly', true);
    //         $('#column9_3___' + idProduto).val(produto1.C1_CC).prop('readonly', true);
    //         $('#column10_3___' + idProduto).val(produto1.C1_EC06DB).prop('readonly', true);
    //         $('#column11_3___' + idProduto).val(produto1.C1_EC07DB).prop('readonly', true);
    //         $('#column12_3___' + idProduto).val(produto1.C1_CONTA).prop('readonly', true);
    //         $('#column13_3___' + idProduto).val(produto1.C1_EC08DB).prop('readonly', true);
    //         $('#column14_3___' + idProduto).val(produto2.CNB_QTDMED).prop('readonly', true);
    //         $('#column15_3___' + idProduto).val(produto2.CNB_SLDMED).prop('readonly', true);

    //         $('#column1_5___' + idProduto).val(produto2.CNB_ITEM).prop('readonly', true);
    //         $('#column2_5___' + idProduto).val(produto2.CNB_PRODUT).prop('readonly', true);
    //         $('#column3_5___' + idProduto).val(produto2.CNB_DESCRI).prop('readonly', true);
    //         $('#column4_5___' + idProduto).val(produto2.CNB_QUANT).prop('readonly', true);
    //         $('#column5_5___' + idProduto).val(produto2.CNB_SLDMED).prop('readonly', true);

    //         $('#column1_6___' + idProduto).val(produto2.CNB_ITEM).prop('readonly', true);
    //         $('#column2_6___' + idProduto).val(produto2.CNB_PRODUT).prop('readonly', true);
    //         $('#column3_6___' + idProduto).val(produto2.CNB_DESCRI).prop('readonly', true);
    //         $('#column4_6___' + idProduto).val(produto2.CNB_QUANT).prop('readonly', true);
    //         $('#column5_6___' + idProduto).val(produto2.CNB_SLDMED).prop('readonly', true);

    //         $('#column1_7___' + idProduto).val(produto2.CNB_ITEM).prop('readonly', true);
    //         $('#column2_7___' + idProduto).val(produto2.CNB_PRODUT).prop('readonly', true);
    //         $('#column3_7___' + idProduto).val(produto2.CNB_DESCRI).prop('readonly', true);
    //         $('#column4_7___' + idProduto).val(produto2.CNB_QUANT).prop('readonly', true);
    //         $('#column5_7___' + idProduto).val(produto2.CNB_SLDMED).prop('readonly', true);
    //         $('#column6_7___' + idProduto).val(produto2.CNB_VLUNIT).prop('readonly', true);
    //         $('#column7_7___' + idProduto).val(produto2.CNB_VLTOT).prop('readonly', true);
    //     }
    //     loading.hide()
    // } else {
    //     loading.hide()
    //     msgsToast("Processo não encontrado!", 'danger')
    //     return
    // }
    loading.hide()
}

function formataDataBr(data) {
    if (data == null || data == "") return "";
    return data.substr(6, 2) + '/' + data.substr(4, 2) + '/' + data.substr(0, 4);
}

// function selecionarFornecedor(elemento) {
//     fornecedorSelecionado = $(elemento).val()
//     console.log(fornecedorSelecionado)

//     radios = $("#div_24 td [type='radio']")
//     for (i = 1; i < radios.length; i++) {
//         if (i != fornecedorSelecionado) {
//             radios[i].checked = false
//         }
//     }
// }

function loadCollapse() {
    if (FORM_MODE == 'VIEW') {
        $('#div_00 .collapse').collapse('show')
    }

    if (ATIVIDADE == ACTIVITY.ZERO || ATIVIDADE == ACTIVITY.INICIO) { hideBlockDivs(['div_00']); }
    else if (ATIVIDADE == ACTIVITY.PREPARAR_ADITIVO) { hideBlockDivs(['div_01', 'div_02', 'div_27']) }// DIV_01, DIV_02, DIV_27
    else if (ATIVIDADE == ACTIVITY.APROVAR_SOLICITACAO) { hideBlockDivs(['div_03']) }// DIV_03
    else if (ATIVIDADE == ACTIVITY.ANALISAR_VANTAJOSIDADE) { hideBlockDivs(['div_04']) }// DIV_04
    else if (ATIVIDADE == ACTIVITY.APROVAR_VANTAJOSIDADE) { hideBlockDivs(['div_05']) }// DIV_05
    else if (ATIVIDADE == ACTIVITY.FAZER_PESQUISA_PRECO) { hideBlockDivs(['div_06']) }// DIV_06
    else if (ATIVIDADE == ACTIVITY.FAZER_NOTA_TECNICA) { hideBlockDivs(['div_07']) }// DIV_07
    else if (ATIVIDADE == ACTIVITY.APROVACAO_GERENCIA) { hideBlockDivs(['div_28']) }// DIV_28
    else if (ATIVIDADE == ACTIVITY.DISTRIBUIR_PROCESSO) { hideBlockDivs(['div_08']) }// DIV_08
    else if (ATIVIDADE == ACTIVITY.ANALISE_PREVIA) { hideBlockDivs(['div_09']) }// DIV_09
    else if (ATIVIDADE == ACTIVITY.ELABORAR_PARECER_JURIDICO) { hideBlockDivs(['div_10']) }// DIV_10
    else if (ATIVIDADE == ACTIVITY.REVISAR_PARECER_JURIDICO) { hideBlockDivs(['div_12']) }// DIV_12
    else if (ATIVIDADE == ACTIVITY.APROVAR_COORDENADOR) { hideBlockDivs(['div_13']) }// DIV_13
    else if (ATIVIDADE == ACTIVITY.APROVAR_ASSESSOR) { hideBlockDivs(['div_14']) }// DIV_14
    else if (ATIVIDADE == ACTIVITY.CADASTRAR_EMPRESA_VERTSIGN) { hideBlockDivs(['div_15']); }// DIV_15
    else if (ATIVIDADE == ACTIVITY.CADASTRAR_NO_PROTHEUS) {
        hideBlockDivs(['div_17', 'div_18',
            'div_30', 'div_19', 'div_20', 'div_21', 'div_22', 'div_23', 'div_24'])
    }// DIV_17, DIV_18, DIV_30
    else if (ATIVIDADE == ACTIVITY.INCLUIR_DOCUMENTO) { hideBlockDivs(['div_29']) }
    else if (ATIVIDADE == ACTIVITY.REVISAR_CADASTRO) { hideBlockDivs(['div_26']) }
    else if (ATIVIDADE == ACTIVITY.DEVOLVER_SOLICITANTE) { hideBlockDivs(['div_25']) }

    if (ATIVIDADE != ACTIVITY.INICIO && ATIVIDADE != ACTIVITY.ZERO) {
        $('[name="slc_fornecedor_associar"]').hide()
    }
}

function hideTiposAditivo() {
    var radios = ['[name="rd_001_19"]', '[name="rd_3_20"]', '[name="rd_7_21"]', '[name="rd_8_22"]', '[name="rd_010_23"]', '[name="rd_012_24"]']
    for (var i = 0; i < radios.length; i++) {
        var idDivRadio = $($(radios[i]).parents()[9]).attr('id')
        if ($(radios[i] + ':checked').val() == 'Nao') {
            $('#' + idDivRadio).hide()
            var labels = $('#' + idDivRadio).find('label')
            for (var z = 0; z < labels.length; z++) {
                if ($(labels[z]).children().length == 0) {
                    $(labels[z]).removeClass('required')
                }
            }
        } else {
            if ($('[name="rd_tipoAditivo_30"]').val() != idDivRadio) {
                $('#' + idDivRadio + ' input:radio:not(:checked)').prop('disabled', 'true');
                $('#' + idDivRadio + ' input.form-control[type="text"]').prop('readonly', 'true');
                $('#' + idDivRadio + ' select').prop("style", "pointer-events: none; background-color:#f2f2f2")
                $('#' + idDivRadio + ' textarea').prop('readonly', 'true');
            } else {
                $('#' + idDivRadio + ' input:radio:not(:checked)').prop('disabled', false);
                $('#' + idDivRadio + ' input.form-control[type="text"]').prop('readonly', false);
                $('#' + idDivRadio + ' select').prop("style", "pointer-events: ''; background-color:white")
                $('#' + idDivRadio + ' textarea').prop('readonly', false);
            }

        }
    }
}

function loadZooms() {
    header = [
        { 'title': 'cpf', 'size': 'col-xs-3' },
        { 'title': 'nome', 'size': 'col-xs-9', 'dataorder': 'nome', 'standard': true }
    ]
    var filter = createFilterZoom('ds_busca_assinante', [], [], [], 'nome', false, 'Escolha um assinante', header, ['cpf', 'nome'], '#zf_01_assinantes')

    filter.on('fluig.filter.item.added', function (data) {
        var assinante = wdkAddChild("tbl_assinantes_15");
        $("[name='column1_4___" + assinante + "']").val(data.item.cpf)
        $("[name='column2_4___" + assinante + "']").val(data.item.nome)
        $("[name='column3_4___" + assinante + "']").val(data.item.email)
        filter.removeAll()
        msgsToast('Usuário selecionado: ' + data.item.nome, 'success')
    });

    header = [
        { 'title': 'A2_LOJA', 'size': 'col-xs-3' },
        { 'title': 'A2_NOME', 'size': 'col-xs-9', 'dataorder': 'nome', 'standard': true },
        { 'title': 'A2_CGC', 'size': 'col-xs-3' },
        { 'title': 'A2_COD', 'size': 'col-xs-3' },
    ]
    var filter2 = createFilterZoom('ds_consulta_fornecedor', [], [], [], 'A2_CGC', false, 'Escolha a filial', header, ['A2_LOJA', 'A2_NOME', 'A2_CGC', 'A2_COD'], '#zf_fornecedores_24')

    filter2.on('fluig.filter.item.added', function (data) {
        $("[name='LojaSelecionada_24']").val(data.item.A2_LOJA)
        $("[name='CNPJSelecionado_24']").val(data.item.A2_CGC)
        $("[name='RazaoSelecionada_24']").val(data.item.A2_NOME)
        $("[name='txt_codNovoFornecedor_24']").val(data.item.A2_COD)
        $("[name='txt_zf_fornecedores_24']").val(data.item.A2_COD) /// VERIFICAR NECESSIDADE!

        msgsToast('Filial selecionada: ' + data.item.A2_NOME, 'success')
    });

    // header = [
    //     { 'title': 'CN6_CODIGO', 'size': 'col-xs-3' },
    //     { 'title': 'CN6_DESCRI', 'size': 'col-xs-9', 'standard': true }
    // ]
    // var filter3 = createFilterZoom('ds_consulta_indice', [], [], [], 'CN6_DESCRI', false, 'Escolha o índice', header, ['CN6_CODIGO', 'CN6_DESCRI'], '[name="zf_indice_21"]')

    // filter3.on('fluig.filter.item.added', function (data) {
    //     $("[name='txt_zf_indice']").val(data.item.CN6_CODIGO)

    //     msgsToast('Índice selecionado: ' + data.item.CN6_DESCRI, 'success')
    // });

    // header = [
    //     { 'title': 'AL_DESC', 'size': 'col-xs-3' },
    //     { 'title': 'AL_USER', 'size': 'col-xs-9', 'standard': true },
    //     { 'title': 'AL_COD', 'size': 'col-xs-9', 'visible': false }
    // ]
    // var filter4 = createFilterZoom('ds_consulta_grupo_aprovacao', [], [], [], 'AL_DESC', false, 'Escolha o grupo', header, ['AL_DESC', 'AL_USER', 'AL_COD'], '[name="zf_gpAtual_23"]')

    // filter4.on('fluig.filter.item.added', function (data) {
    //     $("[name='txt_zf_grupoAprovador']").val(data.item.AL_COD)

    //     msgsToast('Aprovador selecionado: ' + data.item.AL_DESC, 'success')
    // });
}

function selectTipoAditivo30(elemento) {
    var conteudo = $(elemento).val()
    console.log(conteudo)
    hideTiposAditivo()
    if (conteudo == '') { return }
    $('#' + conteudo + ' .panel-collapse.collapse').addClass('in')
    $('#' + conteudo + ' .collapse-icon').addClass('down')
    $('#' + conteudo).show()
    var labels = $('#' + conteudo).find('label')
    for (var i = 0; i < labels.length; i++) {
        if ($(labels[i]).children().length == 0 && $(labels[i]).parent()[0]['nodeName'] != 'TD') {
            $(labels[i]).addClass('required')
        }
    }

    // if (conteudo == 'div_19') {
    //     var contrato = consultaContrato($('[name="txt_19_contrato1"]').val(), $('[name="txt_19_filial1"]').val())
    //     var contrato2 = consultaContrato($('[name="txt_19_contrato2"]').val(), $('[name="txt_19_filial2"]').val())
    //     $('[name="txt_vigencia_19"]').val(contrato.CN9_VIGE)
    //     $('[name="txt_19_vigencia2"]').val(contrato2.CN9_VIGE)
    // }
}

var beforeSendValidate = function (numState, nextState) {
    var nrPasta = $('[name="txt_nrPasta"]').val();
    if (numState == ACTIVITY.INICIO || numState == ACTIVITY.ZERO) { validaCamposRequired('div_00'); }
    else if (numState == ACTIVITY.PREPARAR_ADITIVO) {
        validaCamposRequired('div_01'); 
        // validaCamposRequired('div_02');
        validaCamposRequired('div_27')
        if ($("input[name^='column1_1___']").length < 1) { ExibirMensagem.msg("Necessário incluir ao menos um registro de alteração!") }
    }
    else if (numState == ACTIVITY.APROVAR_SOLICITACAO) {
        validaCamposRequired('div_03');
        var nmArquivo = $('[name="txt_nomeArquivo_27"]').val();
        var idDoc = $('[name="txt_idDoc27"]').val()
        var atvCaptura = ['3', '2'];
        var atvResponsavel = '3';
        var valid = '[name="txt_03_validaVertsign"]';
        customAssinatura(nrPasta, nmArquivo, idDoc, nProcesso, atvCaptura, atvResponsavel, [], [], [], valid)
    }
    else if (numState == ACTIVITY.FAZER_PESQUISA_PRECO) {
        validaCamposRequired('div_06');
        if ($("input[name^='column1_2___']").length < 1) { ExibirMensagem.msg("Necessário incluir ao menos uma pesquisa!") }
    }
    else if (numState == ACTIVITY.FAZER_NOTA_TECNICA) { validaCamposRequired('div_07') }
    else if (numState == ACTIVITY.APROVACAO_GERENCIA) {
        validaCamposRequired('div_28');
        var nmArquivo = $('[name="txt_nomeArquivo_07"]').val()
        var idDoc = $('[name="txt_idDoc07"]').val();
        var atvCaptura = ['7', '200']
        var atvResponsavel = '200'
        var valid = '[name="txt_28_validaVertsign"]'
        customAssinatura(nrPasta, nmArquivo, idDoc, nProcesso, atvCaptura, atvResponsavel, [], [], [], valid)
    }
    else if (numState == ACTIVITY.ANALISE_PREVIA) { validaCamposRequired('div_09') }
    else if (numState == ACTIVITY.ELABORAR_PARECER_JURIDICO) { validaCamposRequired('div_10') }
    else if (numState == ACTIVITY.REVISAR_PARECER_JURIDICO) { validaCamposRequired('div_12') }
    else if (numState == ACTIVITY.APROVAR_COORDENADOR) { validaCamposRequired('div_13') }
    else if (numState == ACTIVITY.APROVAR_ASSESSOR) {
        validaCamposRequired('div_14');
        var nmArquivo = $('[name="txt_nomeArquivoParecer_10"]').val();
        var idDoc = $('[name="txt_idDoc10Parecer"]').val();
        var atvCaptura = ['172', '14', '16'];
        var atvResponsavel = '16';
        var valid = '[name="txt_14_validaVertsign"]';
        customAssinatura(nrPasta, nmArquivo, idDoc, nProcesso, atvCaptura, atvResponsavel, [], [], [], valid);
    }
    else if (numState == ACTIVITY.ANALISAR_VANTAJOSIDADE) { validaCamposRequired('div_04') }
    else if (numState == ACTIVITY.APROVAR_VANTAJOSIDADE) { validaCamposRequired('div_05') }
    else if (numState == ACTIVITY.CADASTRAR_EMPRESA_VERTSIGN) {
        if ($("input[name^='column1_4___']").length < 1) { ExibirMensagem.msg("Necessário incluir ao menos uma pesquisa!") };
        var itensTabela = $("input[name^='column3_4___']")
        var tabela = []
        for (i = 0; i < itensTabela.length; i++) {
            tabela.push($(itensTabela[i]).val())
        }

        var nmArquivo = $('[name="txt_nomeArquivoMinuta_10"]').val()
        var idDoc = $('[name="txt_idDoc10Minuta"]').val()
        var atvCaptura = ['15', '14', '16'];
        var atvResponsavel = '43'
        var valid = '[name="txt_15_validaVertsign"]'

        customAssinatura(nrPasta, nmArquivo, idDoc, nProcesso, atvCaptura, atvResponsavel, tabela, [], [], valid)
    }
    else if (numState == ACTIVITY.CADASTRAR_NO_PROTHEUS) {
        // console.log()
        validaCamposRequired($('[name="rd_tipoAditivo_30"]').val());
        // validaCamposRequired('div_18');
        // validaCamposRequired('div_30');
        // validaCamposRequired('div_19');
        // validaCamposRequired('div_20');
        // validaCamposRequired('div_21');
        // validaCamposRequired('div_22');
        // validaCamposRequired('div_23');
        // validaCamposRequired('div_24');
    }
    else if (numState == ACTIVITY.INCLUIR_DOCUMENTO) { validaCamposRequired('div_29'); }
    else if (numState == ACTIVITY.REVISAR_CADASTRO) { validaCamposRequired('div_26'); }
    else if (numState == ACTIVITY.DEVOLVER_SOLICITANTE) { validaCamposRequired('div_25'); }
}

class ExibirMensagem {
    static msg(mensagem) {
        throw "<div class='alert alert-warning' role='alert'>" +
        "<strong>Atenção:</strong> " + mensagem +
        "</div><i class='fluigicon fluigicon-tag icon-sm'></i> <font style='font-weight: bold'>Dúvidas?</font> Entre em contato com o departamento de TI.";
    }
}