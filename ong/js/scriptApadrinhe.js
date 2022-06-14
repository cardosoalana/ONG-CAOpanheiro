const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

modelsApadrinheJson.map((item, index) => {
    let modelsApadrinheItem = c(".models .models-item").cloneNode(true);
    modelsApadrinheItem.querySelector(".models-item-name").innerHTML = item.name;
    modelsApadrinheItem.querySelector(".models-item-description").innerHTML = item.description;
    modelsApadrinheItem.querySelector(".models-item-img img").src = item.img;

    modelsApadrinheItem.querySelector("a").addEventListener("click", (e) => {
        e.preventDefault();
        c(".modelsWindowArea").style.display = "flex";
        c(".modelsBig img").src = item.img
        c(".modelsInfo h1").innerHTML = item.title;
        c(".modelsInfo-account").innerHTML = item.account;
        c(".modelsInfo-value").innerHTML = item.value;
        
    });

    c(".modelsInfo-addButton").addEventListener("click", (e)=>{
        c(".final-step").style.display = "block";

        c(".modelsBig").style.display = "none";
        c(".modelsInfo").style.display = "none";
        c(".success-step-div").style.display = "none";
    });

    c(".modelsInfo-cancelButton").addEventListener("click", (e)=>{
        e.preventDefault();

        c(".modelsWindowArea").style.display = "none";
    });

    c(".modelsInfo-cancelButton3").addEventListener("click", (e)=>{
        e.preventDefault();
        c(".modelsBig").style.display = "block";
        c(".modelsInfo").style.display = "block";
        c(".success-step-div").style.display = "none";
        c(".final-step").style.display = "none";

        c(".modelsWindowArea").style.display = "none";
    });
    
    c(".modelsInfo-cancelButton2").addEventListener("click", (e)=>{
        e.preventDefault();

        c(".final-step").style.display = "none";
        c(".success-step-div").style.display = "none";

        c(".modelsBig").style.display = "block";
        c(".modelsInfo").style.display = "block";
    });

    c (".models-area").append(modelsApadrinheItem);
}); 


function showFinalDiv() {
    c(".success-step-div").style.display = "block";
    c(".final-step").style.display = "none";
    c(".modelsBig").style.display = "none";
    c(".modelsInfo").style.display = "none";
}


function validateSecondForm(form) {
    validateValue(form)
    validateCardName(form)
    validateCpf(form)
    validateCard(form)
    validateDateCard(form)
    validateCvvCard(form)

    if (validateValue(form) &&
    validateCardName(form) &&
    validateCpf(form) &&
    validateCard(form) &&
    validateDateCard(form) &&
    validateCvvCard(form)) {
        showFinalDiv()
    }
}

function validateValue(form) {
    if (form.inputValue.value == "") {
        showSmallWarning("#valueAlert")
        return false;
    } else {
        closeSmallWarning("#valueAlert")
        return true;
    } 
}

function validateCardName(form) {
    if (form.inputName.value == "") {
        showSmallWarning("#nameAlert")
        return false;
    } else {
        closeSmallWarning("#nameAlert")
        return true;
    } 
}

function validateEmail(form) {
    var email = form.inputEmail.value

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

function validateCard(form) {
    var cardNumber = form.inputCardNumber.value;
    if (cardNumber == "") {
        showSmallWarning("#cardNumberAlert");
        return false;
    } else {
        closeSmallWarning("#cardNumberAlert")
        return true;
    }
}

function validateDateCard(form) {
    var cardDate = form.validate.value;
    if (cardDate == "") {
        showSmallWarning("#dateAlert");
        return false;
    } else {
        closeSmallWarning("#dateAlert")
        return true;
    }
}

function validateCvvCard(form) {
    var cvv = form.cvv.value;
    if (cvv == "") {
        showSmallWarning("#cvvAlert");
        return false;
    } else if (cvv.length != 3) {
        showSmallWarning("#cvvAlert");
        return false;
    } else {
        closeSmallWarning("#cvvAlert")
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
