// function validateForm(form) {
//   var wkactivity = getValue('WKNumState');

//   // DIV_01
//   if (wkactivity == ACTIVITY.ZERO || wkactivity == ACTIVITY.INICIO) {
//     if (form.getValue('txt_nProcAnterior') == null || form.getValue('txt_nProcAnterior') == "") {
//       exibirMensagem("Necessário preencher o número do processo")
//     }
//     if (form.getValue('slc_fornecedor_associar') == null || form.getValue('slc_fornecedor_associar') == "") {
//       exibirMensagem("Necessário escolher um fornecedor")
//     }
//   }

//   // DIV_01, DIV_02, DIV_27
//   if (wkactivity == ACTIVITY.PREPARAR_ADITIVO) {
//     // DIV_01
//     // NECESÁRIO FZR VALIDAÇÃO DE ARQUIVO

//     // DIV_02
//     if (form.getValue('rd_entidade_02') == null || form.getValue('rd_entidade_02') == "") {
//       exibirMensagem("Necessário preencher a ENTIDADE em ELABORAR NOTA TÉCNICA")
//     }
//     if (form.getValue('rd_tipoContratacao_02') == null || form.getValue('rd_tipoContratacao_02') == "") {
//       exibirMensagem("Necessário preencher o TIPO DE CONTRATAÇÃO em ELABORAR NOTA TÉCNICA")
//     }
//     if (form.getValue('rd_pesquisaPreco_02') == null || form.getValue('rd_pesquisaPreco_02') == "") {
//       exibirMensagem("Necessário preencher a NECESSIDADE DE PESQUISA DE PREÇO em ELABORAR NOTA TÉCNICA")
//     }
//     if (form.getValue('rd_alteracaoReferente_02') == null || form.getValue('rd_alteracaoReferente_02') == "") {
//       exibirMensagem("Necessário preencher a REFERÊNCIA DA ALTERAÇÃO em ELABORAR NOTA TÉCNICA")
//     } else {
//       if ((form.getValue('atxt_itensAlterados') == null || form.getValue('atxt_itensAlterados') == "") && form.getValue('rd_alteracaoReferente_02') == "Um ou varios") {
//         exibirMensagem("Necessário DESCREVER OS ITENS ALTERADOS em ELABORAR NOTA TÉCNICA")
//       }
//     }
//     if ((form.getValue('txt_vigencia_novo') == null || form.getValue('txt_vigencia_novo') == "") && form.getValue('rd_vigencia_02') == "Sim") {
//       if (form.getValue('txt_vigencia_inicio') == null || form.getValue('txt_vigencia_inicio') == "") {
//         exibirMensagem("Necessário preencher a DATA DE INÍCIO (PRAZO) em ELABORAR NOTA TÉCNICA")
//       }
//       if (form.getValue('txt_vigencia_fim') == null || form.getValue('txt_vigencia_fim') == "") {
//         exibirMensagem("Necessário preencher a DATA DE FIM (PRAZO) em ELABORAR NOTA TÉCNICA")
//       }
//       exibirMensagem("Necessário preencher a NOVA DATA DE VIGÊNCIA em ELABORAR NOTA TÉCNICA")
//     }
//     if ((form.getValue('txt_execucao_nova') == null || form.getValue('txt_execucao_nova') == "") && form.getValue('rd_execucao_02') == "Sim") {
//       if (form.getValue('txt_execucao_inicio') == null || form.getValue('txt_execucao_inicio') == "") {
//         exibirMensagem("Necessário preencher a DATA DE INÍCIO (EXECUÇÃO) em ELABORAR NOTA TÉCNICA")
//       }
//       if (form.getValue('txt_execucao_fim') == null || form.getValue('txt_execucao_fim') == "") {
//         exibirMensagem("Necessário preencher a DATA DE FIM (EXECUÇÃO) em ELABORAR NOTA TÉCNICA")
//       }
//       exibirMensagem("Necessário preencher a NOVA DATA DE EXECUÇÃO em ELABORAR NOTA TÉCNICA")
//     }
//     if (form.getValue('txt_valor_atual') == null || form.getValue('txt_valor_atual') == "") {
//       exibirMensagem("Necessário preencher o VALOR ATUAL em ELABORAR NOTA TÉCNICA")
//     }

