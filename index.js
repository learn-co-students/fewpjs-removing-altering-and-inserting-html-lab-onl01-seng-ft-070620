// Write your code here!
let main = document.getElementById("main")
main.remove()
let newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.style.backgroundColor = '#5300B6';
newHeader.style.color = '#FFFFFF';
newHeader.style.textAlign = 'center';
newHeader.id = 'victory'
newHeader.textContent = "Andrew is the champion!"
