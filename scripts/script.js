// Gerar números aleatórios
function generateNumbers() {
    let numbers = [];
    qNumbers = document.getElementById('qNumbers').value;

    if (isNaN(qNumbers)) {
        alert('Por favor, insira um valor numérico!');
    } else if (qNumbers < 10 || qNumbers > 100) {
        alert('Por favor, insira um valor de 10 a 100!');
    } else {

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

        // Numéros Ímpares Crescentes
        _drawIn('creasing-odd',getCreasingOdd(numbers));

        // Numéros Ímpares Crescentes
        _drawIn('increasing-pairs',getIncreasingPairs(numbers));
    }
}

// Filtrar números Ímpares Crescentes
function getCreasingOdd(numbers){
    return numbers.filter(number => number % 2 !== 0 && number !== 0)
        .sort((a, b) => a-b);
}

// Filtrar números Pares Decrescentes
function getIncreasingPairs(numbers){
    return numbers.filter(number => number % 2 == 0 && number !== 0)
        .sort((a, b) => b-a )
}

// Desenhar números nas Div's
function _drawIn(divName, numbers) {
    let div = document.getElementById(`${divName}`);
    div.innerHTML = (numbers !== null ? numbers : null);
}
