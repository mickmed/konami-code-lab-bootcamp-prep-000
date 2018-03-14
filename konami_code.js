const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  const docBody = document.querySelector('input')
  docBody.addEventListener('keydown', onKeyDownHandler)
  const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  let index = 0;
  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    console.log(key);
    if (key === code[index]) {
      index++;
   
      if (index === code.length) {
        alert("Hurray!");
        index = 0;
      }
    } else {
      index = 0;
    }
  }
}