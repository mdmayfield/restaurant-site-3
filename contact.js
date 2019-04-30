function validateForm() {

  var name = document.forms["contact"]["name"].value;
  var email = document.forms["contact"]["email"].value;
  var phone = document.forms["contact"]["phone"].value

  console.log(name);
  console.log(email);
  console.log(phone);

  return false;
}

