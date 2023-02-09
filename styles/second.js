const secondSection = document.getElementById('second-section');
console.log(secondSection);
secondSection.style.color = 'white'
secondSection.style.backgroundColor = 'tomato'
secondSection.style.margin = '2px solid white'

const secondList = document.getElementById('second-list');

const li = document.createElement('li');
li.innerText = 'My dynamic item'

secondList.appendChild(li);