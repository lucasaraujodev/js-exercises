// ----- EXPLANATION OF THE EXERCISE -----

/*

🇺🇸: Write a JavaScript program to simulate a deck of cards.

The program should start by showing an interactive menu on the screen containing the number of cards currently in the deck and the options to “Add a card”, “Draw a card” and “Exit”.

When choosing “Add a card”, the program should ask for the name of the card and add it to the top of the deck. When choosing “Pull a card”, the program must remove the card from the top of the deck and show the name of the card drawn on the screen.

The program must only be closed by choosing the “Exit” option, otherwise you must return to the menu.

🇧🇷: Escreva um programa em javascript para simular um baralho de cartas. 

O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. 

Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. 

O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

*/

const cards = []
let menu = ""

do {
    menu = prompt(
        "Cards: " + cards.length +
        "\n[1] Add a card\n[2] Pull a card\n[3] Exit"
    )

    switch(menu) {
        case "1":
            const newCard = prompt("What is the card?")
            cards.push(newCard) /* considering that the last card is on the top of the stack. It could be the opposite w/ unshift */
            break
        case "2":
            const pulledCard = cards.pop()
            if(!pulledCard) {
                alert("There isn't any card.")
            } else {
                alert("You pulled a(n) " + pulledCard)
            }
            break
        case "3":
            alert("The system is finishing.")
            break
        default:
            alert("Invalid option!")
    }

} while (menu !== "3")

