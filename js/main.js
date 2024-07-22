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

    return ops;
}

function Calculator() {
    this.methods = {
        '+' : (a, b) => a + b,
        '-' : (a, b) => a - b,
        '/' : (a, b) => a / b,
        '*' : (a, b) => a * b
    }

    this.calculate = function(arr) {
        let a = +arr[0];
        let b = +arr[2];
        let opd = arr[1];

        if (!this.methods[opd] || a === NaN || b === NaN || opd === NaN) {
            return NaN;
        }

        return this.methods[opd](a, b)
    }
}