function displayFields(form, customHTML) {
	// // form.setShowDisabledFields(true);
	// // form.setHidePrintLink(true);

	customHTML.append("<script> var ATIVIDADE = " + getValue("WKNumState") + ";</script>");
	customHTML.append("<script> var FORM_MODE = '" + form.getFormMode() + "';</script>");
	customHTML.append("<script> var nProcesso = '" + getValue("WKNumProces") + "';</script>");

}