let results = document.getElementById('result')

let counter = document.getElementById('counter');

let initResult = 1;
let clicker = counter.addEventListener("click", ()=> results.textContent = initResult++ + ' Click(s) so far');

