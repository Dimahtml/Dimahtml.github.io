var buttonClose = document.querySelector(".btn-close");
var modal = document.querySelector(".feedback");
var writeUs = document.querySelector(".write-us");
var feedbackForm = document.querySelector(".feedback-form");
var userName = feedbackForm.querySelector("[name=userName]");
var userEmail = feedbackForm.querySelector("[name=email]");
var userMessage = feedbackForm.querySelector("textarea");

buttonClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	modal.classList.add("modal-no-show");
});

writeUs.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal.classList.remove("modal-no-show");
});
