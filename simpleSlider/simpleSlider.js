var simpleSlider = document.querySelector("#simpleSlider ul");
var sliderImages = document.querySelectorAll("#simpleSlider ul li img")
var prevSlideButton = document.querySelector(".prevSlideButton");
var nextSlideButton = document.querySelector(".nextSlideButton");
var i = 0;
var nextSlide = function () {
  sliderImages[i].className = '';
  i++;
  if (i >= sliderImages.length) {
    i = 0;
  }
  sliderImages[i].className = 'visibleSlide';
}
var prevSlide = function () {
  sliderImages[i].className = '';
  i--;
  if (i < 0) {
    i = sliderImages.length - 1;
  }
  sliderImages[i].className = 'visibleSlide';
}
setInterval(nextSlide, 3000)
nextSlideButton.onclick = nextSlide;
prevSlideButton.onclick = prevSlide;