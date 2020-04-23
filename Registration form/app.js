// Login form
let form = document.forms['vform']['form'];
let username = document.forms['vform']['username'];
let email = document.forms['vform']['email'];
let password = document.forms['vform']['password'];
let password2 = document.forms['vform']['password2'];

function checkInputs() {

  // Remove the white spaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  // Validating username
  if (usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
  } else if (username.value.length < 5) {
    setErrorFor(username, 'Username should be greater than 5 letters');
  } else {
    setSuccessFor(username);
  }

  // Validating email
  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email);
  }

  // Validating password
  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else {
    setSuccessFor(password);
  }

  // Validating password matches
  if (password2Value === '') {
    setErrorFor(password2, 'Password2 cannot be blank');
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, 'Passwords does not match');
  } else {
    setSuccessFor(password2);
  }
}

// Error function
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-group error';
  small.innerText = message;
}

// Success function
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-group success';
}

// validate email
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}