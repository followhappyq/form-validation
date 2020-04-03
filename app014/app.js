const validation = () => {
  /* DOM element START */
  const name = document.querySelector("#contact-us-form-name").value;
  const subject = document.querySelector("#contact-us-form-subject").value;
  const phone = document.querySelector("#contact-us-form-phone").value;
  const email = document.querySelector("#contact-us-form-email").value;
  const message = document.querySelector("#contact-us-form-message").value;
  const errorMessage = document.querySelector(
    ".contact-us-form .error-message"
  );
  /* DOM elemt END */

  let text = "";
  errorMessage.style.padding = "10px";

  if (name.length < 3 && name != null) {
    text = "Please Enter Valid Name";
    errorMessage.textContent = text;
    return false;
  }
  if (subject.length < 10 && subject != null) {
    text = "Please Enter Correct Subject";
    errorMessage.textContent = text;
    return false;
  }
  if (isNaN(phone) || phone.length != 10) {
    text = "Please Enter Phone Number";
    errorMessage.textContent = text;
    return false;
  }
  if (validateEmail(email)) {
    text = "Please Enter Valid Email";
    errorMessage.textContent = text;
    return false;
  }
  if (message.length < 10) {
    text = "Please Enter Valid Message";
    errorMessage.textContent = text;
    return false;
  }
  return true;
};

const validateEmail = inputText => {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailformat)) {
    return false;
  }
  return true;
};
