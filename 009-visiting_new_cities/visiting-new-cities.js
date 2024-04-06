// ----- EXPLANATION OF THE EXERCISE -----

/*

🇺🇸: Write a JavaScript program that asks for a tourist's name and then asks if they have visited a city.

If the answer is yes, ask for the name of the city and store it in a variable, and then continue asking if the tourist visited any other city until the answer is no.

At the end, the program should display the tourist's name, how many and which cities he visited.

🇧🇷: Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. 

Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. 

No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.

*/

const touristName = prompt("What is your name?")
let visitedCities = []
let touristValidation = prompt("Have you ever visited a city?\n\n[1] Yes\n[2] No")

while (touristValidation === "1") {
    const city = prompt("Which city?")
    visitedCities.push(city)
    touristValidation = prompt("Have you ever visited another city?\n\n[1] Yes\n[2] No")   
}

const numberOfVisitedCities = visitedCities.length

alert("Tourist's name: " + touristName + "\nNumber of visited cities: " + numberOfVisitedCities + "\nVisited Cities: " + visitedCities.join(", "))


// onebitcode version 👇🏼
/*
const turista = prompt("E aí, turista! Qual é o seu nome?")
let cidades = ""
let contagem = 0

let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")

while (continuar === "Sim") {
  let cidade = prompt("Qual é o nome da cidade visitada?")
  cidades += " - " + cidade + "\n"
  contagem++
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}

alert(
  "Turista: " + turista +
  "\nQuantidade de cidades visitadas: " + contagem +
  "\nCidades visitadas:\n" + cidades
)
*/

