const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

// impedindo que o user digite outros caracteres
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function(charKeyBtn) {
    charKeyBtn.addEventListener('click', function() {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click', function() {
    input.value = ''
    input.focus()
})

// evento quando uma tecla é pressionada (keydown)
input.addEventListener('keydown', function(ev) {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }
    //backspace
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }
    //enter
    if (ev.key === 'Enter') {
        calculate()
    }
})

document.getElementById('equal').addEventListener('click', calculate)

//exportado para calculate.js
function calculate() {
// test console.log('Calculado!')
// previndo erros
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    // avaliar e realizar calculo
    const result = eval(input.value)
    
    resultInput.value = result
    resultInput.classList.remove('error')
}

// copy to clipboard
document.getElementById('copyToClipboard').addEventListener('click', function(ev) {
    const button = ev.currentTarget
    if(button.innerText === 'Copy') {
        button.innerText = 'Copied!'
        button.classList.add('success')
        //propriedad de cópia (propriedades de navigator - clipboard)
        window.navigator.clipboard.writeText(resultInput.value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})

//switch the theme (baseado nas variáveis do CSS)

document.getElementById('themeSwitcher').addEventListener('click', function() {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#fif5f9')
        root.style.setProperty('--primary-color',   '#4dff91')
        main.dataset.theme = 'dark'
    }
})


