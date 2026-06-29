const envelope = document.querySelector(".envelope");

const letter = document.querySelector(".letter");

const title = document.querySelector(".title");

const message = document.querySelector(".message");

const goButton = document.querySelector(".go-button");

const heart = document.createElement("div");

envelope.addEventListener("click", function(){
    
    envelope.classList.add("open");

    title.classList.add("hide");

    message.classList.add("hide");

    setTimeout(function(){
        letter.classList.add("show");
    }, 500);
});

goButton.addEventListener("click", function(){
    
    document.body.style.opacity = "0";

setTimeout(function(){

    window.location.href = "letter.html";
}, 800);
});
setInterval(() => {

    

    heart.classList.add("heart");

    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}, 700);

