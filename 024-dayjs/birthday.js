// ----- EXPLANATION OF THE EXERCISE -----

/*

🇺🇸: In this exercise you will have to train a very important skill for any programmer, the ability to learn how to use third-party libraries.

You must create a javascript function that receives as a parameter a person's date of birth in string format and displays in the terminal that person's age on the current day, their next birthday in the format “DD/MM/YYYY” and how many days are left. for her next birthday. To do this, you must use the **dayjs** module, available on npm.

To learn how to use dayjs you must access the npm website (https://www.npmjs.com/) and search for this module. The dayjs npm page will show you how to use this library. You should also consult the dayjs documentation, available at https://day.js.org/.

In this application you will not use the browser, **you must use Node.js**. To run your file with Node.js, simply access the folder where it is located with the terminal and type the command `node seu_arquivo.js`. Furthermore, **you must use the CommonJS module syntax** to work with dayjs, that is, the `require()` function.

**Tip:** To solve the exercise, try looking for the methods of adding a time interval to data (add), calculating the difference between one data and another (diff) and displaying data in a specific format (format) .

🇧🇷: Nesse exercício você irá treinar uma habilidade muito importante para qualquer programador, a capacidade de aprender a utilizar bibliotecas de terceiros.

Você deverá criar uma função javascript que recebe como parâmetro a data de nascimento de uma pessoa no formato string e mostre no terminal a idade dessa pessoa no dia atual, sua próxima data de aniversário no formato “DD/MM/AAAA” e quantos dias faltam para o próximo aniversário dela. Para isso, você deverá utilizar o módulo **dayjs**, disponível no npm.

Para aprender a utilizar o dayjs você deverá acessar o site do npm (https://www.npmjs.com/) e pesquisar por esse módulo. A página da dayjs no npm irá mostrar como utilizar essa biblioteca. Você também deve consultar a documentação do dayjs, disponível em https://day.js.org/.

Nessa aplicação você não utilizará o browser, **você deverá utilizar o Node.js**. Para executar seu arquivo com o Node.js basta acessar a pasta onde ele está localizado com o terminal e digitar o comando `node seu_arquivo.js`. Além disso, **você deverá utilizar a sintaxe dos módulos CommonJS** para trabalhar com o dayjs, ou seja, a função `require()`.

**Dica:** Para resolver o exercício tente procurar pelos métodos de adicionar um intervalo de tempo a uma data (add), calcular a diferença entre uma data e outra (diff) e exibir uma data em um formato específico (format).

*/

const dayjs = require("dayjs")

function birthday(date) {
    const birthday = dayjs(date)
    const today = dayjs()
// discovering the age 
    const ageInYears = today.diff(birthday, 'year')
// next bday
    const nextBirthday = birthday.add(ageInYears + 1, 'year')
// days to next bday
    const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1
// showing results
    console.log(`Idade: ${ageInYears}`)
    console.log(`Próximo aniversário; ${nextBirthday.format("DD/MM/YYYY")}`)
    console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`)
}

birthday("2000-11-22")