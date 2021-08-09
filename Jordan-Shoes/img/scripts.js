const sr = ScrollReveal({
    origin: 'left',
    distance: '200px',
    duration: 2000,
    reset: false
});

ScrollReveal().reveal('.shoe', { delay: 50 });
ScrollReveal().reveal('.discount-popup', { delay: 1000 });
ScrollReveal().reveal('.infos p', { delay: 1000 });
ScrollReveal().reveal('footer', { delay: 50 });


//  TYPING EFFECT
const typedString = document.getElementById("typed")
console.log(typedString.innerText)
let letterIndex = 1;
let typingSpeed = 30;
let typedText = "O tênis Jordan é o fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan."



setTimeout(() => {
    writeText(typedText)
}, 2000);

function writeText(text) {
    typedString.innerText = text.slice(0, letterIndex);
    letterIndex++

    if (letterIndex > text.length) {
        letterIndex = 1;
        return
    }

    setTimeout(() => {
        writeText(text)
    }, typingSpeed);

}



