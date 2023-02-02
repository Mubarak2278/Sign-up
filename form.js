'use Strict';
const form = document.querySelector('#signup');
const nameOne = document.getElementById('name');
const Email = document.getElementById('Email');
const password = document.getElementById('password');
const secondPass = document.querySelector('#confirmPassword');
const showPassword = document.getElementById('eyes');
const submitBtn = document.querySelector('.submitBtn');
const warnMessage1 = document.querySelector('.warnmessage1');
const warnMessage2 = document.querySelector('.warnmessage2');
const warnMessage3 = document.querySelector('#message');
const letters = document.getElementById('letter');
const capital = document.getElementById('capital');
const number = document.getElementById('number');
const char = document.getElementById('length');
// const mailEnding1 = '@gmail.com';
// const mailEnding2 = '@gyahoo.com';
// const mailEnding3 = '@outlook.com';

const viewResult = document.querySelector('.display-result');

// NAME

nameOne.onfocus = function () {
  warnMessage1.classList.add('hidden');
  nameOne.style.border = '';
};

// nameOne.onfocus = function () {
//   warnMessage1.classList.add('hidden');
//   nameOne.style.border = '';
// };

nameOne.onblur = function () {
  warnMessage1.classList.add('hidden');
};

// EMAIL
Email.onfocus = function () {
  warnMessage2.classList.add('hidden');
  Email.style.border = '';
};
Email.onblur = function () {
  warnMessage2.classList.add('hidden');
};

// PASSWORD VALIDATION

password.onfocus = function () {
  warnMessage3.style.display = 'block';
};
password.onblur = function () {
  warnMessage3.style.display = 'none';
};
// checking password
function checkPassword() {
  // Check capital letter
  const upperCase = /[A-Z]/g;
  if (password.value.match(upperCase)) {
    capital.style.color = 'green';
  } else {
    capital.style.color = 'red';
  }
  //check small letter
  const lowerCase = /[a-z]/g;
  if (password.value.match(lowerCase)) {
    letters.style.color = 'green';
  } else {
    letters.style.color = 'red';
  }
  // check number
  const numbers = /[0-9]/g;
  if (password.value.match(numbers)) {
    number.style.color = 'green';
  } else {
    number.style.color = 'red';
  }
  // password length
  if (password.value.length >= 8) {
    char.style.color = 'green';
  } else {
    char.style.color = 'red';
    warnMessage3.style.display = 'block';
  }
  return false;
}

password.onkeyup = function () {
  warnMessage3.style.display = 'block';
  checkPassword();
};
// Show Password
let state = false;
showPassword.addEventListener('click', function () {
  if (state) {
    password.type = 'text';
    showPassword.style.color = '#7a797e';
  } else {
    password.type = 'password';
    showPassword.style.color = 'rgb(56, 90, 238)';
  }
  state = !state;
  // if (password.type === 'password') {
  //   password.type = 'text';
  //   state = false;
  // } else {
  //   password.type = 'password';
  //   state = true;
  //   }
});
// CONFIRM PASSWORD
secondPass.onfocus = function () {
  secondPass.style.border = '';
};
function confirmPassword() {
  if (password.value !== secondPass.value) {
    // alert('password mismatch');
    secondPass.style.border = '2px solid red';
  } else if (password.value.length < 8) {
    warnMessage3.style.display = 'block';
  }
}

// SUBMITTING FORM
warnMessage3.style.display = 'none';
submitBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    Email.value.endsWith('@gmail.com') &&
    nameOne !== '' &&
    password.value.length > 8 &&
    password.value === secondPass.value
  ) {
    const func = () => {
      form.submit();
      console.log('ok');
    };

    setTimeout(func, 3 * 1000);
    submitBtn.classList.add('hidden2');
    // window.location.assign('result.html');

    console.log(nameOne.value);
  } else if (nameOne.value === '') {
    nameOne.style.border = '2px solid red';
    warnMessage1.classList.remove('hidden');
  } else if (!Email.value.endsWith('@gmail.com') || Email.value === '') {
    warnMessage2.classList.remove('hidden');
    Email.style.border = '2px solid red';
  }
  confirmPassword();
});