//     if (form.getValue('rd_acrescimo_02') == "Sim") {
//       if (form.getValue('txt_ValorAcrescimo_02') == null || form.getValue('txt_ValorAcrescimo_02') == "") {
//         exibirMensagem("Necessário preencher o VALOR DE ACRESCIMO em ELABORAR NOTA TÉCNICA")
//       }
//       if (form.getValue('txt_percentualAcrescimo_02') == null || form.getValue('txt_percentualAcrescimo_02') == "") {
//         exibirMensagem("Necessário preencher o PERCENTUAL DE ACRESCIMO em ELABORAR NOTA TÉCNICA")
//       }
//     }

//     if (form.getValue('rd_supressao_02') == "Sim") {
//       if (form.getValue('txt_percentualSupressao_02') == null || form.getValue('txt_percentualSupressao_02') == "") {
//         exibirMensagem("Necessário preencher o PERCENTUAL DA SUPRESSÃO em ELABORAR NOTA TÉCNICA")
//       }
//       if (form.getValue('txt_valorSupressao_02') == null || form.getValue('txt_valorSupressao_02') == "") {
//         exibirMensagem("Necessário preencher o VALOR DA SUPRESSÃO em ELABORAR NOTA TÉCNICA")
//       }
//     }

//     if (form.getValue('rd_reajuste_02') == "Sim") {
//       if (form.getValue('txt_percentualReajuste_02') == null || form.getValue('txt_percentualReajuste_02') == "") {
//         exibirMensagem("Necessário preencher o PERCENTUAL DE REAJUSTE em ELABORAR NOTA TÉCNICA")
//       }
//       if (form.getValue('txt_valorReajuste_02') == null || form.getValue('txt_valorReajuste_02') == "") {
//         exibirMensagem("Necessário preencher o  VALOR DO REAJUSTE em ELABORAR NOTA TÉCNICA")
//       }
//     }

//     if (form.getValue('rd_repactuacao_02') == "Sim") {
//       if (form.getValue('txt_percentualRepactuacao_02') == null || form.getValue('txt_percentualRepactuacao_02') == "") {
//         exibirMensagem("Necessário preencher o PERCENTUAL DA REPACTUAÇÃO em ELABORAR NOTA TÉCNICA")
//       }
//       if (form.getValue('txt_valorRepactuacao_02') == null || form.getValue('txt_valorRepactuacao_02') == "") {
//         exibirMensagem("Necessário preencher o VALOR DA REPACTUAÇÃO em ELABORAR NOTA TÉCNICA")
//       }
//     }

//     if (form.getValue('rd_revisao_02') == "Sim") {
//       if ((form.getValue('txt_percentualRevisao_02') == null || form.getValue('txt_percentualRevisao_02') == "")) {
//         exibirMensagem("Necessário preencher o PERCENTUAL DA REVISÃO em ELABORAR NOTA TÉCNICA")
//       }
//       if ((form.getValue('txt_valorRevisao_02') == null || form.getValue('txt_valorRevisao_02') == "")) {
//         exibirMensagem("Necessário preencher o VALOR DA REVISÃO em ELABORAR NOTA TÉCNICA")
//       }
//     }

//     if ((form.getValue('atxt_outrosJustificativa_02') == null || form.getValue('atxt_outrosJustificativa_02') == "") && form.getValue('rd_outros_02') == "Sim") {
//       exibirMensagem("Necessário preencher a JUSTIFICATIVA DE ALTERAÇÃO em ELABORAR NOTA TÉCNICA")
//     }

//     if (form.getValue('txt_projeto_02') == null || form.getValue('txt_projeto_02') == "") {
//       exibirMensagem("Necessário preencher o PROJETO em ELABORAR NOTA TÉCNICA")
//     }
//     if (form.getValue('txt_programa_02') == null || form.getValue('txt_programa_02') == "") {
//       exibirMensagem("Necessário preencher o PROGRAMA em ELABORAR NOTA TÉCNICA")
//     }
//     if (form.getValue('txt_subprograma_02') == null || form.getValue('txt_subprograma_02') == "") {
//       exibirMensagem("Necessário preencher o SUBPROGRAMA em ELABORAR NOTA TÉCNICA")
//     }
//     if (form.getValue('txt_centroCusto_02') == null || form.getValue('txt_centroCusto_02') == "") {
//       exibirMensagem("Necessário preencher o CENTRO DE CUSTO em ELABORAR NOTA TÉCNICA")
//     }
//     if (form.getValue('txt_gpOrcamento_02') == null || form.getValue('txt_gpOrcamento_02') == "") {
//       exibirMensagem("Necessário preencher o GRUPO ORÇAMENTÁRIO em ELABORAR NOTA TÉCNICA")
//     }
//     // NECESSÁRIO FZR AS INFORMAÇÕES ORÇAMENTARIAS (TABELA)
    
