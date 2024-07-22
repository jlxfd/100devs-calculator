const op = document.getElementsByClassName('op');

Array.from(op).forEach(x => x.addEventListener('click', checkOp));

let ops = []
let n = '';

function checkOp(e) {
    // console.log(e.target.innerText);

    if (e.target.classList.contains('num')) {
        n += e.target.innerText;
    } else {
        ops.push(n);
        n = '';
        ops.push(e.target.innerText)
    }

    console.log(ops)
}
