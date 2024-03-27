// ----- EXPLANATION OF THE EXERCISE -----

/*

🇺🇸: Write a program that allows you to enter a character's name and attack power, then another character's name, amount of hit points, defense power and whether they have a shield, and then calculate the amount of damage dealt based on the following rules:

     - If the attack power is greater than the defense and the defender does not have a shield, the damage caused will be equal to the difference between the attack and defense.
     - If the attack power is greater than the defense and the defender has a shield, the damage caused will be equal to half the difference between the attack and defense.
     - If the attack power is less than or equal to the defense, the damage caused will be 0.

Finally, the program must subtract the amount of damage from the amount of life points of the defending character and display the amount of damage and updated information for both characters on the screen.

🇧🇷: Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

    - Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
    - Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
    - Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.

*/

let attacker = prompt('Attacker name:')
let attackPower = prompt('Attack power:')
// another option
       // const attackPower = parseFloat(prompt("Attack power:"))

let defender = prompt ('Defender’s name:')
let lifeScore = prompt ('Life score Defender: ')
let defenderPower = prompt ('Defender power:')
let shield = prompt('Does defender has a shield? (yes/no)')

attackPower = attackPower.parseInt(attackPower)
defenderPower = defenderPower.parseInt(defenderPower)
lifeScore = lifeScore.parseInt(lifeScore)

// let danoCausado = 0

if (attackPower > defenderPower && shield == 'no') {
    let damage = attackPower - defenderPower
    lifeScore -= damage
    alert('Damage: ' + damage + '\nLife Score of ' + defender + ' : ' + lifeScore)
}
else if (attackPower > defenderPower && shield == 'yes') {
    let damage = (attackPower - defenderPower) / 2
    alert('Damage: ' + damage + '\nLife Score of ' + defender + ' : ' + lifeScore)
}
else {
    let damage = 0
    alert('Damage: ' + damage + '\nLife Score of ' + defender + ' : ' + lifeScore)
}

//other exibihition style (no fuction description in "if")
/* 
    pontosDeVida -= danoCausado

    alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
    alert(
        atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
        defensor + "\nPontos de vida: " + pontosDeVida +
        "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
    )
*/