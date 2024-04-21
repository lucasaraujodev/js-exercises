// ----- EXPLANATION OF THE EXERCISE -----

/*

🇺🇸: Write a JavaScript program that simulates a job vacancy system, where it is possible to manage vacancies and add candidates to vacancies.

It must meet the following requirements:

     -Have a menu where you can choose between the different features of the system:
         1. List available vacancies
         2. Create a new vacancy
         3. View a vacancy
         4. Register a candidate for a vacancy
         5. Delete a vacancy
         6. Exit

     -The option to list vacancies must show the index, name and number of candidates registered for all vacancies.

     -The option to create a new vacancy must ask for a name for the vacancy, a description and a deadline, and must also ask the user to confirm the information before saving it.

     -The option to view a vacancy must ask for the vacancy index and show all its information: index, name, description, deadline, number of candidates and the names of the candidates.

     -The option to register a candidate for a vacancy asks for the candidate's name, the vacancy index and then a confirmation displaying the vacancy information before saving the candidate to the vacancy.

     -The option to delete a vacancy must ask for the vacancy index, show its information and ask the user to confirm the deletion of the vacancy before actually deleting it.

     This is the module review exercise, so take the opportunity to use all the resources seen so far whenever possible, such as objects, arrays and functions.

🇧🇷: Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. 

Ele deve atender aos seguintes requisitos:

    -Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema:

        1. Listar vagas disponíveis
        2. Criar um nova vaga
        3. Visualizar uma vaga
        4. Inscrever um candidato em uma vaga
        5. Excluir uma vaga
        6. Sair

    -A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.

    -A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.

    -A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.

    -A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.

    -A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

    Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.
*/

const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
      }, "")
    
      alert(vagasEmTexto)
}

function novaVaga() {
  const nome = prompt("Informe um nome para a vaga:")
  const descricao = prompt("Informe um descrição para a vaga:")
  const dataLimite = prompt("Informe um data limite (dd/mm/aaaa) para a vaga:")

  const confirmacao = confirm(
    "Deseja criar uma nova vaga com essas informações?\n" +
    "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
  )

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
    vagas.push(novaVaga)
    alert("Vaga criada.")
  }
}

function exibirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja exibir:")

    if (indice >= vagas.length || indice < 0) {
        alert("Índice inválido")
        return
    }

    const vaga = vagas[indice]
  
    const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + "\n - " + candidato, "")
  
    alert(
      "Vaga nº " + indice +
      "\nNome: " + vaga.nome +
      "\nDescrição: " + vaga.descricao +
      "\nData limite: " + vaga.dataLimite +
      "\nQuantidade de candidatos: " + vaga.candidatos.length +
      "\nCandidatos inscritos:" + candidatosEmTexto
    )
  }

  function inscreverCandidato() {
    const candidato = prompt("Informe o nome do(a) candidato(a):")
    const indice = prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:")
    const vaga = vagas[indice]
  
    const confirmacao = confirm(
      "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
      "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )
  
    if (confirmacao) {
      vaga.candidatos.push(candidato)
      alert("Inscrição realizada")
    }
  }

  function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir:")
    const vaga = vagas[indice]
  
    const confirmacao = confirm(
      "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
      "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )
  
    if (confirmacao) {
      vagas.splice(indice, 1)
      alert("Vaga excluída.")
    }
  }

function exibirMenu() {
  const opcao = prompt(
    "Cadastro de Vagas de Emprego" +
    "\n\nEscolha uma das opções" +
    "\n1. Listar vagas disponíveis" +
    "\n2. Criar uma nova vaga" +
    "\n3. Visualizar uma vaga" +
    "\n4. Inscrever um(a) candidato(a)" +
    "\n5. Excluir uma vaga" +
    "\n6. Sair"
  )
  return opcao
}

function executar() {
    let opcao = ""
  
    do {
      opcao = exibirMenu()
  
      switch (opcao) {
        case "1":
          listarVagas()
          break
        case "2":
          novaVaga()
          break
        case "3":
          exibirVaga()
          break
        case "4":
          inscreverCandidato()
          break
        case "5":
          excluirVaga()
        case "6":
          alert("Saindo...")
          break
        default:
          alert("Opção inválida.")
      }
  
    } while (opcao !== "6");
  }
  
  executar()