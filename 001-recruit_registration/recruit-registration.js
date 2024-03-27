// ----- EXPLANATION OF THE EXERCISE -----

/*

🇺🇸: Write a JS program that allows you to save information about a recruit.

The information to save is:

- first name
- the surname
- the field of study
- the year of birth

Then the program should display the recruit's full name, his field of study and his age (only based on the year of his birth).

🇧🇷: Escreva um programa em js que permita salvar informações de um recruta. 

As informações a serem salvar são:

- o primeiro nome
- o sobrenome
- o campo de estudo
- o ano de nascimento

Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de seu nascimento).

*/

alert("Hello, recruit!")
        const name = prompt("Type your name:")
        const surname = prompt("Type your last name:")
        const studyField = prompt("Type your study field:")
        const birthYear = prompt ("Type your birth year:")

        const age = 2024 - (birthYear)

        alert("Registration made!")
        alert("Hello, " + name + " " + surname + "!")
        alert("The recruit " + name + " studies " + studyField)
        alert (name + " is " + age + " years old")


        console.log("Registration made!")
        console.log("Hello, " + name + " " + surname + "!")
        console.log("The recruit " + name + " studies " + studyField)
        console.log(name + " is " + age + " years old")
     