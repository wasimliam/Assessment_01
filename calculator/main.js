
function Calculate() {
  let first = parseFloat(document.getElementById('selector1').value);
  let sec = parseFloat(document.getElementById('selector2').value);
  let op = document.getElementById('mathValue').value;
  let result;

  if (document.getElementById("selector1").value.trim() == "") {
    alert("Please Enter First Number!");
    document.getElementById("selector1").focus();
    return false;
  }

  if (document.getElementById("selector2").value.trim() == "") {
    alert("Please Enter Second Number!");
    document.getElementById("selector2").focus();
    return false;
  }

  if (op == '+') {
    result = first + sec;
  } else if (op == '-') {
    result = first - sec;
  } else if (op == '*') {
    result = first * sec;
    op = "x"
  } else if (op == '/') {
    result = first / sec;
    op = "÷";
  }

  document.getElementById('result').innerHTML = `${first} ${op} ${sec} = ${result}`;
}


function Reset()
{
  document.querySelector('#selector1').value = '';
  document.querySelector('#mathValue').value = '0';
  document.querySelector('#selector2').value = '';
  document.querySelector('#result').innerHTML = '';

}
