const checkLength = function(evt) {
    if (phoneField.value.length > 5) {
        button.removeAttribute('disabled');
        y.classList.remove("responsive")
    } else {
        button.setAttribute('disabled', true);
        y.classList.add('responsive');
    }
  }
  
  let y = document.querySelector(".submit");
  y.classList.add('responsive');

  const phoneField = document.querySelector('input[name="phone"]')
  const button = document.querySelector('button[name="submit"]')
  phoneField.addEventListener('keyup', checkLength)

          function done() {
      document.location.replace("../done1/done1.html");
  }