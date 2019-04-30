function plausibleEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

/* It seems that Bootstrap 4 has removed the has-error class and expects the
 * developer to rely on standard HTML5 form validation. Since the assignment
 * criteria specified it, I'm including JS validation code here. Ordinarily
 * I would have used input type="email" for the email input, and a "required"
 * attribute in the name and email input elements. -MM
 */

function validateForm() {

  var name = document.forms["contact"]["name"];
  var email = document.forms["contact"]["email"];

  if (!name.value) {
    name.setCustomValidity("Please enter your name.");
    name.onchange = validateForm;
    return false;
  } else {
    name.setCustomValidity("");
  }

  if (!plausibleEmail(email.value)) {
    email.setCustomValidity("Please enter a valid email address.");
    email.onchange = validateForm;
    return false;
  } else {
    email.setCustomValidity("");
  }

  return true;

}

function submitAction() {

  if (validateForm()) {
    window.alert("Thank you for your information! Sending to /dev/null and your ISP.");
    return true;
  }

  return false;
}