//     // DIV_27
//     // NECESSÁRO FZR VALIDAÇÃO DE ARQUIVOS 
//   }

//   // DIV_03
//   if (wkactivity == ACTIVITY.APROVAR_SOLICITACAO) {
//     if (form.getValue('rd_apAditivo_03') == null || form.getValue('rd_apAditivo_03') == "") {
//       exibirMensagem("Necessário preencher a APROVAÇÃO DO ADITIVO em APROVAR SOLICITAÇÃO DO ADITIVO")
//     }
//     if ((form.getValue('atxt_observacoes_03') == null || form.getValue('atxt_observacoes_03') == "") && form.getValue('rd_apAditivo_03') == "Nao") {
//       exibirMensagem("Necessário preencher a JUSTIFICATIVA DA NÃO APROVAÇÃO em APROVAR SOLICITAÇÃO DE ADITIVO")
//     }
//   }

//   // DIV_04
//   if (wkactivity == ACTIVITY.ANALISAR_VANTAJOSIDADE) {
//     if (form.getValue('rd_anVantajosidade_04') == null || form.getValue('rd_anVantajosidade_04') == "") {
//       exibirMensagem("Necessário preencher a VALIDAÇÃO DE VANTAJOSIDADE em ANALISAR VANTAJOSIDADE")
//     }
//     if ((form.getValue('atxt_observacoes_03') == null || form.getValue('atxt_observacoes_03') == "") && form.getValue('rd_anVantajosidade_04') == "Nao") {
//       exibirMensagem("Necessário preencher a JUSTIFICATIVA DA NÃO VANTAJOSIDADE em ANALISAR VANTAJOSIDADE")
//     }
//   }

//   // DIV_05
//   if (wkactivity == ACTIVITY.APROVAR_VANTAJOSIDADE) {
//     if (form.getValue('rd_apVantajosidade_05') == null || form.getValue('rd_apVantajosidade_05') == "") {
//       exibirMensagem("Necessário preencher a APROVAÇÃO DA VANTAJOSIDADE em APROVAR VANTAJOSIDADE")
//     }
//     if ((form.getValue('atxt_apVantajosidade_05') == null || form.getValue('atxt_apVantajosidade_05') == "") && form.getValue('rd_apVantajosidade_05') == "Nao") {
//       exibirMensagem("Necessário preencher a JUSTIFICATIVA DA NÃO APROVAÇÃO DA VANTAJOSIDADE em APROVAR VANTAJOSIDADE")
//     }
//   }

//   // DIV_06
//   if (wkactivity == ACTIVITY.FAZER_PESQUISA_PRECO) {
//     if (form.getValue('rd_necAjuste_06') == null || form.getValue('rd_necAjuste_06') == "") {
//       exibirMensagem("Necessário preencher a NECESSIDADE DE AJUSTE em FAZER A PESQUISA DE PREÇO")
//     }
//     if ((form.getValue('atxt_apVantajosidade_05') == null || form.getValue('atxt_apVantajosidade_05') == "") && form.getValue('rd_necAjuste_06') == "Sim") {
//       exibirMensagem("Necessário preencher a JUSTIFICATIVA DO AJUSTE em FAZER A PESQUISA DE PREÇO")
//     }
//     // NECESSÁRIO FAZER A TABELA DE PESQUISA DE PREÇO
//   }

//   // DIV_07
//   if (wkactivity == ACTIVITY.FAZER_NOTA_TECNICA) {
//     if (form.getValue('rd_necAjuste_07') == null || form.getValue('rd_necAjuste_07') == "") {
//       exibirMensagem("Necessário preencher se HÁ NECESSIDADE DE REAJUSTE em FAZER A NOTA TÉCNICA")
//     }
//     if (form.getValue('rd_maisEconomico_07') == null || form.getValue('rd_maisEconomico_07') == "") {
//       exibirMensagem("Necessário preencher se É MAIS ECONÔMICO em FAZER A NOTA TÉCNICA")
//     }
//     if ((form.getValue('atxt_mtvAjuste_07') == null || form.getValue('atxt_mtvAjuste_07') == "") && form.getValue('rd_necAjuste_07') == "Sim") {
//       exibirMensagem("Necessário preencher a JUSTIFICATIVA DO AJUSTE em FAZER A NOTA TÉCNICA")
//     }
//     if ((form.getValue('atxt_mtvMenosEconomico_07') == null || form.getValue('atxt_mtvMenosEconomico_07') == "") && form.getValue('rd_maisEconomico_07') == "Nao") {
//       exibirMensagem("Necessário preencher a JUSTIFICATIVA DE NÃO SER MAIS ECONÔMICO em FAZER A NOTA TÉCNICA")
//     }
//     // FAZER A VALIDAÇÃO DO ARQUIVO ENVIADO
//   }

