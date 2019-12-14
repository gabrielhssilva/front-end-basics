function validate(number) {

    if (isNaN(number)) {
        alert('Por favor, insira um valor numérico!');
    } else if (number < 10 || number > 100) {
        alert('Por favor, insira um valor de 10 a 100!');
    } else {
        generateNumbers();
    }
}

// Desenhar números nas Div's
function _drawIn(divName, numbers) {
    let div = document.getElementById(`${divName}`);
    div.innerHTML = numbers;
    console.log('Div do Draw:' + numbers);
}


// Gerar números aleatórios
function generateNumbers(number) {

    if (isNaN(number)) {
        alert('Por favor, insira um valor numérico!');
    } else if (number < 10 || number > 100) {
        alert('Por favor, insira um valor de 10 a 100!');
    } else {

        let numbers = [];
        qNumbers = document.getElementById('qNumbers').value;

        for (i = 0; i < qNumbers; i++) {
            numbers[i] = Math.round(Math.random() * 100);
        }

        // Números aleatórios
        let randomNumbers = numbers;
        _drawIn('random-numbers', randomNumbers);

        // Números Crescentes
        let increasingNumbers = numbers.sort((a, b) => { return a - b });
        _drawIn('increasing-numbers', increasingNumbers);

        // Números Decrescentes
        let decreasingNumbers = numbers.sort((a, b) => { return b - a });
        _drawIn('decreasing-numbers', decreasingNumbers);

    }


}