// Variables
const btn = document.querySelector('button');
const ul = document.querySelector('ul');
let oddNumbers = 1;

// Program
btn.addEventListener('click', function(){
    const li = document.createElement('li');

    li.textContent = oddNumbers;

    if (oddNumbers % 3 == 0){
        li.classList.add('big');
    }

    ul.appendChild(li);
    oddNumbers += 2;
})
