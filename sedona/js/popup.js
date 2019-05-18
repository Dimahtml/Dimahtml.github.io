		var button = document.querySelector(".search");
		var popup = document.querySelector(".search-form");
		popup.classList.add("modal-no-show");
		button.addEventListener("click", function (evt) {
			evt.preventDefault();
			popup.classList.toggle("modal-no-show");
		});
