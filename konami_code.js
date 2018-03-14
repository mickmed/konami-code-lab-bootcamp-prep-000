const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  const docBody = document.querySelector('input')
  docBody.addEventListener('keydown', onKeyDownHandler)
  const kcode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  console.log(code)
  let index = 0;
  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    console.log(key);
    if (key === kcode[index]) {
      index++;
   
      if (index === kcode.length) {
        alert("Hurray!");
        index = 0;
      }
    } else {
      index = 0;
    }
  }
}