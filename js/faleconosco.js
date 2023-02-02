// ---------- VALIDAÇÃO FALE CONOSCO ---------- //
let usernameInputFC = document.getElementById("nome_FC");
let usernameLabelFC = document.querySelector('label[for="nome_FC"]');
let emailInputFC = document.getElementById("email_FC");
let emailLabelFC = document.querySelector('label[for="email_FC"]');
let telefoneInputFC = document.getElementById("telefone_FC");
let telefoneLabelFC = document.querySelector('label[for="telefone_FC"]');
let assuntoFC = document.getElementById("assunto_FC");
let assuntoLabelFC = document.querySelector('label[for="assunto_FC"]');
let commentsFC = document.getElementById("comments_FC");
let commentsLabelFC = document.querySelector('label[for="comments_FC"]');
let usernameHelperFC = document.getElementById("nome_helper_FC");
let emailHelperFC = document.getElementById("email_helper_FC");
let telefoneHelperFC = document.getElementById("telefone_helper_FC");
let assuntoHelperFC = document.getElementById("assunto_helper_FC");
let commentsHelperFC = document.getElementById("comments_helper_FC");
const contact_form_FC = document.getElementById("contact_form_FC");


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
usernameInputFC.addEventListener("blur", (e)=>{
    value = e.target.value;
    if(value.length === 0){
        withoutFill(usernameInputFC, usernameLabelFC)
    } else if(value.length < 3 || value.length > 10){
        errorValue(usernameInputFC, usernameLabelFC)
        usernameHelperFC.innerText = 'Nome deve conter entre 3 e 10 letras'
        usernameHelperFC.classList.add('visible')
    } else {
        correctValue(usernameInputFC, usernameLabelFC)
        usernameHelperFC.classList.remove('visible')
    }
})

//Valida campo Email
emailInputFC.addEventListener("blur", (e)=>{
    value = e.target.value;
    if(value.length === 0){
        withoutFill(emailInputFC, emailLabelFC)
    } else if(value.includes('.com') === false){
        errorValue(emailInputFC, emailLabelFC)
        emailHelperFC.innerText = 'Email inválido!'
        emailHelperFC.classList.add('visible')
    } else if(value.includes('@') === false){
        errorValue(emailInputFC, emailLabelFC)
        emailHelperFC.innerText = 'Email inválido!'
        emailHelperFC.classList.add('visible')
    } else {
        correctValue(emailInputFC, emailLabelFC)
        emailHelperFC.classList.remove('visible')
    }
})

//Limpar todo os campos
function limparForm()
{
  document.getElementById('nome_FC').value = "";
  document.getElementById('email_FC').value = "";
  document.getElementById('telefone_FC').value = "";
  document.getElementById('assunto_FC').value = "";
  document.getElementById('comments_FC').value = "";
}