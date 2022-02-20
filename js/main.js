let set = 0;
let cardBody = document.querySelector('.card-body');
let CardButton = document.querySelectorAll('.button-card');
const track = document.querySelector('.carousel-track');
const next = document.querySelector('.next-item');
const prew = document.querySelector('.prew-item');

next.addEventListener('click', function() {
    set = set + 400;
    if (set > 900) {
        set = 0;
    }
    track.style.left = -set + `px`;
});

prew.addEventListener('click', function() {
    set = set - 450;
    if (set < 0) {
        set = 900;
    }
    track.style.left = -set + `px`;
});

for (let i = 0; i < CardButton.length; i++) {
    CardButton[i].addEventListener('click', function(event) {  
        let cardJs = document.querySelector('.cardjs');
        if (cardJs !== null) {
            cardJs.classList.remove('cardjs');
        }
        CardButton[i].parentNode.classList.add('cardjs');
        console.log(CardButton[i].parentNode);
    });
};
