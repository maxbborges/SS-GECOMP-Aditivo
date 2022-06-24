function displayFields(form, customHTML) {
	log.info("PROCESSO ADITIVO >>>>")

	form.setShowDisabledFields(true);
	form.setHidePrintLink(true);

	customHTML.append("<script> var ATIVIDADE = " + getValue("WKNumState") + ";</script>");
	customHTML.append("<script> var FORM_MODE = '" + form.getFormMode() + "';</script>");
	customHTML.append("<script> var nProcesso = '" + getValue("WKNumProces") + "';</script>");

	// var process = getValue("WKNumProces");
	// var usuario = fluigAPI.getUserService().getCurrent();
	// customHTML.append("<script> var USUARIO ="+ getValue("WKUser") + "; </script>");
	var current_state = getValue('WKNumState');
	var current_mode = form.getFormMode();
	var data = new Date();
	var mes = (data.getMonth() + 1);
	if (mes <= 9) {
		mes = '0' + mes;
	}

	// OCULTAR BOTÕES DO PROCESSO, CASO NÃO ESTEJA EM MODO DE EDIÇÃO E ADIÇÃO
	if (current_mode != 'MOD' && current_mode != 'ADD') {
		BTNs=BTN00.concat(BTN00,BTN01,BTN06,BTN07,BTN10,BTN15)
		for (i = 0; i < BTNs.length; i++) {
			form.setVisibleById(BTNs[i], false);
		}
	}
	
	// OCULTA DIVS DE ANALISAR E APROVAR VANTAJOSIDADE CASO O PROCESSO SEJA MAIS ECONÔMICO
	// if (form.getValue('rd_maisEconomico_07') != "Nao"){
	// 	form.setVisibleById('div_05', false);
	// 	form.setVisibleById('div_04', false);
	// }

	// DIV_00
	if (current_state == ACTIVITY.ZERO || current_state == ACTIVITY.INICIO) {
		// OCULTA O INPUT QUE SUBSTITUI O SELECT
		form.setVisibleById('txt_fornecedor_associar_00', false);
	} else {
		// OCULTA OS BOTÕES DA ATIVIDADE, CASO NÃO ESTEJA NA ETAPA CORRESPONDENTE
		// BTNs = BTN00
		// for (i = 0; i < BTNs.length; i++) {
		// 	form.setVisibleById(BTNs[i], false);
		// }
		// OCULTA O SELECT DA ATIVIDADE
		form.setVisibleById('slc_fornecedor_associar', false);
		form.setVisibleById('_slc_fornecedor_associar', false);
	}

	// DIV_01, DIV_02, DIV_27
	if (current_state == ACTIVITY.PREPARAR_ADITIVO) {
	} else {
		// OCULTA OS BOTÕES DA ATIVIDADE, CASO NÃO ESTEJA NA ETAPA CORRESPONDENTE
		// BTNs = BTN01.concat(BTN02)
		// for (i = 0; i < BTNs.length; i++) {
		// 	form.setVisibleById(BTNs[i], false);
		// }
	}

	// DIV_03
	if (current_state == ACTIVITY.APROVAR_SOLICITACAO) {
	} else {
	}

	// DIV_04
	if (current_state == ACTIVITY.ANALISAR_VANTAJOSIDADE) {
	} else {
	}

	// DIV_05
	if (current_state == ACTIVITY.APROVAR_VANTAJOSIDADE) {
	} else {
	}

	// DIV_06
	if (current_state == ACTIVITY.FAZER_PESQUISA_PRECO) {
	} else {
		// OCULTA OS BOTÕES DA ATIVIDADE, CASO NÃO ESTEJA NA ETAPA CORRESPONDENTE
		// BTNs = BTN06
		// for (i = 0; i < BTNs.length; i++) {
		// 	form.setVisibleById(BTNs[i], false);
		// }
	}

	// DIV_07
	if (current_state == ACTIVITY.FAZER_NOTA_TECNICA) {
	} else {
		// OCULTA OS BOTÕES DA ATIVIDADE, CASO NÃO ESTEJA NA ETAPA CORRESPONDENTE
		// BTNs = BTN07
		// for (i = 0; i < BTNs.length; i++) {
		// 	form.setVisibleById(BTNs[i], false);
		// }
	}

	// DIV_28
	if (current_state == ACTIVITY.APROVACAO_GERENCIA) {
	} else {
	}

	// DIV_08
	if (current_state == ACTIVITY.DISTRIBUIR_PROCESSO) {
	} else {
	}

	// DIV_09
	if (current_state == ACTIVITY.ANALISE_PREVIA) {
	} else {
	}

	// DIV_10
	if (current_state == ACTIVITY.ELABORAR_PARECER_JURIDICO) {
	} else {
		// OCULTA OS BOTÕES DA ATIVIDADE, CASO NÃO ESTEJA NA ETAPA CORRESPONDENTE
		// BTNs = BTN10
		// for (i = 0; i < BTNs.length; i++) {
		// 	form.setVisibleById(BTNs[i], false);
		// }
	}

	// DIV_12
	if (current_state == ACTIVITY.REVISAR_PARECER_JURIDICO) {
	} else {
	}

	// DIV_13
	if (current_state == ACTIVITY.APROVAR_COORDENADOR) {
	} else {
	}

	// DIV_14
	if (current_state == ACTIVITY.APROVAR_ASSESSOR) {
	} else {
	}

	// DIV_15
	if (current_state == ACTIVITY.CADASTRAR_EMPRESA_VERTSIGN) {
	} else {
		// OCULTA OS BOTÕES DA ATIVIDADE, CASO NÃO ESTEJA NA ETAPA CORRESPONDENTE
		// BTNs = BTN15
		// for (i = 0; i < BTNs.length; i++) {
		// 	form.setVisibleById(BTNs[i], false);
		// }
	}

	// EM QUAL ETAPA EXIBIR DIV_17, DIV_18, DIV_19, DIV_20, DIV_21, DIV_22, DIV_23, DIV_24, DIV_25, DIV_26

	if (current_state == ACTIVITY.CADASTRAR_NO_PROTHEUS) {
	} else {
	}

	if (current_state == ACTIVITY.REVISAR_CADASTRO) {
	} else {
	}

	if (current_state == ACTIVITY.DEVOLVER_SOLICITANTE) {
	} else {
	}

}