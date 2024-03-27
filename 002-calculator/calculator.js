// ----- EXPLANATION OF THE EXERCISE -----

/*

🇺🇸: Write a JS program that allows you to enter two numerical values and then calculate the result of the four basic operations (addition, subtraction, multiplication and division).

After calculating the results, the program should display them on the screen.

NOTE: Consider the following function to convert string-number.
     Ex: parseFloat("42")

🇧🇷: Escreva um programa em js que permita inserir dois valores numérios e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).

Após calular os resultados, o programa deve exibí-los na tela.

OBS: Considere a seguinte função para converter string-number.
    Ex: parseFloat("42")

*/

alert("Hello, user!")
number1 = prompt('Enter a number:')
number2 = prompt('Enter another number:')      

addition = parseFloat(number1) + parseFloat(number2)
subtraction = number1 - number2
multiplication = number1 * number2
division = number1 / number2

alert(number1 + " + " + number2 + " = " + addition)
alert(number1 + " - " + number2 + " = " + subtraction)
alert(number1 + " x " + number2 + " = " + multiplication)
alert(number1 + " / " + number2 + " = " + division)
