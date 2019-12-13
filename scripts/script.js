function validate(number) {

    if (isNaN(number)) {
        alert('Por favor, insira um valor numérico!');
    } else if (number < 10 || number > 100) {
        alert('Por favor, insira um valor de 10 a 100!');
    } else {
        drawIn('random-numbers', number);
        // alert('Números Gerados');
    }
}

// let values = document.getElementById('generator').addEventListener('submit', drawIn);
// let values = document.getElementById('generator');

// function drawIn(divName, numbers) {
//     let numero = document.getElementById('number').value;
//     let div = document.getElementById('random-numbers');

//     for (i = 1; i <= numero; i++) {
//         let valor = Math.round(Math.random() * 100);

//         if (i == (numero)) {
//             div.innerHTML += valor;
//         } else {
//             div.innerHTML += valor + ' - ';
//         }
//     }

//     console.log(div);
// }

function drawIn(divName, numbers) {
    let div = document.getElementById(`${divName}`);

    if (i == (qNumbers)) {
        div.innerHTML += value;
    } else {
        div.innerHTML += value + ' - ';
    }

    console.log(div);
}

function generateNumbers() {
    qNumbers = document.getElementById('qNumbers').value;

    for (i = 1; i <= qNumbers; i++) {
        let numbers = Math.round(Math.random() * 100);
    }
}