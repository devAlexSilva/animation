const btnLogar = document.querySelector('.btn-logar');
const form = document.querySelector('form');
const body = document.querySelector('body');
const amongs = document.querySelector('.among');

const formFall = (action) => {

    //desconstuindo o nodeList dentro do vetor para trabalhar com vetor.

    function validation() {
        action.preventDefault();
        
        const emptyFields = [...document.querySelectorAll('.input-field input')];

        let empty = emptyFields.length;

        for (let i = 0; i < emptyFields.length; i++) {
            if (emptyFields[i].value == '') empty -= 1;
        }

        if (empty == emptyFields.length){ 
            form.classList.add('form-down');
            body.style.overflow = 'hidden';
        }
        else form.classList.add('form-empty');

        return console.log(empty);
    } validation();

    /*FIZ UMA FUNC AUTOEXECUTAVEL PARA ISOLAR, SE EU PRECISAR EM OUTRA PARTE SÓ DROPAR
    E FICOU UM POUCO MAIS EXTENSO DO QUE USANDO forEach MAS ASSIM FICA ESCALAVEL */
}

btnLogar.addEventListener('click', formFall);   //apenas para n submeter de forma automatica


/* coloquei o overflow hidden dentro do evento do form 
pq quando um inicia o outro encerra, então da certo,*/
form.addEventListener('animationend', (event) => {
    
    if (event.animationName == 'down') {
        form.style.display = 'none';
        body.style.overflow = 'visible';
    }

    if (event.animationName == 'emptyField') {
        form.classList.remove('form-empty');
    }

});

function randonization(max, min) {
    let resultado = Math.ceil(Math.random() * (max - min) + min);
    return resultado;
} 

for (let i = 0; i < 10; i++) {
    let li = document.createElement('li');

    
    let size = 70;
    /*let size = randonization(100, 60);*/
    let position = randonization(98, 1);
    let delay = randonization(0.1, 6);
    let time = randonization(15, 10);

    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;

    li.style.left = `${position}%`;

    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${time}s`;
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()},)`;
    
let img;
    switch (randonization(4,0)) {
        case 1:
            img = './tile016.png';
            break;
        case 2:
            img = './tile017.png';
            break;
        case 3:
            img = './tile018.png';
            break;
        case 4:
            img = './tile019.png';
            break;
    
        default:
            break;
    }
    li.style.backgroundImage = `url(${img})`; 

    amongs.appendChild(li);
    console.log(li)

}





