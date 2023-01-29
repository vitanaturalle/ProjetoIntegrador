/* ---------- RESPONSIVIDADE JAVASCRIPT ---------- 
//Função javascript que detecta a largura da janela do navegador e salva em uma variável
function getWindowWidth() {
    var windowWidth = window.innerWidth;
    return windowWidth;
}

//Função para adicionar ou remover classes CSS em elementos específicos
var header = document.getElementsByClassName("linha");
var windowWidth = getWindowWidth();
if (windowWidth < 600) {
    header.classList.add("small-header");
} else {
    header.classList.remove("small-header");
}

//Função getWindowWidth que aplica as classes criadas quando a janela for redimensionada.
window.addEventListener("resize", function() {
var windowWidth = getWindowWidth();
if (windowWidth < 600) {
    header.classList.add("small-header");
} else {
    header.classList.remove("small-header");
}
})*/

// ---------- VALIDAÇÃO CADASTRO ---------- //
let usernameInput = document.getElementById("nome_cad");
let usernameLabel = document.querySelector('label[for="nome_cad"]');
let emailInput = document.getElementById("email_cad");
let emailLabel = document.querySelector('label[for="email_cad"]');
let senhaInput = document.getElementById("senha_cad");
let senhaLabel = document.querySelector('label[for="senha_cad"]');
let confirmaSenhaInput = document.getElementById("conf_senha_cad");
let confirmaSenhaLabel = document.querySelector('label[for="conf_senha_cad"]');
let usernameHelper = document.getElementById("nome_cad_helper");
let emailHelper = document.getElementById("email_cad_helper");
let senhaHelper = document.getElementById("senha_cad_helper");
let emailLoginInput = document.getElementById("cad_email_login");
let emailLoginLabel = document.querySelector('label[for="cad_email_login"]');
let senhaLoginInput = document.getElementById("cad_senha_login");
let senhaLoginLabel = document.querySelector('label[for="cad_senha_login"]');
let emailLoginHelper = document.getElementById("cad_email_loginhelper");
let senhaLoginHelper = document.getElementById("cad_senha_loginhelper");
let msgSuccess = document.getElementById("msg-success");
let msgError = document.getElementById("msg-error");
let confirmaSenhaHelper = document.getElementById("conf_senha_cad_helper");
let validarSubmit = document.getElementById("btn-form");
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
let value = '';

form1.addEventListener("submit", (e)=> {
    e.preventDefault()
})
form2.addEventListener("submit", (e)=> {
    e.preventDefault()
})


//Funções com validação comum a todos os campos
function withoutFill(input, label){
    input.classList.add('error')
    label.classList.add('required-popup')
    input.classList.remove('correct')
}

function errorValue(input, label){
    input.classList.add('error')
    label.classList.add('required-popup')
    input.classList.remove('correct')
}

function correctValue(input, label){
    input.classList.remove('error')
    label.classList.remove('required-popup')
    input.classList.add('correct')
}        

//Valida campo Username
usernameInput.addEventListener("blur", (e)=>{
    value = e.target.value;
    if(value.length === 0){
        withoutFill(usernameInput, usernameLabel)
    } else if(value.length < 3 || value.length > 10){
        errorValue(usernameInput, usernameLabel)
        usernameHelper.innerText = 'Nome deve conter entre 3 e 10 letras'
        usernameHelper.classList.add('visible')
    } else {
        correctValue(usernameInput, usernameLabel)
        usernameHelper.classList.remove('visible')
    }
})

//Valida campo Email
emailInput.addEventListener("blur", (e)=>{
    value = e.target.value;
    if(value.length === 0){
        withoutFill(emailInput, emailLabel)
    } else if(value.includes('.com') === false){
        errorValue(emailInput, emailLabel)
        emailHelper.innerText = 'Email inválido!'
        emailHelper.classList.add('visible')
    } else if(value.includes('@') === false){
        errorValue(emailInput, emailLabel)
        emailHelper.innerText = 'Email inválido!'
        emailHelper.classList.add('visible')
    } else {
        correctValue(emailInput, emailLabel)
        emailHelper.classList.remove('visible')
    }
})

//Valida campo Senha
senhaInput.addEventListener("blur", (e)=>{
    value = e.target.value;
    if(value.length === 0){
        withoutFill(senhaInput, senhaLabel)
    } else if(value.length < 6 || value.length > 12){
        errorValue(senhaInput, senhaLabel)
        senhaHelper.innerText = 'Senha inválida! Deve conter entre 6 e 12 caracteres'
        senhaHelper.classList.add('visible')
    } else {
        correctValue(senhaInput, senhaLabel)
        senhaHelper.classList.remove('visible')
    }
})

//Valida campo Confirmar Senha
confirmaSenhaInput.addEventListener("blur", (e)=>{
    value = e.target.value;
    if(value.length === 0){
        withoutFill(confirmaSenhaInput, confirmaSenhaLabel)
    } else if(senhaInput.value != confirmaSenhaInput.value){
        errorValue(confirmaSenhaInput, confirmaSenhaLabel)
        confirmaSenhaHelper.innerText = 'A senha informada está diferente!'
        confirmaSenhaHelper.classList.add('visible')
    } else {
        correctValue(confirmaSenhaInput, confirmaSenhaLabel)
        confirmaSenhaHelper.classList.remove('visible')
    }
})
/*
//Valida campo Email-Login
emailLoginInput.addEventListener("blur", (e)=>{
    value = e.target.value;
    if(value.length === 0){
        withoutFill(emailLoginInput, emailLoginLabel)
    } else if(value.includes('.com') === false){
        errorValue(emailLoginInput, emailLoginLabel)
        emailLoginHelper.innerText = 'Email inválido!'
        emailLoginHelper.classList.add('visible')
    } else if(value.includes('@') === false){
        errorValue(emailLoginInput, emailLoginLabel)
        emailLoginHelper.innerText = 'Email inválido!'
        emailLoginHelper.classList.add('visible')
    } else {
        correctValue(emailLoginInput, emailLoginLabel)
        emailLoginHelper.classList.remove('visible')
    }
})

//Valida campo Senha-Login
senhaLoginInput.addEventListener("blur", (e)=>{
    value = e.target.value;
    if(value.length === 0){
        withoutFill(senhaLoginInput, senhaLoginLabel)
    } else if(value.length < 6 || value.length > 12){
        errorValue(senhaLoginInput, senhaLoginLabel)
        senhaLoginHelper.innerText = 'Senha inválida! Deve conter entre 6 e 12 caracteres'
        senhaLoginHelper.classList.add('visible')
    } else {
        correctValue(senhaLoginInput, senhaLoginLabel)
        senhaLoginHelper.classList.remove('visible')
    }
})
*/

form2.addEventListener("submit", (e)=> {
    alert("FORMULÁRIO ENVIADO COM SUCESSO!")
    //Atualiza a página após envio dos dados
    location.reload()
})

