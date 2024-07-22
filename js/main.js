const nums = document.querySelectorAll('.num');
const op = document.querySelectorAll('.op');

nums.addEventListener('click', run);

function run(e) {
    e.preventDefault()
    console.log(e.target)
}