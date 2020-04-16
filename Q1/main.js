// JavaScript Document

let submitButton = document.querySelector('input[type="submit"]');
let body = document.querySelector('body');

submitButton.addEventListener('click', function(e) {
  let personName = document.querySelector('input[type="text"]');
  let main = document.querySelector('main');
  let para = document.createElement('p');
  para.innerHTML = 'Hey there ' + personName + '! Thanks for stopping by!';
  main.appendChild(para);
  para.appendChild(personName);
  body.setAttribute('class','meow');
  console.log('=^..^=');
  e.preventDefault();
});
