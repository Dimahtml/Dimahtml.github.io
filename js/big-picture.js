'use strict';
var ESC_KEYCODE = 27;
var sertificatesPreview = document.querySelector('.sertificates__preview');
var sertificatesPreviews = document.querySelectorAll('.sertificates__preview');
var bigPicture = document.querySelector('.big-picture');
var bigPictureImg = document.querySelector('.big-picture__img');

var sertificatesSources = ['img/html_1@600px.jpg', 'img/js_1@600px.jpg', 'img/html_2@600px.jpg'];

// добавление обработчика на один сертификат
var addOneSertificatePreviewHandler = function (miniPicture, source) {
  miniPicture.addEventListener('click', function() {
    bigPicture.classList.remove('hidden');
    bigPictureImg.src = source;
    document.querySelector('#picture-cancel').addEventListener('click', onCancelButtonClick);
    document.addEventListener('keydown', onDocumentEscPress);
  });
};

// добавление обработчиков на каждый из коллекции сертификатов
var addSertificatesPreviewsHandlers = function () {
  for (var i = 0; i < sertificatesPreviews.length; i ++) {
    addOneSertificatePreviewHandler(sertificatesPreviews[i], sertificatesSources[i]);
  }
}

var onCancelButtonClick = function () {
  bigPicture.classList.add('hidden');
  document.querySelector('#picture-cancel').removeEventListener('click', onCancelButtonClick);
  document.removeEventListener('keydown', onDocumentEscPress);
};

var onDocumentEscPress = function (evt) {
  if ((evt.keyCode === ESC_KEYCODE) && (!(window.isFocusedOnField === true))) {
    bigPicture.classList.add('hidden');
    document.querySelector('#picture-cancel').removeEventListener('click', onCancelButtonClick);
    document.removeEventListener('keydown', onDocumentEscPress);
  }
};

addSertificatesPreviewsHandlers();