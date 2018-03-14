const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  const docBody = document.querySelector('input')
  docBody.addEventListener('keydown', onKeyDownHandler)
  const alphabet = [65, 66, 67];
  let index = 0;
  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    console.log(key);
    console.log(e.which);
   
    if (key === code[index]) {
      index++;
   
      if (index === alphabet.length) {
        alert("Hurray!");
        index = 0;
      }
    } else {
      index = 0;
    }
  }
}