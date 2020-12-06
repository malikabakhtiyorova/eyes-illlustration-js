function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

var eyesAnimation = debounce(function (evt) {

  if (window.scrollY >= 62) {
    document.querySelector('.wrapper').classList.remove('eyes-downing', 'downed');
    document.querySelector('.wrapper').classList.add('eyes-up');
  }
  else if (window.scrollY < 60 && window.scrollY > 0) {
    document.querySelector('.wrapper').classList.remove('downed');
    document.querySelector('.wrapper').classList.add('eyes-downing');
  }

  else {
    document.querySelector('.wrapper').classList.remove('eyes-up', 'eyes-downing');
    document.querySelector('.wrapper').classList.add('downed');
  }
}, 100);

window.addEventListener('scroll', eyesAnimation);

