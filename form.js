'use Strict';

const personName = document.getElementById('name');
const Email = document.getElementById('Email');
const password = document.getElementById('password');
const secondPass = document.querySelector('#confirmPassword');
const checkbox = document.getElementById('checkbox');
const submitBtn = document.querySelector('.submitBtn');
const warnMessage1 = document.querySelector('.warnmessage1');
const warnMessage2 = document.querySelector('.warnmessage2');
const warnMessage3 = document.querySelector('.warnmessage3');
const mailEnding = '@gmail.com';

// Name
personName.onfocus = function () {
  personName.style.borderBlockColor = 'blue';
};
personName.onblur = function () {
  personName.style.borderBlockColor = '';
};
personName.onkeyup = function () {
  
  verifyName();
};

function verifyName() {
  if (personName.value === '') {
    warnMessage1.classList.remove('hidden');
  } else {
    warnMessage1.classList.add('hidden');
    personName.style.borderBlockColor = 'red';
  }
}

// Email validation
function mailValid() {
  Email.onfocus = function () {
    Email.style.borderBlockColor = 'blue';
  };
  Email.onblur = function () {
    Email.style.borderBlockColor = '';
    warnMessage2.classList.add('hidden');
  };
  Email.onkeyup = function () {
    Emailvalidate();
  };
}
function Emailvalidate() {
  warnMessage2.classList.remove('hidden');
  if (Email.value.endsWith(mailEnding)) {
    warnMessage2.classList.add('hidden');
    Email.style.borderBlockColor = 'blue';
  } else {
    warnMessage2.classList.remove('hidden');
    Email.style.borderBlockColor = 'red';
  }
}
mailValid();

// Password checks
function passwordCheck() {
  password.onfocus = function () {
    password.style.borderBlockColor = 'blue';
  };
  password.onblur = function () {
    password.style.borderBlockColor = '';
  };
  password.onkeyup = function () {
    if (password.value.length < 8) {
      warnMessage3.classList.remove('hidden');
    } else {
      warnMessage3.classList.add('hidden');
    }
  };

  checkbox.addEventListener('click', event => {
    if (password.type === 'password') {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
  });
}
passwordCheck();

// ConfirmPassword
secondPass.onfocus = function () {
  secondPass.style.borderBlockColor = 'blue';
};
secondPass.onblur = function () {
  secondPass.style.borderBlockColor = '';
};

// Submit
submitBtn.addEventListener('click', event => {
  Emailvalidate();
 
  verifyName();

  if (
    !personName.value &&
    !Email.value &&
    !password.value &&
    !secondPass.value
  ) {
    alert('hehhe sodiki');
  } else if (password.value !== secondPass.value || password.value.length < 8) {
    alert('Invalid password confirmation');
  } else {
    alert('Sign up successful 🙏👏');
  }
  event.preventDefault();
});
