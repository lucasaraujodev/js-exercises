import calculate from "./calculate.js"

const input = document.querySelector('#input')

export function handleButtonPress(ev) {
    const value = ev.currentTarget.dataset.value
    input.value += value
}

export function handleClearButton() {
    input.value = ''
    input.focus()
}

export function handleTyping(ev) {
    ev.preventDefault()
    // impedindo que o user digite outros caracteres
    const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
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
}