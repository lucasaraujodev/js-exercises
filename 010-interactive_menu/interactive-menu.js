// ----- EXPLANATION OF THE EXERCISE -----

/*

🇺🇸: Write a JavaScript program that simulates an interactive menu with 5 different options.

The program should start showing the 5 available options, the first four do not require any specific functionality, the last option should be the “Quit” option.

When clicking on one of the first four options, a message should be displayed on the screen indicating which option was chosen and then the program should display the menu with the 5 options again.

This should continue to happen until the user chooses the “Quit” option. When choosing it, a message saying that the system is being closed should be displayed on the screen and then the program ends.

🇧🇷: Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. 

O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. 

Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. 

Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.

*/

let option = prompt("Choose an option below:\n\n" + 
                    "[1] one\n" +
                    "[2] two\n" +
                    "[3] three\n" +
                    "[4] four\n" +
                    "[5] quit")

option = parseInt(option)

if (option > 5) {
    alert("Invalid option. Please, reload the page.")
} else {
    while (option <= 4) {
        alert("You choosed the option " + option)
        option = prompt("Choose an option below:\n\n" +
                        "[1] one\n" +
                        "[2] two\n" +
                        "[3] three\n" +
                        "[4] four\n" +
                        "[5] quit")
    }
    alert("The system is being closed.")
}

// onebitcode version 👇🏼
/* 
let opcao = ""

do {
    opcao = prompt(
    "Seja bem-vindo(a)!\n" +
    "\nEscolha uma das opções abaixo:" +
    "\n1 - Opção Um" +
    "\n2 - Opção Dois" +
    "\n3 - Opção Três" +
    "\n4 - Opção Quatro" +
    "\n5 - Encerar"
  )

  switch (opcao) {
    case "1":
      alert("Você escolheu a opção 1.")
      break
    case "2":
      alert("Você escolheu a opção 2.")
      break
    case "3":
      alert("Você escolheu a opção 3.")
      break
    case "4":
      alert("Você escolheu a opção 4.")
      break
    case "5":
      alert("Encerrando o programa...")
      break
    default:
      alert("Entrada inválida! Escolha uma das cinco opções.")
  }
  
} while (opcao !== "5");


*/