const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

modelsProtocolAdoptionJson.map((item, index) => {
    let modelsAdoptionItem = c(".modelsWindowBodyAdoption").cloneNode(true);
    modelsAdoptionItem.querySelector(".windowAdoptionProtocol").innerHTML = "Protocolo: " + item.adoption_protocol;
    modelsAdoptionItem.querySelector(".windowAdressAdoption").innerHTML = "Endereço: " + item.adoption_adress;
    modelsAdoptionItem.querySelector(".windowTimeAdoption").innerHTML = "Horário: " + item.adoption_time;

    c(".button1").addEventListener("click", (e)=>{
        e.preventDefault();

        c(".first-step-div").style.display = "none";
        c(".second-step-div").style.display = "block";
        c(".final-step-div").style.display = "none";
    });

    c (".models-protocol-area").append(modelsAdoptionItem);
}); 

function showFinalDiv() {
    c(".first-step-div").style.display = "none";
    c(".second-step-div").style.display = "none";
    c(".final-step-div").style.display = "block";
}

function validateForm(form) {
    validateName(form)
    validateCpf(form)
    validateEmail(form)

    if (validateName(form) &&
    validateCpf(form) &&
    validateEmail(form)) {
        showFinalDiv();
    }
}

function validateName(form) {
    if (form.name.value == "") {
        showSmallWarning("#nameAlert")
        return false;
    } else {
        closeSmallWarning("#nameAlert")
        return true;
    } 
}

function validateCpf(form) {
    var cpf = form.cpf.value;
    if (cpf == "") {
        showSmallWarning("#cpfAlert");
        return false;
    } else {
        closeSmallWarning("#cpfAlert")
        return true;
    }
}

function validateEmail(form) {
    var email = form.email.value

    if (email == "") {
        closeSmallWarning("#invalidEmailAlert")         
        showSmallWarning("#emailAlert");
        return false;
    } else if (email.indexOf("@") == -1 && email.indexOf(".") == -1) {
        closeSmallWarning("#emailAlert")
        showSmallWarning("#invalidEmailAlert")         
        return false;
    } else {
        closeSmallWarning("#invalidEmailAlert")         
        closeSmallWarning("#emailAlert")
        return true;
    }
}

function maskCpf(cpf) {
    if (cpf.value.length == 3 || cpf.value.length == 7) {
        cpf.value = cpf.value + "."
    } 

    if (cpf.value.length == 11) {
        cpf.value = cpf.value + "-"
    }
}

function showSmallWarning(warningId) {
    $(warningId).removeClass("d-none");
}

function closeSmallWarning(warningId) {
    $(warningId).addClass("d-none")
}
