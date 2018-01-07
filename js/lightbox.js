(function() {
  var body = document.querySelector('body');
  var lightboxGallery = document.querySelector('.lightbox-gallery');
  var links = lightboxGallery.querySelectorAll('a');
  var lightbox = document.querySelector('.lightbox');
  var imgWrap = lightbox.querySelector('.img-wrap');

  function showLightBox() {
    lightbox.classList.add('show');
    body.classList.add('lightbox-on');
    lightbox.onclick = function() {
        hideLightBox();
    }
  }

  function hideLightBox() {
    lightbox.classList.remove('show');
    body.classList.remove('lightbox-on');
  }

  function showImage(index) {
    var img = links[index].getAttribute('href');
    var el = document.createElement('img');
    el.setAttribute('src', img);
    imgWrap.appendChild(el);
  }

  for (var i = 0; i < links.length; i++) {
    var currLink = links[i];
    (function(i, currLink) {
      currLink.onclick = function(e) {
        e.preventDefault();
        showLightBox();
        showImage(i);
      }
    }(i, currLink));
  }

})();
