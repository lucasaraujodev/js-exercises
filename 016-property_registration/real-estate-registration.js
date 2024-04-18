// ----- EXPLANATION OF THE EXERCISE -----

/*

🇺🇸: Write a JavaScript program that works as a property registry and meets the following requirements:

      1. It must have an interactive menu that is always displayed until the user's choice exits.
      2. The interactive menu must show the number of registered properties at the top.
      3. The menu must have the option to save a property.
      4. To save a new property, the program must ask for the following information:
          4.1. Owner's name.
          4.2. Number of rooms.
          4.3. Number of bathrooms.
          4.4. If you have a garage.
      5. The menu should also have the option to show all saved properties.

🇧🇷: Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

    1. Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
    2. O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
    3. O menu deve ter a opção de salvar um imóvel.
    4. Para salvar um novo imóvel o programa deve pedir as seguintes informações:
        4.1. Nome do proprietário.
        4.2. Quantidade de quartos.
        4.3. Quantidade de banheiros.
        4.4. Se possui garagem.
    5. O menu também deve ter a opção de mostrar todos os imóveis salvos.

*/

const properties = []
let option = ""

do {

    option = prompt(
        "Welcome to Real State Registration!\n" +
        "Total of Properties: " + properties.length + 
        "\n\nChoose an option: \n[1] New Property\n[2] Properties List\n[3] Exit"
    )

switch (option) {
    case "1":
        const property = {}

        property.owner = prompt("Enter the name of the owner's property:")
        property.bedrooms = prompt("How many bedrooms does the property have?")
        property.bathrooms = prompt("How many bathrooms does the property have?")
        property.garage = prompt("Does the property has a garage? (Yes/No)")

        const confirm = confirm(
            "Save this property?\n" +
             "\nOwner: " + property.owner +
             "\nBedrooms: " + property.bedrooms +
             "\nBathrooms: " + property.bathrooms +
             "\nGarage: " + property.garage
        )

        if(confirm) {
            properties.push(property)
            alert("Property saved!")
        } else {
            alert("Returning to menu.")
        }

    case "2":
        for (let i = 0; i < properties.length; i++) {
            alert(
                "Property " + (i + 1) +
                "\nOwner: " + properties[i].owner +
                "\nBedrooms: " + properties[i].bedrooms +
                "\nBathrooms: " + properties[i].bathrooms + 
                "\nGarage: " + properties[i].garage
            )
        }
    case "3":
        alert("The system is ending...")
        break
    default:
        alert("Invalid option.")
}

} while (option !== "3")





