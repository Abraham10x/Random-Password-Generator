const btnEl = document.getElementById('generate')
const inputEl = document.querySelectorAll('input')

const passwordValue = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    'q',
    'w',
    'e', 
    'r', 
    't', 
    'y', 
    'u', 
    'i', 
    'o', 
    'p', 
    'a', 
    's', 
    'd', 
    'f', 
    'g', 
    'h', 
    'j', 
    'k', 
    'l', 
    'z', 
    'x', 
    'c', 
    'v', 
    'b', 
    'n', 
    'm', 
    '!',
    '£',
    '$',
    '%',
    '^',
    '&',
    '*',
    '`',
    '[',
    ']',
    '~',
    '"',
    "'",
    '.',
    ',',
    '(',
    ')',
    '_',
    '=',
    '-',
    '+',
    '{',
    '}',
    ':',
    ';',
    '@',
    '<',
    '>',
    '?',
    '/',
    '#',
    '¬',
    'A',
    'B',
    'C',
    'D', 
    'E', 
    'F', 
    'I', 
    'J',
    'K', 
    'L', 
    'M', 
    'N', 
    'O', 
    'P', 
    'Q', 
    'R', 
    'S', 
    'T', 
    'U', 
    'V', 
    'W', 
    'X', 
    'Y', 
    'Z' 
]


console.log(inputEl)
btnEl.addEventListener('click', generatePassword)

function generatePassword () {
    inputEl.forEach(element => {
        element.value = randomPassword()
    })
}

function randomPassword() {
    let item = [];
    for(let i = 0; i < 11; i++) {
        const randomPass = Math.floor(Math.random() * passwordValue.length) 
        item += passwordValue[randomPass]
    }
    console.log(item)
    return item
}
