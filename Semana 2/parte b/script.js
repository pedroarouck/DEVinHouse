function item6(){

    alert("Houston, temos um problema!\n");
}

function item7(){

    confirm("Deseja mesmo apertar este botão?");;
}

function item8() {
    let person = prompt("Insira seu nome");
    if (person != null) {
     alert("Oi " + person + "! Como vamos?");
    }
  }

  function item9() {
    let nome = prompt("Insira seu nome");
    let idade = prompt("Insira sua idade");
    let cidade = prompt("Insira a cidade em que nasceu");
    let numIdade = parseInt(idade);
    console.log(nome);
    console.log(numIdade);
    console.log(cidade);

  }

  
function item10() {
    let sobrenome = prompt("Insira seu Sobrenome");
    let nome = prompt("Insira seu nome");
    alert("Oi " + nome + " " + sobrenome + "! Como vamos?");
    }