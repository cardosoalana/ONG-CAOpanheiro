const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

modelsDonationJson.map((item, index) => {
    let modelsDonationItem = c(".button .button-item").cloneNode(true);
    modelsDonationItem.querySelector(".button-item-name").innerHTML = item.button_name;
    modelsDonationItem.querySelector(".button-item-description").innerHTML = item.button_description;
    modelsDonationItem.querySelector(".button-item img").src = item.button_img;

    modelsDonationItem.querySelector(".button-item-name").addEventListener("click", function() {

        c(".buttonWindowArea").style.display = "flex";
    });

    c(".buttonInfo-cancelButton").addEventListener("click", (e)=>{
        c(".buttonWindowArea").style.display = "none";

    });

    c (".button-area").append(modelsDonationItem);
}); 

function showSecondDiv() {
    c(".first-step-div").style.display = "none";
    c(".final-div").style.display = "none";
    c(".second-step-div").style.display = "block";
}

function showFinalDiv() {
    c(".first-step-div").style.display = "none";
    c(".second-step-div").style.display = "none";
    c(".final-div").style.display = "block";
}

function validateFirstForm(form) {
    validateName(form)
    validateEmail(form)

    if (validateName(form) &&
    validateEmail(form)) {
        showSecondDiv();
    }
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

function validateName(form) {
    if (form.inputName.value == "") {
        showSmallWarning("#invalidNameAlert")
        return false;
    } else {
        closeSmallWarning("#invalidNameAlert")
        return true;
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

function maskReal(real) {
    var formatter = new StringMask('#.##0,00', { reverse: true });
    var result = formatter.apply(real);
    return result
}

function showSmallWarning(warningId) {
    $(warningId).removeClass("d-none");
}

function closeSmallWarning(warningId) {
    $(warningId).addClass("d-none")
}
