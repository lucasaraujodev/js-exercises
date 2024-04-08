// ----- EXPLANATION OF THE EXERCISE -----

/*

🇺🇸: Write a JavaScript program to simulate a waiting line at a doctor's office.

The program must start by showing an interactive menu on the screen containing a list of all patients waiting in order, showing their position next to their name (e.g.: 1st Mattews, 2nd Mark, etc.).

The menu should also allow you to choose between the options “New patient”, to add a new patient to the end of the queue (asking for the patient's name), “Consult patient”, which removes the first patient from the queue and shows the name on the screen of the consulted patient, and “Exit”.

The program must only be closed by choosing the “Exit” option, otherwise you must return to the menu.

🇧🇷: Escreva um programa em javascript para simular uma fila de espera em um consultório médico. 

O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). 

O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. 

O programa só deve ser encerrado ao escolher a opção “Sair”, caso contrário deve voltar ao menu.

*/

// ---ATTEMPT #01---
/*
let patientsList = []


do {
    let menu = prompt(patientsList + 
            "\n\n[1] New patient" +
            "\n[2] Consult patient" +
            "\n[3] Exit")

    switch (menu) {
        case "1":
            prompt("What is the patient's name?").push(patientsList)

        case "2":
            alert("Patient" + patientsList[0] + "! Please, go to the doctor's office.")
            alert(menu.shift(patientsList))
        
        case "3":
            alert("The system is finishing.")
            break 
    }

} while(menu !== "3")

*/

// onebitcode correction 👇🏼

let queue = []
let menu = ""

do {
    let patients = ""
    for (let i = 0; i < queue.length; i++) {
        patients += (i + 1) + "º - " + queue[i] + "\n"
    }

    menu = prompt(
                "Patients:\n" + patients + 
            "\n\n[1] New patient" +
            "\n[2] Consult patient" +
            "\n[3] Exit")

    switch (menu) {
        case "1":
            const newPatient = prompt("What is the patient's name?")
            queue.push(newPatient)
            break
        case "2":
            const consultedPatient = queue.shift()
            // for not showing "undefined" when the array is empty
            if (consultedPatient /*It'll be corverted in a boolean type*/) { //you also can write as "queue.length  > 0"
                alert("Consulted Patient: " + consultedPatient) // removed from the queue
            } else {
                alert("There's no patient at the waiting line.")
            }
            
            break        
        case "3":
            alert("The system is finishing.")
            break
        default:
            alert("Invalid option. Please, try again.")
    }

} while(menu !== "3")