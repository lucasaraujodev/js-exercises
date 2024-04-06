// ----- EXPLANATION OF THE EXERCISE -----

/*

🇺🇸: Write a JavaScript program that works as a measurement converter.

The program should ask for a value in meters and then give the option to choose which unit of measurement this value should be converted to.

The options are:

millimeter (mm)
centimeter (cm)
decimeter (dm)
decameter (dam)
hectometer (hm)
kilometer (km)

The program must then convert the measurement according to the chosen option and display the result.

The program must also display an “Invalid option” message if the user enters an option other than those available (use break and default for this)

🇧🇷: Escreva um programa em javascript que funcione como um conversos de medidas. 

O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. 

As opções são:

milímetro (mm)
centímetro (cm)
decímetro (dm)
decâmetro (dam)
hectômetro (hm)
quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)

*/

let measurement = prompt("Enter a measurement (in meters):")
let convertion = prompt("Which unit of measurement this value should be converted to?\n\n" +
                        "[1] millimeter (mm)\n" +
                        "[2] centimeter (cm)\n" +
                        "[3]decimeter (dm)\n" +
                        "[4] decameter (dam)\n" +
                        "[5] hectometer (hm)\n" +
                        "[6] kilometer (km)")

measurement = parseFloat(measurement)

switch (convertion) {    
    case convertion = "1": 
        alert((measurement *= 1000) + "mm")
        break
    case convertion = "2": 
        alert((measurement *= 100) + "cm")
        break
    case convertion = "3": 
        alert((measurement *= 10) + "dm")
        break
    case convertion = "4": 
        alert((measurement /= 10) + "dam")
        break
    case convertion = "5": 
        alert((measurement /= 100) + "hm")
        break
    case convertion = "6": 
        alert((measurement /= 1000) + "km")
        break
    default:
        alert("Invalid option. Please, reload the page.")
}

// after onebitcode's correction... You can write "switch" like this (eliminating in the cases the expression "convertion ="):
/*
switch (convertion) {    
    case "1": 
        alert((measurement *= 1000) + "mm")
        break
    case "2": 
        alert((measurement *= 100) + "cm")
        break
    case "3": 
        alert((measurement *= 10) + "dm")
        break
    case "4": 
        alert((measurement /= 10) + "dam")
        break
    case "5": 
        alert((measurement /= 100) + "hm")
        break
    case "6": 
        alert((measurement /= 1000) + "km")
        break
    default:
        alert("Invalid option. Please, reload the page.")
}
*/