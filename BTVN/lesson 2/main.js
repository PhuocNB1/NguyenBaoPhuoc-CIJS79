const input = document.querySelector('#input')
const btnConvert = document.getElementById('submit')
const selected = document.querySelector('#type')
const outputs = document.getElementsByClassName('item')
var value = ''

input.addEventListener('keyup',function (e) {
    value = e.target.value
})

btnConvert.addEventListener('click',function (e) {
    e.preventDefault();
    const mode = getMode()
    handleConvert(mode)
})

function getMode() {
    const value = selected.selectedOption[0].getAttribute('value')
    return value
}

function handleConvert () {
if (mode == 1){
    const stringSplit = value.split('')
    const arrayReverse = stringSplit.reverse()
    const arrayToString = arrayReverse.join('')
    outputs[0].firstElementChild.textContent = arrayToString;
    outputs[1].firstElementChild.textContent = '';
    outputs[2].firstElementChild.textContent = '';
}}