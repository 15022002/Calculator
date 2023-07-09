alert("Click the first operand, then the operator and finally the second operand(for eg. 236+144) and then click equal to(=) for the answer.Only one operation could be done at a time(2+3+4 is not allowed only 2 operand and 1 operator at a time i.e. 2+3 and then you can add the answer with 4).Hope You Enjoy Calculating 😁");
var display = "";
var btnPressed;
var operator;
var num1;
var num2;
var index;

$(".btn").click(function(event) {
  btnPressed = event.target.innerHTML;

  if (btnPressed === '=') {
    num2 = parseFloat(display.substring(index + 1));
    if (operator === '+') {
      var ans = add(num1, num2);
      display = "";
      display += ans;
    } else if (operator === '-') {
      var ans = subtract(num1, num2);
      display = "";
      display += ans;
    } else if (operator === '*') {
      var ans = multiply(num1, num2);
      display = "";
      display += ans;
    } else if (operator === '/') {
      var ans = divide(num1, num2);
      display = "";
      display += ans;
    } else if (operator === '%') {
      var ans = mod(num1, num2);
      display = "";
      display += ans;
    }
  } else if (btnPressed === 'CE') {
    display = display.substring(0, display.length - 1);
  } else if (btnPressed === 'AC') {
    display = "";
  } else if (btnPressed === '+') {
    num1 = parseFloat(display);
    display += btnPressed;
    operator = btnPressed;
    index = display.indexOf('+');
  } else if (btnPressed === '-') {
    num1 = parseFloat(display);
    display += btnPressed;
    operator = btnPressed;
    index = display.indexOf('-');
  } else if (btnPressed === '*') {
    num1 = parseFloat(display);
    display += btnPressed;
    operator = btnPressed;
    index = display.indexOf('*');
  } else if (btnPressed === '/') {
    num1 = parseFloat(display);
    display += btnPressed;
    operator = btnPressed;
    index = display.indexOf('/');
  } else if (btnPressed === '%') {
    num1 = parseFloat(display);
    display += btnPressed;
    operator = btnPressed;
    index = display.indexOf('%');
  } else {
    display += btnPressed;
  }


  document.querySelector("input").value = display;

});

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function mod(num1, num2) {
  return num1 % num2;
}
