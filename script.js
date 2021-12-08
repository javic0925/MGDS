window.onscroll = function() {myFunction()};

var navbar = document.getElementById("soundtracks");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var myAudio = document.getElementById("my-audio");

function togglePlay(music)
{
    myAudio.setAttribute('src' , music)
    
};


