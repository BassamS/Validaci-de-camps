// Login form
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {

  // Remove the white spaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();

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