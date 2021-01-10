var img= document.getElementsByClassName("myImg")[0];
var modal=document.getElementById("myModal");
var slideIndex=1;
var slides = document.getElementsByClassName("mySlides");
function plusSlides(n){
    showSlides(slideIndex +=n);
}

function func() {
    modal.style.display="block";
    showSlides(slideIndex);
}

function showSlides(n){
    var i;
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block"; 
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}



var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load",function() {
    displaySlides(slideIndex);
    myTimer = setInterval(function(){addSlides(1)}, 4000);
  
    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('subright')[0];
  
    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
  
    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function addSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    displaySlides(slideIndex -= 1);
  } else {
   displaySlides(slideIndex += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  
  if (n === -1){
    myTimer = setInterval(function(){addSlides(n + 2)}, 4000);
  } else {
    myTimer = setInterval(function(){addSlides(n + 1)}, 4000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){addSlides(n + 1)}, 4000);
  displaySlides(slideIndex = n);
}

function displaySlides(n){
  var i;
  var slides = document.getElementsByClassName("myfade");
  var dots = document.getElementsByClassName("circle");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

pause = () => {
  clearInterval(myTimer);
}

resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){addSlides(slideIndex)}, 4000);
}

