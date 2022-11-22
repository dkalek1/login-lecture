'use strict';

const id = document.querySelector('#id'),
  psword = document.querySelector('#password'),
  name = document.querySelector('#name'),
  confirmPsword = document.querySelector('#confirm-password'),
  registerBtn = document.querySelector('#button');

registerBtn.addEventListener('click', register);

function register() {
  const req = {
    id: id.value,
    psword: psword.value,
    name: name.value,
    confirmPsword: confirmPsword.value,
  };

  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      if (res.success) {
        location.href = '/login';
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error('회원가입 중 에러 발생'));
    });
}
