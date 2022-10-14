var ACTIVITY = {
	ZERO: 0,
	INICIO: 1,
	PREPARAR_ADITIVO: 2,
	APROVAR_SOLICITACAO: 3,
	FAZER_PESQUISA_PRECO:4,
	FAZER_NOTA_TECNICA:7,
	ANALISAR_VANTAJOSIDADE:9,
	DISTRIBUIR_PROCESSO:12,
	ANALISE_PREVIA:13,
	APROVAR_COORDENADOR:14,
	REVISAR_PARECER_JURIDICO:15,
	APROVAR_ASSESSOR:16,
	CADASTRAR_EMPRESA_VERTSIGN:43,
	CADASTRAR_NO_PROTHEUS:45,
	DEVOLVER_SOLICITANTE:49,
	APROVAR_VANTAJOSIDADE:90,
	REVISAR_CADASTRO:159,
	ELABORAR_PARECER_JURIDICO:172,
	ERRO_OBTER_ASSINANTES_0:69,
	ERRO_OBTER_ASSINANTES_1:118,
	ERRO_OBTER_ASSINANTES_2:140,
	ERRO_REALIZAR_UPLOAD_0:70,
	ERRO_REALIZAR_UPLOAD_1:119,
	ERRO_REALIZAR_UPLOAD_2:141,
	ERRO_ANEXAR_0:71,
	ERRO_ANEXAR_1:120,
	ERRO_ANEXAR_2:143,
	APROVACAO_GERENCIA:200,
	INCLUIR_DOCUMENTO:224
};

var DIVS=[
	// ZERO / INICIO
	"div_00",
	// PREPARAR_ADITIVO
	"div_01",
	"div_02",
	"div_27",
	// APROVAR_SOLICITACAO
	"div_03",
	"div_04",
	"div_05",
	// FAZER_PESQUISA_PRECO
	"div_06",
	// FAZER_NOTA_TECNICA
	"div_07",
	"div_28",
	"div_08",
	"div_09",
	 "div_10",
	// "div_11",
	"div_12",
	"div_13",
	 "div_14",
	"div_15",
	// "div_16",
	"div_17",
	"div_18",
	"div_30",
	"div_19",
	"div_20",
	"div_21",
	"div_22",
	"div_23",
	"div_24",
	"div_29",
	// "div_25",
	"div_26",
	"div_25",
]

var BTN00=[
	"btn_CarregarProceso_00"
]

var BTN01=[
	"btn_anexar_01",
	"btn_download_01",
	"btn_visualizar_01",
	"btn_Incluir_02",
	"btn_anexar_27",
	"btn_download_27",
	"btn_visualizar_27"
]

var BTN06=[
	"btn_incluir_06"
]

var BTN07=[
	"btn_anexar_07",
	"btn_download_07",
	"btn_visualizar_07",
]

var BTN10=[
	"btn_anexarParecer_10",
	"btn_downloadParecer_10",
	"btn_visualizarParecer_10",
	"btn_anexarMinuta_10",
	"btn_downloadMinuta_10",
	"btn_visualizarMinuta_10",
]

var BTN15=[
	"btn_carregarAssinante_15",
	"btn_incluirAssinante_15"
]

var RD01=[
	"rd_tipoContratacao_02",
	"rd_outros_02",
	"rd_pesquisaPreco_02",
	"rd_alteracaoReferente_02",
	"rd_entidade_02",
	"rd_repactuacao_02",
	"rd_execucao_02",
	"rd_acrescimo_02",
]

var FIELDS00=[
	// "txt_nProc",
	"txt_nProcAnterior",
	// "slc_fornecedor_associar",
	// "txt_fornecedor_associar_00"
]

var FIELDS01=[
	"atxt_observacoes_01",
	"txt_projeto_02",
	"txt_gpOrcamento_02",
	"txt_valorRepactuacao_02",
	"txt_programa_02",
	"txt_percentualRevisao_02",
	"rd_tipoContratacao_02",
	"txt_percentualReajuste_02",
	"txt_centroCusto_02",
	"txt_valorRevisao_02",
	"txt_percentualSupressao_02",
	"rd_outros_02",
	"rd_pesquisaPreco_02",
	"txt_valorReajuste_02",
	"txt_percentualRepactuacao_02",
	"txt_percentualAcrescimo_02",
	"txt_ValorAcrescimo_02",
	"txt_subprograma_02",
	"rd_alteracaoReferente_02",
	"rd_entidade_02",
	"rd_repactuacao_02",
	"rd_execucao_02",
	"txt_valorSupressao_02",
	"rd_reajuste_02",
	"rd_vigencia_02",
	"rd_supressao_02",
	"rd_revisao_02",
	"atxt_outrosJustificativa_02",
	"rd_acrescimo_02",
	"atxt_itensAlterados",
	"txt_vigencia_inicio",
	"txt_vigencia_fim",
	"txt_execucao_inicio",
	"txt_execucao_fim",
	"txt_vigencia_novo",
	"txt_execucao_nova",
	"txt_valor_inicial",
	"txt_valor_atual",
	"atxt_observacoes_27"
]

