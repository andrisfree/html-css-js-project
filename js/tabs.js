let navTabs = document.querySelector('.nav-tabs');
let tabs = navTabs.querySelectorAll('.nav-link');
let sections = document.querySelectorAll('.container');
console.log(sections);

let tabSwitch = function(event) {
	if (event.target.classList.contains('nav-tabs')) {
		return false;
	}

	let tab;
	if (event.target.classList.contains('nav-item')) {
		tab = event.target.querySelector('.nav-link');
	} else {
		tab = event.target
	}
	chooseClass(tabs, tab, 'active'); // смена активного таба
	
	let section;
	sections.forEach(item => {
		if (item.dataset.tab === tab.dataset.tab) {
			section = item;
		}
	})

	chooseClass(sections, section, 'd-none', true);
};

// функция принимает коллекцию элементов (массив), целевой элемент, класс
// функция обходит массив, удаляя у всех элементов класс
// функция добавляет целевому элементу класс

let chooseClass = function(elements, targetElem, classElem, inverse) {
	if (inverse) {
		console.log(targetElem);
		elements.forEach(elem => elem.classList.add(classElem))
		targetElem.classList.remove(classElem);
	} else {
		elements.forEach(elem => elem.classList.remove(classElem))
		targetElem.classList.add(classElem);
	}

};


navTabs.addEventListener('click', tabSwitch);
