const alternatives = [
    {text:"", images:"Mi bebe.jpg"},
    {text:"Segura?", images:"Mi bebe.jpg"},
    {text:"100% segura?", images:"Mi bebe.jpg"},
    {text:"Mi bebeeee dale que siii", images:"Mi bebe.jpg"},
    {text:"A cambio de Reese's Ilimitados?", images:"Mi bebe.jpg"},
    {text:"A cambio de tu te de bolitas?", images:"Mi bebe.jpg"},
    {text:"Amooooor", images:"Mi bebe.jpg"},
    {text:"Ya entendi todo", images:"Mi bebe.jpg"},
    {text:"Asi son", images:"Mi bebe.jpg"},
    {text:"Seguro ya tiene planes con otro", images:"Mi bebe.jpg"},
    {text:"yo se que quieres", images:"Mi bebe.jpg"},
    {text:"te estas haciendo la dificil", images:"Mi bebe.jpg"},
    {text:"Estas molestandome verdad?", images:"Mi bebe.jpg"},
    {text:"asi quedamos", images:"Mi bebe.jpg"},
    {text:"Ya no te digo nada", images:"Mi bebe.jpg"}



];
const ohyes = {text:"Yo sabia que te morias de ganas de decirme que si mi bebé.", images:"SIII.jpg"};
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;
function updateDisplay(item) {
    console.log(item);
    cat.src = item.images;
    text.innerHTML = item.text;
}

errorButton.addEventListener('click', () => {
    count = 0;
    updateDisplay(alternatives[count]);
    buttons.forEach(btn => btn.style.display = 'inline-block');
    errorButton.style.display = 'none';
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent === 'Obviooo'){
            updateDisplay(ohyes);
            buttons.forEach(btn => btn.style.display = 'none');
        }
        if (button.textContent === 'NO'){
            count++;
            if(count < alternatives.length){
                updateDisplay(alternatives[count]);
            } else {
                buttons.forEach(btn => btn.style.display = 'none');
                errorButton.style.display = 'inline-block';
            }
        }
    });
});