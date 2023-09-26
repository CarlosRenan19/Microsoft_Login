const Input = document.getElementById('email');
const Button = document.getElementById('botao');

var EmailValidInput = false;
var EmailValid = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;



Button.addEventListener('click', (e) => {


    if (Input.value.length === 0) {
        document.getElementById('alert').innerHTML = "Insira um endereço de email, número de telefone ou nome Skype válidos.";
        document.getElementById('alert').style.color = "red";
        Input.style.borderBottom = "1px solid red";
    }

    if (EmailValidInput === true) {
        location.href = 'https://www.xbox.com/PT-BR';
    }

    e.preventDefault();
})

Input.addEventListener('keyup', () => {

    if (Input.value.match(EmailValid)) {
        document.getElementById('alert').innerHTML = "";
        document.getElementById('alert').style.color = "";
        Input.style.borderBottom = "1px solid rgba(0, 0, 0, 0.432)";
        EmailValidInput = true;
    } else {
        document.getElementById('alert').innerHTML = "Insira um endereço de email, número de telefone ou nome Skype válidos.";
        document.getElementById('alert').style.color = "red";
        Input.style.borderBottom = "1px solid red";
        EmailValidInput = false;
    }
})

function menu() {
    document.querySelector('.details').classList.toggle('active');
}

function fechar() {
    document.querySelector('.details').classList.remove('active');
}