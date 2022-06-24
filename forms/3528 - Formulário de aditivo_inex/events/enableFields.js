function enableFields(form) {
  log.info("PROCESSO ADITIVO > ENABLE")
  current_state = getValue("WKNumState")

  // var mapaForm = new java.util.HashMap();
  // mapaForm = form.getCardData();
  // var it = mapaForm.keySet().iterator();
  // var it = FIELDS02.keySet().iterator();
  // log.info(FIELDS02)
  // log.info(it)
  // log.info(mapaForm)
  // while (FIELDS02.hasNext()) { // Laço de repetição para habilitar/desabilitar os campos
  //       var key = it.next();
  //       print (key)
  //       // form.setEnabled(key, false);
  //   }

  if (current_state != ACTIVITY.ZERO && current_state != ACTIVITY.INICIO) {
    // DESABILITA OS CAMPOS QUE NÃO PERTECEM A ATIVIDADE CORRESPONDENTE
    for (i = 0; i < FIELDS00.length; i++) {
      form.setEnabled(FIELDS00[i], false);
    }
  }

  if (current_state != ACTIVITY.PREPARAR_ADITIVO) {
    // DESABILITA OS CAMPOS QUE NÃO PERTECEM A ATIVIDADE CORRESPONDENTE
    for (i = 0; i < FIELDS01.length; i++) {
      // form.setEnabled(FIELDS01[i], false);
    }
  }

  if (current_state != ACTIVITY.APROVAR_SOLICITACAO) {
    // DESABILITA OS CAMPOS QUE NÃO PERTECEM A ATIVIDADE CORRESPONDENTE
    for (i = 0; i < FIELDS03.length; i++) {
      form.setEnabled(FIELDS03[i], false);
    }
  }

  if (current_state != ACTIVITY.ANALISAR_VANTAJOSIDADE) {
    // DESABILITA OS CAMPOS QUE NÃO PERTECEM A ATIVIDADE CORRESPONDENTE
    for (i = 0; i < FIELDS04.length; i++) {
      form.setEnabled(FIELDS04[i], false);
    }
  }

  if (current_state != ACTIVITY.APROVAR_VANTAJOSIDADE) {
    // DESABILITA OS CAMPOS QUE NÃO PERTECEM A ATIVIDADE CORRESPONDENTE
    for (i = 0; i < FIELDS05.length; i++) {
      form.setEnabled(FIELDS05[i], false);
    }
  }

  if (current_state != ACTIVITY.FAZER_PESQUISA_PRECO) {
    // DESABILITA OS CAMPOS QUE NÃO PERTECEM A ATIVIDADE CORRESPONDENTE
    for (i = 0; i < FIELDS06.length; i++) {
      form.setEnabled(FIELDS06[i], false);
    }
  }

  if (current_state != ACTIVITY.FAZER_NOTA_TECNICA) {
    // DESABILITA OS CAMPOS QUE NÃO PERTECEM A ATIVIDADE CORRESPONDENTE
    for (i = 0; i < FIELDS07.length; i++) {
      form.setEnabled(FIELDS07[i], false);
    }
  }

  if (current_state != ACTIVITY.APROVACAO_GERENCIA) {
    // DESABILITA OS CAMPOS QUE NÃO PERTECEM A ATIVIDADE CORRESPONDENTE
    for (i = 0; i < FIELDS28.length; i++) {
      form.setEnabled(FIELDS28[i], false);
    }
  }

  if (current_state != ACTIVITY.DISTRIBUIR_PROCESSO) {
    // DESABILITA OS CAMPOS QUE NÃO PERTECEM A ATIVIDADE CORRESPONDENTE
    for (i = 0; i < FIELDS08.length; i++) {
      form.setEnabled(FIELDS08[i], false);
    }
  }

  if (current_state != ACTIVITY.ANALISE_PREVIA) {
    // DESABILITA OS CAMPOS QUE NÃO PERTECEM A ATIVIDADE CORRESPONDENTE
    for (i = 0; i < FIELDS09.length; i++) {
      form.setEnabled(FIELDS09[i], false);
    }
  }

  if (current_state != ACTIVITY.ELABORAR_PARECER_JURIDICO) {
    // DESABILITA OS CAMPOS QUE NÃO PERTECEM A ATIVIDADE CORRESPONDENTE
    for (i = 0; i < FIELDS10.length; i++) {
      form.setEnabled(FIELDS10[i], false);
    }
  }

  if (current_state != ACTIVITY.REVISAR_PARECER_JURIDICO) {
    // DESABILITA OS CAMPOS QUE NÃO PERTECEM A ATIVIDADE CORRESPONDENTE
    for (i = 0; i < FIELDS12.length; i++) {
      form.setEnabled(FIELDS12[i], false);
    }
  }

  if (current_state != ACTIVITY.APROVAR_COORDENADOR) {
    // DESABILITA OS CAMPOS QUE NÃO PERTECEM A ATIVIDADE CORRESPONDENTE
    for (i = 0; i < FIELDS13.length; i++) {
      form.setEnabled(FIELDS13[i], false);
    }
  }

  if (current_state != ACTIVITY.APROVAR_ASSESSOR) {
    // DESABILITA OS CAMPOS QUE NÃO PERTECEM A ATIVIDADE CORRESPONDENTE
    for (i = 0; i < FIELDS14.length; i++) {
      form.setEnabled(FIELDS14[i], false);
    }
  }

  if (current_state != ACTIVITY.CADASTRAR_EMPRESA_VERTSIGN) {
    // DESABILITA OS CAMPOS QUE NÃO PERTECEM A ATIVIDADE CORRESPONDENTE
    for (i = 0; i < FIELDS15.length; i++) {
      form.setEnabled(FIELDS15[i], false);
    }
  }





  	// EM QUAL ETAPA EXIBIR DIV_17, DIV_18, DIV_19, DIV_20, DIV_21, DIV_22, DIV_23, DIV_24, DIV_25, DIV_26
  if (current_state != ACTIVITY.CADASTRAR_NO_PROTHEUS) {
    // DESABILITA OS CAMPOS QUE NÃO PERTECEM A ATIVIDADE CORRESPONDENTE
    // for (i = 0; i < FIELDS17.length; i++) {
    //   form.setEnabled(FIELDS17[i], false);
    // }
  }

  if (current_state != ACTIVITY.CADASTRAR_NO_PROTHEUS) {
    // DESABILITA OS CAMPOS QUE NÃO PERTECEM A ATIVIDADE CORRESPONDENTE
    for (i = 0; i < FIELDS18.length; i++) {
      form.setEnabled(FIELDS18[i], false);
    }
  }
  
  if (current_state != ACTIVITY.CADASTRAR_NO_PROTHEUS) {
    // DESABILITA OS CAMPOS QUE NÃO PERTECEM A ATIVIDADE CORRESPONDENTE
    for (i = 0; i < FIELDS19.length; i++) {
      form.setEnabled(FIELDS19[i], false);
    }
  }

  if (current_state != ACTIVITY.CADASTRAR_NO_PROTHEUS) {
    // DESABILITA OS CAMPOS QUE NÃO PERTECEM A ATIVIDADE CORRESPONDENTE
    for (i = 0; i < FIELDS20.length; i++) {
      form.setEnabled(FIELDS20[i], false);
    }
  }

  if (current_state != ACTIVITY.CADASTRAR_NO_PROTHEUS) {
    // DESABILITA OS CAMPOS QUE NÃO PERTECEM A ATIVIDADE CORRESPONDENTE
    for (i = 0; i < FIELDS21.length; i++) {
      form.setEnabled(FIELDS21[i], false);
    }
  }

  if (current_state != ACTIVITY.CADASTRAR_NO_PROTHEUS) {
    // DESABILITA OS CAMPOS QUE NÃO PERTECEM A ATIVIDADE CORRESPONDENTE
    for (i = 0; i < FIELDS22.length; i++) {
      form.setEnabled(FIELDS22[i], false);
    }
  }

  if (current_state != ACTIVITY.CADASTRAR_NO_PROTHEUS) {
    // DESABILITA OS CAMPOS QUE NÃO PERTECEM A ATIVIDADE CORRESPONDENTE
    for (i = 0; i < FIELDS23.length; i++) {
      form.setEnabled(FIELDS23[i], false);
    }
  }

  if (current_state != ACTIVITY.CADASTRAR_NO_PROTHEUS) {
    // DESABILITA OS CAMPOS QUE NÃO PERTECEM A ATIVIDADE CORRESPONDENTE
    for (i = 0; i < FIELDS24.length; i++) {
      form.setEnabled(FIELDS24[i], false);
    }
  }

  if (current_state != ACTIVITY.DEVOLVER_SOLICITANTE) {
    // DESABILITA OS CAMPOS QUE NÃO PERTECEM A ATIVIDADE CORRESPONDENTE
    for (i = 0; i < FIELDS25.length; i++) {
      form.setEnabled(FIELDS25[i], false);
    }
  }

  if (current_state != ACTIVITY.REVISAR_CADASTRO) {
    // DESABILITA OS CAMPOS QUE NÃO PERTECEM A ATIVIDADE CORRESPONDENTE
    for (i = 0; i < FIELDS26.length; i++) {
      form.setEnabled(FIELDS26[i], false);
    }
  }
}