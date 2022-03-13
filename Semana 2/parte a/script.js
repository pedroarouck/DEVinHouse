function mensagemAgradecimento(form){
    if (form.name.value == null ||
        form.name.value == undefined ||
        form.name.value.length == 0 || form.email.value == null ||
        form.email.value == undefined ||
        form.email.value.length == 0) {
        return false;
    } else {
        alert("Seu produto digital foi enviado para o email informado. Obrigado!\n");
        return true;
    }
}