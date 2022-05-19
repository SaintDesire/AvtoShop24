const checkLength = function(evt) {
  if (mailField.value.length > 5 && passwordField.value.length > 5) {
      button.removeAttribute('disabled');
      y.classList.remove("responsive")
  } else {
      button.setAttribute('disabled', true);
      y.classList.add('responsive');
  }
}

let y = document.querySelector(".submit");
y.classList.add('responsive');

const mailField = document.querySelector('input[name="email"]')
const passwordField = document.querySelector('input[name="password"]')
const button = document.querySelector('button')
mailField.addEventListener('keyup', checkLength)
passwordField.addEventListener('keyup', checkLength)

        function done() {
    document.location.replace("../error2/error2.html");
}