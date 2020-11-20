function buttonPlus() {
  let firstNumber = parseInt(document.getElementById('first').value)
  let secondNumber = parseInt(document.getElementById('second').value)

  let result = firstNumber + secondNumber
  document.querySelector("p").innerHTML=result
}

function buttonMinus() {
  let firstNumber = parseInt(document.getElementById('first').value)
  let secondNumber = parseInt(document.getElementById('second').value)

  let result = firstNumber - secondNumber
  document.querySelector("p").innerHTML=result
}

function buttonMultiply() {
  let firstNumber = parseInt(document.getElementById('first').value)
  let secondNumber = parseInt(document.getElementById('second').value)

  let result = firstNumber * secondNumber
  document.querySelector("p").innerHTML=result
}

function buttonDivide() {
  let firstNumber = parseInt(document.getElementById('first').value)
  let secondNumber = parseInt(document.getElementById('second').value)

  let result = firstNumber / secondNumber
  document.querySelector("p").innerHTML=result
}