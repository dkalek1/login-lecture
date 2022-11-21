'use strict';

const id = document.querySelector('#id'),
  psword = document.querySelector('#password'),
  loginBtn = document.querySelector('button');

loginBtn.addEventListener('click', login);

function login() {
  const req = {
    id: id.value,
    psword: psword.value,
  };
  console.log(req);

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    boby: JSON.stringify(req),
  });
}
