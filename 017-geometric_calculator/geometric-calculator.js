// ----- EXPLANATION OF THE EXERCISE -----

/*

🇺🇸: Write a javascript program to calculate the area of different geometric shapes. 

The program must start with a menu containing the different calculation options. The options should be:

    - triangle area: base * height / 2
    - area of the rectangle: base * height
    - area of the square: side²
    - area of the trapezoid: (larger base + smaller base) * height / 2
    - area of the circle: pi * radius² (consider pi = 3.14)

You should write the program using functions whenever possible to separate procedures. 

The program must also have an “Exit” option and until it is chosen, you must return to the menu.

🇧🇷: Escreva um programa em javascript para calcular a área de diferentes formas geométricas. 

O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:

    - área do triângulo: base * altura / 2
    - área do retângulo: base * altura
    - área do quadrado: lado²
    - área do trapézio: (base maior + base menor) * altura / 2
    - área do círculo: pi * raio² (considere pi = 3.14)

Você deve escrever o programa usando funções sempre que possível para separar os procedimentos.

O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.

*/

function calcularAreaTriangulo() {
    const base = prompt("Informe a base do triângulo:")
    const altura = prompt("Informe a altura do triângulo:")
    return base * altura / 2
}

function calcularAreaRetagulo() {
    const base = prompt("Informe a base do retângulo:")
    const altura = prompt("Informe a altura do retângulo:")
    return base * altura
}

function calcularAreaQuadrado () {
    const lado = prompt("Informe o lado do quadrado:")
    return lado * lado
}

function calcularAreaTrapezio() {
    const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
    const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"))
    const altura = prompt("Informe a altura do trapézio:")
    return (baseMaior + baseMenor) * altura /2
}

function calcularAreaCirculo () {
    const raio = prompt("Informe o raio do círculo:")
    return 3.14 * raio * raio
}

function exibirMenu () {
    return prompt(
        "Calculadora Geométrica\n" +
        "1. Calcular área de triângulo\n" +
        "2. Calcular área de retângulo\n" +
        "3. Calcular área de quadrado\n" +
        "4. Calcular área de trapézio\n" +
        "5. Calcular área de círculo\n" +
        "6. Sair\n"
    )
}

function executar () {
    let opcao = ""

    do {
        opcao = exibirMenu()
        let resultado

        switch (opcao) {
            case "1":
                resultado = calcularAreaTriangulo()
                break
            case "2":
                resultado = calcularAreaRetagulo()
                break
            case "3":
                resultado = calcularAreaQuadrado()
                break
            case "4":
                resultado = calcularAreaTrapezio()
                break
            case "5":
                resultado = calcularAreaCirculo()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Invalid option.")
                break;
        }

        if (resultado) {
            alert("Resultado: " + resultado)
        }

    } while(opcao !== "6")
}

executar()