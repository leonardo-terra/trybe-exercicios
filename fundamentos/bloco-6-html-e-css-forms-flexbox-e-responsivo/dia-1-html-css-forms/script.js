let stateOptions = [
	'AC',
	'AL',
	'AM',
	'AP',
	'BA',
	'CE',
	'DF',
	'ES',
	'GO',
	'MA',
	'MG',
	'MS',
	'MT',
	'PA',
	'PB',
	'PE',
	'PI',
	'PR',
	'RJ',
	'RN',
	'RO',
	'RR',
	'RS',
	'SC',
	'SE',
	'SP',
	'TO',
];

const optionList = document.querySelector('#lista-de-estados');

for (let i = 0; i < stateOptions.length; i++) {
	const newElement = document.createElement('option');
	newElement.innerText = stateOptions[i];
	newElement.value = stateOptions[i];
	optionList.appendChild(newElement);
}
console.log(optionList);
