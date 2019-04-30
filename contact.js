function validateForm() {

  var name = document.forms["contact"]["name"].value;
  var email = document.forms["contact"]["email"].value;
  var phone = document.forms["contact"]["phone"].value

  return false;
}






/* clearErrors();
  var num1 = document.forms["numberFun"]["num1"].value;
  var num2 = document.forms["numberFun"]["num2"].value;
  if (num1 == "" || isNaN(num1)) {
    alert("Num1 must be filled in with a number.");
    document.forms["numberFun"]["num1"]
    .parentElement.className = "form-group has-error";
    document.forms["numberFun"]["num1"].focus();
    return false;
  }
  if (num2 == "" || isNaN(num1)) {
    alert("Num2 must be filled in with a number.");
    document.forms["numberFun"]["num2"]
    .parentElement.className = "form-group has-error";
    document.forms["numberFun"]["num2"].focus();
    return false;
  }
  document.getElementById("results").style.display = "block";
  document.getElementById("submitButton").innerText = "Recalculate";
  /* because + could be interpreted as concatenation instead of addition 
  document.getElementById("addResult").innerText = Number(num1) + Number(num2);
  document.getElementById("subtractResult").innerText = num1 - num2;
  document.getElementById("multiplyResult").innerText = num1 * num2;
  document.getElementById("divideResult").innerText = num1 / num2;
  /* return false so form doesn't submit and we lose the results */

