const textElement = document.querySelector(".typing-text");

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

const letter = `Hey!!!

 Advance Happy Birthday girl 💖

I made this for you because I wanted to make your day a little more special.

I don't know why you mean to me so much. but you mean to me a lot i just want to enjoy the with you.

I dont know you like me or not but when i talk to you it feels like just being in another world, some of you text make me realise that i am just a frnd, some hurts also but have no right to say anithing [please do not go for fundamental rights 😶].

still here i am texting you all day to get a dry reply at the end . I met you in class 8th starded texting you in class 9th and since here we are after 3 years still texting you. still trying, but at the end its on you.

So turning 17 now have a great life,
archive everything you want to in your life.
May god bless you. have many more to say but i can not. 


Enjoy ✨ Beautiful

to guiter se achha sa gana play karke vdo bana ke bhejdo mere liye....

ata last time lekhila time re guitar wala lekhithili ignore 

abe patheibar nathila but han pare pathieli bhi kichi habani khusi ta habuni tu dkehiki same reachtion rahiba toro so abe dekhide.

From one,
Passing cloud..☁️

THANK YOU`;



let index = 0;

function typeLetter() {

    if (index < letter.length) {

        textElement.textContent += letter.charAt(index);

        index++;

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });

        setTimeout(typeLetter, 86);
    }
}

typeLetter();
musicBtn.addEventListener("click", function(){
    music.play();
    musicBtn.style.display = "none";
});