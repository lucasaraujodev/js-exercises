// ----- EXPLANATION OF THE EXERCISE -----

/*

🇺🇸: Write a JavaScript program that starts by asking for the initial amount of money available and then displays that amount on the screen along with options to add and remove money and an option to leave.

When clicking on the add money option, the program should ask for the amount to be added, add this value to the initial amount and then show the menu again with the amount of money and options.

The option to remove money should do the same, but subtracting the amount. The exit option should terminate the program.

🇧🇷: Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. 

Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. 

A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.

*/

// --- ATTEMPT #01 ---
/*
const amount = parseFloat(prompt("Enter your initial amount (U$)"))

while (true) {
        option = prompt("You have U$" + amount + "\nWould you like to add or remove money?\n[1] add\n[2] remove\n[3] exit")
        if (option == "1") {
            let addition = prompt("How much do you want to add?").parseFloat(addition)
            amount += addition
        } if (option == "2") {
            let subtraction = prompt("How much do you want to add?").parseFloat(subtraction)
            amount -= subtraction
        } if (option == "3") {
            alert("The system is being closed.")
        } else {
            alert("Invalid option. Please, reload the page.")
        }
         
    }
*/

// ChatGPT answer:

    let amount = parseFloat(prompt("Enter your initial amount (U$)"));

while (true) {
    let option = prompt("You have U$" + amount.toFixed(2) + "\nWould you like to add or remove money?\n[1] add\n[2] remove\n[3] exit");
    
    if (option === "1") {
        let addition = parseFloat(prompt("How much do you want to add?"));
        if (!isNaN(addition)) {
            amount += addition;
        } else {
            alert("Invalid input. Please enter a valid number.");
        }
    } else if (option === "2") {
        let subtraction = parseFloat(prompt("How much do you want to remove?"));
        if (!isNaN(subtraction)) {
            amount -= subtraction;
        } else {
            alert("Invalid input. Please enter a valid number.");
        }
    } else if (option === "3") {
        alert("Exiting the program.");
        break; // Exit the loop
    } else {
        alert("Invalid option. Please choose again.");
    }
}

