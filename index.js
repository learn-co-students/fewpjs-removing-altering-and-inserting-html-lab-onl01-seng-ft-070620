// remove the <main> with id 'main'
main.remove('main');

// set newHeader equal to an <h1> with id 'victory' and a message
let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'Ethan is the champion';
document.body.appendChild(newHeader);
