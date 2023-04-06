var shoeCountText = document.querySelector("#shoe-count");
var altraBtn = document.querySelector("#altra-btn");
var hokaBtn = document.querySelector("#hoka-btn");
var brooksBtn = document.querySelector("#brooks-btn");
var asicsBtn = document.querySelector("#asics-btn");

var count = 0;

function addToCart () {
  count = count + 1;
  
  if (count === 1) {
    shoeCountText.textContent = "1 item"
  } else {
    shoeCountText.textContent = count + " items"
  }    
}

altraBtn.addEventListener("click", addToCart);
hokaBtn.addEventListener("click", addToCart);
brooksBtn.addEventListener("click", addToCart);
asicsBtn.addEventListener("click", addToCart);

var signUpForm = document.querySelector(".email-sign-up");
var emailInput = document.querySelector("input");
var signUpBtn = document.querySelector("#sign-up");
var section = document.querySelector("section");


function emailSubmitHandler() {
  var confirmationMsg = document.createElement("p");
  confirmationMsg.textContent = "Thank you for subscribing! A confirmation email was sent to  " + emailInput.value;
  signUpBtn.remove();
  section.appendChild(confirmationMsg);
}

signUpBtn.addEventListener("click", emailSubmitHandler);