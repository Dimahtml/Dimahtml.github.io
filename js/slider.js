var sliderButton1 = document.querySelector(".slider-button-1");
var sliderButton2 = document.querySelector(".slider-button-2");
var sliderButton3 = document.querySelector(".slider-button-3");

var slide1 = document.querySelector(".slide-1");
var slide2 = document.querySelector(".slide-2");
var slide3 = document.querySelector(".slide-3");

sliderButton1.addEventListener("click", function(evt) {
	evt.preventDefault();
	slide1.classList.add("features-item-current");
	slide2.classList.remove("features-item-current");
	slide3.classList.remove("features-item-current");
	sliderButton1.classList.add("slider-button-current");
	sliderButton2.classList.remove("slider-button-current");
	sliderButton3.classList.remove("slider-button-current");
});

sliderButton2.addEventListener("click", function(evt) {
	evt.preventDefault();
	slide1.classList.remove("features-item-current");
	slide2.classList.add("features-item-current");
	slide3.classList.remove("features-item-current");
	sliderButton1.classList.remove("slider-button-current");
	sliderButton2.classList.add("slider-button-current");
	sliderButton3.classList.remove("slider-button-current");
});

sliderButton3.addEventListener("click", function(evt) {
	evt.preventDefault();
	slide1.classList.remove("features-item-current");
	slide2.classList.remove("features-item-current");
	slide3.classList.add("features-item-current");
	sliderButton1.classList.remove("slider-button-current");
	sliderButton2.classList.remove("slider-button-current");
	sliderButton3.classList.add("slider-button-current");
});