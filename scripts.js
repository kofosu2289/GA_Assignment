let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

window.onscroll = function() {myFunction()};

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

let box = document.getElementById("span");
let contents = box.innerHTML;

function success() { 
  box.innerHTML = "";
  box.innerHTML += "Thanks! I'll get back to you as soon as I can!!";
}