let offset = 0;
const track = document.querySelector('.carousel-track');
const next = document.querySelector('.next-item');
const prew = document.querySelector('.prew-item');

next.addEventListener('click', function() {
    offset = offset + 400;
    if (offset > 900) {
        offset = 0;
    }
    track.style.left = -offset + `px`;
});

prew.addEventListener('click', function() {
    offset = offset - 450;
    if (offset < 0) {
        offset = 900;
    }
    track.style.left = -offset + `px`;
});


let cardBody = document.querySelector('.card-body');

let buttonCard = document.querySelectorAll('.button-card');

console.log(buttonCard);

for (let i = 0; i < buttonCard.length; i++) {
    buttonCard[i].addEventListener('click', function(event) {  
        let cardJs = document.querySelector('.cardjs');
        if (cardJs !== null) {
            cardJs.classList.remove('cardjs');
        }
        buttonCard[i].parentNode.classList.add('cardjs');
        console.log(buttonCard[i].parentNode);
    });
};