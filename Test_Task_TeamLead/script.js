function scrollToOrder() {
  document.querySelector('#order-form').scrollIntoView({ behavior: 'smooth' });
}

//Таймер обратного отсчета на 30 минут
function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
  let thirtyMinutes = 60 * 30,
      display = document.querySelector('#timer');
  startTimer(thirtyMinutes, display);
};

function isNumberKey(evt) {
  let charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
  }
  return true;
}

$(document).ready(function(){
  $('.reviews__carousel').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
  });

  $('.order-form__input').on('focus', function() {
      $(this).siblings('.order-form__hint').fadeIn();
  });

  $('.order-form__input').on('blur', function() {
      $(this).siblings('.order-form__hint').fadeOut();
  });
});