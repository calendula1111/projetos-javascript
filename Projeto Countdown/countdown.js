const dias = document.getElementById('dias')
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')


const dataCountdown = new Date("Jan 6 2023 15:37:25").getTime()

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = dataCountdown - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  dias.innerHTML = days + " :"
  horas.innerHTML = hours + " :"
  minutos.innerHTML = minutes + " :"
  segundos.innerHTML = seconds

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);