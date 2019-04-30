function plausibleEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

/* It seems that Bootstrap 4 has removed the has-error class and expects the
 * developer to rely on standard HTML5 form validation. Since the assignment
 * criteria specified it, I'm including some validation code here, but I don't
 * expect it to come up in typical use, since HTML5 form validation already
 * catches these same criteria. -MM
 */

function validateForm() {

  var name = document.forms["contact"]["name"].value;
  var email = document.forms["contact"]["email"].value;

  if (!name) {
    console.log("NO NAME");
    return false;
  }

  if (!plausibleEmail(email)) {
    console.log("NO EMAIL");
    return false;
  }

  console.log("Both required fields were filled");

  window.alert("Thank you for your information! Sending to /dev/null and your ISP.");
  return true;
}

