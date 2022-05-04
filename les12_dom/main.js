// available HTMLELements

console.log(document);
console.log(document.body);
console.log(document.head);
console.log(document.documentElement);

// Traversing the DOM
// children

console.log(document.body.children); // Enkel HTMLElements
console.log(document.body.childNodes);

console.log(document.body.firstElementChild); // Enkel HTMLElements
console.log(document.body.firstChild);

console.log(document.body.lastElementChild); // Enkel HTMLElements
console.log(document.body.lastChild);

let middleP = document.body.firstElementChild.firstElementChild.children[1];

console.log(middleP);

// Siblings
console.log(middleP.nextElementSibling); // Enkel HTMLElements
console.log(middleP.nextSibling);

console.log(middleP.previousElementSibling); // Enkel HTMLElements
console.log(middleP.previousSibling);

// Parent
console.log(middleP.parentElement); // Enkel HTMLElements
console.log(middleP.parentNode);

// Searching
// getElementById
console.log(document.getElementById('last-p'));

// getElementsByClassName
console.log(document.getElementsByClassName('red-p'));

// getElementsByTagName
console.log(document.getElementsByTagName('p'));

// querySelector & querySelectorAll

console.log(document.querySelector('.red-p'));
console.log(document.querySelectorAll('.red-p'));

let innerDiv = document.getElementById('inner-div');
console.log(innerDiv.querySelectorAll(`p:nth-child(odd)`));
console.log(document.querySelectorAll(`#inner-div p:nth-child(odd)`));

// matches
console.log(middleP.matches('p.some-class'));

// closest
console.log(innerDiv.closest('.container-one'));

// innerHTML / innerText
let containerTwo = document.querySelector('.container-two');

console.log(containerTwo.innerHTML);

console.log(containerTwo.innerText);
console.log(containerTwo.textContent);

// Attributes

let pOne = document.querySelector('#inner-div p:first-child');

console.log(pOne);

pOne.title = '1';

console.log(pOne.title);
console.log(pOne.getAttribute('title'));

// class

console.log(pOne.className);

console.log(pOne.classList);

pOne.classList.add('new-class');
pOne.classList.remove('one');
console.log(pOne.classList.contains('new-class'));
pOne.classList.toggle('one');
pOne.classList.toggle('one');

// style

let fontSize = 5 + 22;

console.log(pOne.style);
pOne.style.backgroundColor = 'orange';
pOne.style.fontSize = fontSize + 'px';

// createElement

let newButton = document.createElement('button');
newButton.innerText = 'Click this new button';
newButton.classList.add('test');
// newButton.addEventListener('click', function () {
//     console.log('test');
// });

// innerDiv.append(newButton);
// innerDiv.prepend(newButton);
// innerDiv.before(newButton);
// innerDiv.after(newButton);
// innerDiv.replaceWith(newButton);

let newH1 = `<h1 class="test" id="new-h1">Haha, <strong>all</strong> gone!</h1>`;

containerTwo.insertAdjacentHTML('beforeend', newH1);

innerDiv.insertAdjacentElement('beforeend', newButton);

newButton.remove();