//   // DIV_28
//   if (wkactivity == ACTIVITY.APROVACAO_GERENCIA) {
//     // NECESSÁRIO FZR A VALIDAÇÃO
//   }

//   // DIV_08
//   if (wkactivity == ACTIVITY.DISTRIBUIR_PROCESSO) {
//   }

//   // DIV_09
//   if (wkactivity == ACTIVITY.ANALISE_PREVIA) {
//     if (form.getValue('rd_apAnalise_09') == null || form.getValue('rd_apAnalise_09') == "") {
//       exibirMensagem("Necessário preencher se OS DOCUMENTOS SÃO SUFICIENTES em ANÁLISE PRÉVIA")
//     }
//     if ((form.getValue('cb_responsaval_09') == null || form.getValue('cb_responsaval_09') == "") && form.getValue('rd_apAnalise_09') == "Nao") {
//       exibirMensagem("Necessário preencher a ÁREA DE DESTINO em ANÁLISE PRÉVIA")
//     }
//     if ((form.getValue('atxt_justificativa_09') == null || form.getValue('atxt_justificativa_09') == "") && form.getValue('rd_apAnalise_09') == "Nao") {
//       exibirMensagem("Necessário preencher a JUSTIFICATIVA DE DEVOLUÇÃO em ANÁLISE PRÉVIA")
//     }
//   }

//   // DIV_10
//   if (wkactivity == ACTIVITY.REVISAR_PARECER_JURIDICO) {
//   }

//   // DIV_12
//   if (wkactivity == ACTIVITY.REVISAR_PARECER_JURIDICO) {
//     if (form.getValue('rd_apParecer_12') == null || form.getValue('rd_apParecer_12') == "") {
//       exibirMensagem("Necessário preencher a APROVAÇÃO DO PARECER E DA MINUTA em REVISAR PARECER JURÍDICO E A MINUTA DO TERMO ADITIVO")
//     }
//     if ((form.getValue('atxt_obsApParecer_12') == null || form.getValue('atxt_obsApParecer_12') == "") && form.getValue('rd_apParecer_12') == "Nao") {
//       exibirMensagem("Necessário preencher a JUSTIFICATIVA em APROVAÇÃO DO PARECER E DA MINUTA em REVISAR PARECER JURÍDICO E A MINUTA DO TERMO ADITIVO")
//     }
//   }

//   // DIV_13
//   if (wkactivity == ACTIVITY.APROVAR_COORDENADOR) {
//     if (form.getValue('rd_apParecerCord_13') == null || form.getValue('rd_apParecerCord_13') == "") {
//       exibirMensagem("Necessário preencher a APROVAÇÃO DO PARECER E DA MINUTA em APROVAR PARECER JURÍDICO E A MINUTA DO TERMO ADITIVO - COORDENADOR(A)")
//     }
//     if ((form.getValue('atxt_obsApParecerCord_13') == null || form.getValue('atxt_obsApParecerCord_13') == "") && form.getValue('rd_apParecerCord_13') == "Nao") {
//       exibirMensagem("Necessário preencher a JUSTIFICATIVA em APROVAÇÃO DO PARECER E DA MINUTA em APROVAR PARECER JURÍDICO E A MINUTA DO TERMO ADITIVO  - COORDENADOR(A)")
//     }
//   }

//   // DIV_14
//   if (wkactivity == ACTIVITY.APROVAR_ASSESSOR) {
//     if (form.getValue('rd_apParecerAss_14') == null || form.getValue('rd_apParecerAss_14') == "") {
//       exibirMensagem("Necessário preencher a APROVAÇÃO DO PARECER E DA MINUTA em APROVAR PARECER JURÍDICO E A MINUTA DO TERMO ADITIVO - ASSESSOR(A)")
//     }
//     if ((form.getValue('atxt_obsApParecerAss_14') == null || form.getValue('atxt_obsApParecerAss_14') == "") && form.getValue('rd_apParecerAss_14') == "Nao") {
//       exibirMensagem("Necessário preencher a JUSTIFICATIVA em APROVAÇÃO DO PARECER E DA MINUTA em APROVAR PARECER JURÍDICO E A MINUTA DO TERMO ADITIVO  - ASSESSOR(A)")
//     }
//   }

