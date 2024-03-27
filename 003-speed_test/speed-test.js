// ----- EXPLANATION OF THE EXERCISE -----

/*

🇺🇸: Write a JavaScript program that allows you to enter the name and speed of two vehicles and display a message on the screen saying which of the two is faster (or that the speeds are the same if this is the case)

🇧🇷: Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)

*/

const nameVehicle1 = prompt("Type the name of vehicle #01")
       const speedVehicle1 = prompt("Type the speed (km/h) of vehicle #01")
       // another option
       // const speedVehicle1 = parseFloat(prompt("Type the speed (km/h) of vehicle #01"))
       const nameVehicle2 = prompt("Type the name of vehicle #02")
       const speedVehicle2 = prompt("Type the speed (km/h) of vehicle #02")


       if (speedVehicle1 > speedVehicle2) {
        alert(nameVehicle1 + " is faster.")
       } 
       else if (speedVehicle1 < speedVehicle2) {
        alert(nameVehicle2 + " is faster.")
       }
       else {
        alert(nameVehicle1 + " and " + nameVehicle2 + " have the same speed.")
       }