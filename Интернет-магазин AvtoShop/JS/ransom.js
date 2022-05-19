const checkLength = function(evt) {
    if (markField.value.length > 1 && modelField.value.length > 1 && yearField.value.length > 3) {
        button.removeAttribute('disabled');
        y.classList.remove("responsive")
    } else {
        button.setAttribute('disabled', true);
        y.classList.add('responsive');
    }
  }
  
  let y = document.querySelector(".submit");
  y.classList.add('responsive');

  const markField = document.querySelector('input[name="mark"]')
  const modelField = document.querySelector('input[name="model"]')
  const yearField = document.querySelector('input[name="year"]')
  const button = document.querySelector('button[name="submit"]')
  markField.addEventListener('keyup', checkLength)
  modelField.addEventListener('keyup', checkLength)
  yearField.addEventListener('keyup', checkLength)

          function done() {
      document.location.replace("../done1/done1.html");
  }