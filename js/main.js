(function() {
  var nav = document.body.querySelector('nav');
  var main = document.querySelector('main');

  // This feels so wrong, but can't use the scroll event due to the CSS parallax wrapper on the entire page
  var timer = setInterval(function() {
    var x = nav.getBoundingClientRect().bottom;
    var y = main.getBoundingClientRect().top;
    if (y <= x) {
      nav.classList.remove('hidden');
    } else {
      nav.classList.add('hidden');
    }
  }, 200);

})();
