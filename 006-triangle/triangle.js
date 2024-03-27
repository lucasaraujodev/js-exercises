// ----- EXPLANATION OF THE EXERCISE -----

/*

🇺🇸: Write a program that is capable of calculating the area and perimeter of a triangle. The user must enter the required information and the program will display the results.

🇧🇷: Escreva um programa que seja capaz de calcular a área e o perímetro de um triângulo. O usuário deve inserir as informações necessárias e o programa exibirá os resultados.

*/

side1 = parseFloat(prompt('Enter the measure of side #01 of the triangle'))
side2 = parseFloat(prompt('Enter the measure of side #02 of the triangle'))
side3 = parseFloat(prompt('Enter the measure of side #03 of the triangle'))

base = parseFloat(prompt('Enter the measure of the base of the triangle'))
height = parseFloat(prompt('Enter the measure of height of the triangle'))

perimeter = side1 + side2 + side3
area = (base * height) / 2

alert('Perimeter: ' + perimeter)
alert('Area: '+ area)