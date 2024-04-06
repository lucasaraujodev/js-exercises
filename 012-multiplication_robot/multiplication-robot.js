// ----- EXPLANATION OF THE EXERCISE -----

/*

🇺🇸: Write a JavaScript program that is capable of calculating the multiplication table of a given number (from 1 to 20).

The program must start by asking for the number to be used in the calculations and then save all multiplication results from 1 to 20 using the number entered within a string variable.

Then the program should display these results and finish.

🇧🇷: Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20). 

O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. 

Depois o programa deve exibir esses resultados e finalizar.

*/

const number = prompt("Enter a number:")

let result = ""

for (let factor = 1; factor <= 20; factor++) {
    result += " -> " + number + " x " + factor + " = " + (number * factor) + "\n"
}

alert ("Result of the multiplication table of " + number + ":\n\n" + result)