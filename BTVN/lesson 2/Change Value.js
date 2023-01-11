const input = document.querySelector('#input')
const btnConvert = document.querySelector('#submit')
const selected = document.querySelector('#type')
const outputs = document.getElementsByClassName('item')
var value = ''

input.addEventListener('keyup', function (e) {
    value = e.target.value
})

btnConvert.addEventListener('click', function (e) {
    e.preventDefault()
    const mode = getMode()
    handleConvert(mode)
})


function getMode() {
    const value = selected.selectedOptions[0].getAttribute('value')
    return value
}

function handleConvert(mode) {
    if (mode == 1) {
        const stringSplit = value.split('')
        const arrayReverse = stringSplit.reverse()
        const arrayToString = arrayReverse.join('')
        outputs[0].firstElementChild.textContent = arrayToString;
        outputs[1].firstElementChild.textContent = '';
        outputs[2].firstElementChild.textContent = '';
    } else if (mode == 2) {
        const secArray = [... new Set(value)]
        outputs[0].firstElementChild.textContent = '';
        outputs[1].firstElementChild.textContent = secArray;
        outputs[2].firstElementChild.textContent = '';
    } else if (mode == 3) {
        // const a = value.sort();
        let max = [0, 0];
        let count = 1;
        for (let i = value.length - 1; i > 0; --i) {
            if (value[i] == value[i - 1]) ++count;
            else {
                if (max[1] < count) {
                    max[0] = value[i];
                    max[1] = count;
                }
                count = 1;
            }
        }
        const countArray = ('Value: ' +max[0]+ ' ,' + ' Count: ' +max[1] )
        outputs[0].firstElementChild.textContent = '';
        outputs[1].firstElementChild.textContent = '';
        outputs[2].firstElementChild.textContent = countArray;
    }
}