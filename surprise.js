const envelope = document.querySelector(".envelope");

const letter = document.querySelector(".letter");

const title = document.querySelector(".title");

const message = document.querySelector(".message");

const goButton = document.querySelector(".go-button");


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
