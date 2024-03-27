// ----- EXPLANATION OF THE EXERCISE -----

/*

🇺🇸: Write a program that is capable of calculating discounts. The user will enter the purchase amount and discount percentage and receive the discount amount and total.

🇧🇷: Escreva um programa que seja capaz de calcular descontos. O usuário inserirá o valor da compra e a porcentagem do desconto e receberá o valor do desconto e o total.

*/

purchase = parseFloat(prompt('Enter the purchase amount ($): '))
discount = parseFloat(prompt('Enter the percentage of discount (%): '))

discount = (purchase *  discount) / 100
purchase -= discount

alert('Discount amount: ' + discount)
alert('Total amount:' + purchase) 