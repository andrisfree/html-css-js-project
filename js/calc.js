// ловим события всех кнопок
// функция "пуш в инпут новый символ" для цифр
// функция для математических операций - пушить через пробелы
// функция удалить символ с конца строки по клику
// функция "посчитать и поменять в инпуте на результат, если
// парсинг не вернул ошибку


// btn-number 
// btn-operator 
// btn-delete 
// btn-result

let calcField = document.querySelector('.calc-field');

let btnDelete = document.querySelector('.btn-delete');
let btnResult = document.querySelector('.btn-result');

let btnNumbers = document.querySelectorAll('.btn-number');

let btnOperators = document.querySelectorAll('.btn-operator');

btnDelete.addEventListener('click', deleteSymbol);

btnResult.addEventListener('click', getResult);

// чтобы к элементу из массива прикрепить событие, надо перебрать массив:

btnNumbers.forEach(item => item.addEventListener('click', writeToInput));

btnOperators.forEach(item => item.addEventListener('click', writeToInput));

function writeToInput(event) {
	let symbol = event.target.textContent;
	let input = calcField.value;
	if (event.target.classList.contains('btn-operator')) {
		if (input[input.length - 1] !== ' ' && input.length) {
			input += ` ${symbol} `;
		} else {
			console.log('Введите верный символ');
		}
	} else {
		if (
			(!input.length && symbol === '0') || (input[input.length - 1] !== ' ' && symbol === '0') 
			) {
			console.log('Введите верный символ');
		} else {
			input += symbol;
		}
	} 
	calcField.value = input;
}

function deleteSymbol(event) {
	let input = calcField.value;
	if (input.length) {
		if (input[input.length - 1] === ' ') {
			input = input.slice(0, -3);
		} else {
			input = input.slice(0, -1);
		}
	} else {
		console.log("Отсутствуют символы");
	}
	calcField.value = input;
}

function getResult(event) {
	let input = calcField.value;
	let arrayOfInput = input.split(" ");
	console.log(arrayOfInput);
	let numbersArray = [];
	let operatorsArray = [];
	for (let i = 0; i < arrayOfInput.length; i++) {
		if (!isNaN (Number(arrayOfInput[i]))) {
			numbersArray.push(Number(arrayOfInput[i]));
		} else {
			operatorsArray.push(arrayOfInput[i]);
		}
	}
	console.log(numbersArray);
	console.log(operatorsArray);

}