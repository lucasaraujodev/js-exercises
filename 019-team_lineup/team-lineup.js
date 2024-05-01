// ----- EXPLANATION OF THE EXERCISE -----

/*

🇺🇸: Build a web page that allows you to assemble a team of players. It should be possible to:

- Escalate a player
     - Inform the position of the player to be selected for the team.
     - Enter the player's name.
     - Enter the player's shirt number.
     - Have a “Schedule” button that asks the user if they want to confirm that player's lineup and then enters the information into a list on the page.
     - After the player is cast, the text fields must be cleared.
- Remove a player
     - Enter the player's shirt number.
     - Have a “Remove” button that asks the user if they want to confirm the removal of that player and then deletes him from the list on the page.
     - After the player is removed the text field must be cleared.

Tip: remember that it is possible to access the text of an input through the value property.

🇧🇷: Construa uma página web que permita montar a escalação de um time de jogadores. Nele deverá ser possível:

- Escalar um jogador
    - Informar a posição do jogador a ser escalado para o time.
    - Informar o nome do jogador.
    - Informar o número da camisa do jogador.
    - Ter um botão “Escalar” que pergunta ao usuário se ele deseja confirmar a escalação daquele jogador e então insere as informações em uma lista na página.
    - Após o jogador ser escalado os campos de texto devem ser limpos.
- Remover um jogador
    - Informar o número da camisa do jogador.
    - Ter um botão “Remover” que pergunta ao usuário se ele deseja confirmar a remoção daquele jogador e então exclui ele da lista na página.
    - Após o jogador ser removido o campo de texto deve ser limpo.

Dica: lembrando que é possível acessar o texto de um input através da propriedade value.

*/

function addPlayer() {
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value  
    // confirmação de escalação
    const confirmation = confirm("Escalar " + name + " como " + position + "?")

    if (confirmation) {
        const teamList = document.getElementById('team-list')
        const playerItem = document.createElement('li')
        playerItem.id = 'player-' + number
        playerItem.innerText = position + ": " + name + " (" + number + ")"
        teamList.appendChild(playerItem)
        // limpando o formulário após submissão confirmada
        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    }
}

function removePlayer() {
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('player-' + number)

    const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + "?")

    if (confirmation) {
        document.getElementById('team-list').removeChild(playerToRemove)
        // playerToRemove.remove() -> outra opção por remoção direta, não pelo elemento pai
        document.getElementById('numberToRemove').value = ""
    }
} 