var FIELDS03 =[
	"atxt_observacoes_03",
	"rd_apAditivo_03",
]

var FIELDS04 =[
	"atxt_anVantajosidade_04",
	"rd_anVantajosidade_04",
]

var FIELDS05 =[
	"rd_apVantajosidade_05",
	"atxt_apVantajosidade_05",
]

var FIELDS06 = [
	"atxt_descricao_06",
	"txt_razaoSocial_06",
	"rd_necAjuste_06",
	"atxt_necAjuste_06",
	"txt_cnpj_06",
	"txt_ValUnitario_06",
	"txt_valorTotal_06",
]

var FIELDS07 =[
	"atxt_notaTecnica_07",
	"rd_maisEconomico_07",
	"rd_necAjuste_07",
	"atxt_mtvMenosEconomico_07",
	"atxt_mtvAjuste_07"
]

var FIELDS08 =[
	"atxt_justificativa_08",
]

var FIELDS09 =[
	"rd_apAnalise_09",
	"cb_responsaval_09",
	"atxt_justificativa_09",
]

var FIELDS10 =[
	"atxt_pj_10",
	"atxt_mta_10",
]

var FIELDS11 =[
	
]

var FIELDS12 =[
	"rd_apParecer_12",
	"atxt_obsApParecer_12",
]

var FIELDS13 =[
	"rd_apParecerCord_13",
	"atxt_obsApParecerCord_13",
]
var FIELDS14 =[
	"rd_apParecerAss_14",
	"atxt_obsApParecerAss_14",
]

var FIELDS15 =[
	"txt_cpf_fornecedor_15",
	"txt_nome_fornecedor_15",
	"txt_email_fornecedor_15",
]

var FIELDS17 =[
	"txt_fornecedor_17",
	"txt_gpAprovacao_17",
	"txt_entidade_17",
	"txt_dtInicio_17",
	"txt_final_17",
	"txt_reajuste_17",
	"txt_ipca_17",
	"txt_nProcesso_17",
	"atxt_obj_17",
]

var FIELDS18 =[
	"dt_novaData_18",

]

var FIELDS19 =[
	"txt_vigencia_19",
	"cb_vigencia_19",
	"txt_novaVigencia_19",
	"atxt_objAditivo_19",
	// "rd_001_19"
]

var FIELDS20 =[
	"txt_dtReajuste_20",
	"txt_refReajuste_20",
	"atxt_objAditivo_20",
	// "rd_3_20"
]

var FIELDS21 =[
	"atxt_objAditivo_21",
	// "txt_reajuste_21",
	// "cb_indice_21",
	"txt_descIndice_21",
	"rd_7_21"
]

var FIELDS22 =[
	"atxt_008_22",
	// "rd_8_22"
]

var FIELDS23 =[
	// "rd_010_23",
	// "slc_010_23",
	"atxt_010_23",
]

var FIELDS24 =[
	// "rd_012_24",
	"txt_012_24",
	"atxt_012_24"
]

var FIELDS25=[
	"atxt_obsDevSolic_25",
	"rd_devSolicitante_25",
]

var FIELDS26=[
	"rd_rev_cad_prot_26",
	"atxt_obs_rev_cad_26",
]

var FIELDS28=[
	"rd_apGerencia_28",
	"atxt_apGerencia_28",
]

var Fields = [
	"column7_31",
	"column3_2",
	"column3_3",
	"column7_1",
	"column10_1",
	"column10_3",
	"column3_1",
	"column14_3",
	"column6_3",
	"column2_3",
	"column6_1",
	"column11_3",
	"column2_1",
	"column2_2",
	"column15_3",
	"column9_1",
	"column9_3",
	"column5_1",
	"column5_2",
	"column5_3",
	"column1_1",
	"column1_2",
	"column1_3",
	"column12_3",
	"column8_1",
	"column8_3",
	"column4_1",
	"column4_2",
	"column4_3",
	"column13_3",
]