//   // DIV_15
//   if (wkactivity == ACTIVITY.CADASTRAR_EMPRESA_VERTSIGN) {
//     var idxCF = form.getChildrenIndexes("tbl_assinantes_15");
//     if (idxCF.length == 0) {
//       exibirMensagem("Necessário incluir ao menos um assinante em CADASTRAR DADOS DO FORNECEDOR")
//     }
//   }





//   // EM QUAL ETAPA EXIBIR DIV_17, DIV_18, DIV_19, DIV_20, DIV_21, DIV_22, DIV_23, DIV_24, DIV_25, DIV_26
//   if (wkactivity == ACTIVITY.CADASTRAR_NO_PROTHEUS) {
//     if (form.getValue('txt_dtInicio_17') == null || form.getValue('txt_dtInicio_17') == "") {
//       exibirMensagem("Necessário preencher a DATA DE INICIO DO CONTRATO em DADOS DO CONTRATO")
//     }
//     if (form.getValue('txt_final_17') == null || form.getValue('txt_final_17') == "") {
//       exibirMensagem("Necessário preencher a DATA FINAL VIGENTE em DADOS DO CONTRATO")
//     }
//     if (form.getValue('txt_reajuste_17') == null || form.getValue('txt_reajuste_17') == "") {
//       exibirMensagem("Necessário preencher a REAJUSTE em DADOS DO CONTRATO")
//     }
//     if (form.getValue('txt_ipca_17') == null || form.getValue('txt_ipca_17') == "") {
//       exibirMensagem("Necessário preencher a INDICE em DADOS DO CONTRATO")
//     }
//     if (form.getValue('atxt_obj_17') == null || form.getValue('atxt_obj_17') == "") {
//       exibirMensagem("Necessário preencher a OBJETO em DADOS DO CONTRATO")
//     }
//     if (form.getValue('txt_gpAprovacao_17') == null || form.getValue('txt_gpAprovacao_17') == "") {
//       exibirMensagem("Necessário preencher a GRUPO DE APROVAÇÃO em DADOS DO CONTRATO")
//     }
//     if (form.getValue('txt_fornecedor_17') == null || form.getValue('txt_fornecedor_17') == "") {
//       exibirMensagem("Necessário preencher a DESCRIÇÃO DO FORNECEDOR em DADOS DO CONTRATO")
//     }
//     if (form.getValue('txt_nProcesso_17') == null || form.getValue('txt_nProcesso_17') == "") {
//       exibirMensagem("Necessário preencher a NUMERO DO PROCESSO em DADOS DO CONTRATO")
//     }
//     if (form.getValue('txt_entidade_17') == null || form.getValue('txt_entidade_17') == "") {
//       exibirMensagem("Necessário preencher a ENTIDADE em DADOS DO CONTRATO")
//     }
//     // NECESSÁRIO FZR TABELA
//   }

//   if (wkactivity == ACTIVITY.DEVOLVER_SOLICITANTE) {
//     if (form.getValue('rd_rev_cad_prot_26') == null || form.getValue('rd_rev_cad_prot_26') == "") {
//       exibirMensagem("Necessário preencher a APROVAÇÃO DA REVISÃO em REVISAR CADASTRO")
//     }
//     if ((form.getValue('atxt_obs_rev_cad_26') == null || form.getValue('atxt_obs_rev_cad_26') == "") && form.getValue('rd_rev_cad_prot_26') == "Nao") {
//       exibirMensagem("Necessário preencher a JUSTIFICATIVA em REVISAR CADASTRO")
//     }
//   }

//   if (wkactivity == ACTIVITY.DEVOLVER_SOLICITANTE) {
//     if (form.getValue('rd_devSolicitante_25') == null || form.getValue('rd_devSolicitante_25') == "") {
//       exibirMensagem("Necessário preencher a APROVAÇÃO DA REVISÃO em REVISAR CADASTRO DO ASSINANTE")
//     }
//     if ((form.getValue('atxt_obsDevSolic_25') == null || form.getValue('atxt_obsDevSolic_25') == "") && form.getValue('rd_devSolicitante_25') == "Nao") {
//       exibirMensagem("Necessário preencher a JUSTIFICATIVA em REVISAR CADASTRO DO ASSINANTE")
//     }
//   }
// }

// function exibirMensagem(mensagem) {
//   throw "<div class='alert alert-warning' role='alert'>" +
//   "<strong>Atenção:</strong> " + mensagem +
//   "</div>" +
//   "<i class='fluigicon fluigicon-tag icon-sm'></i> <font style='font-weight: bold'>Dúvidas?</font> Entre em contato com o departamento de TI.";
// }