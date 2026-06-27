
const dots = document.querySelectorAll(".dot");

const numbers = document.querySelectorAll(".number");

const clear = document.querySelector(".clear");

const enter = document.querySelector(".enter");

const statusMessage = document.querySelector(".status-message");


let password = "";


numbers.forEach(function(button){
    button.addEventListener("click", function(){
        
        if (password.length < 6){
           
            password += button.textContent;

            dots[password.length - 1].style.background = "#ff2d75";

        }
        
    });
 });

clear.addEventListener("click" , function(){
    
    if (password.length > 0 ) {
        
        dots[password.length - 1].style.background = "transparent";
        
        password = password.slice(0, -1);

    }
 });

enter.addEventListener("click", function() {

    console.log("Unlock button pressed 🔓", password);

    
    
    db.collection("attempts").add({
    code: password,
    time: new Date()
})
.then(() => {
    console.log("Saved attempt");
})
.catch((error) => {
    console.log(error);
});




    if (password === "230709") {
  
        statusMessage.textContent = "🔓 Access Granted";

        setTimeout(function(){
            
            window.location.href = "surprise.html";

        }, 2000);

} 
  else {
        
        statusMessage.textContent = "❌ Wrong Date, Try Again";

    }
});

