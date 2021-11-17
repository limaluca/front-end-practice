const screens = document.querySelectorAll(".screen");
const btn = document.querySelector(".btn");

btn.addEventListener("click", ()=>{
    screens[1].classList.add("up")
})


