function item1() {
    let nome = prompt("Insira seu nome");
    let idade = prompt("Insira sua idade");
    let esporte = confirm("Quer práticar esportes?");
    let numIdade = parseInt(idade);
    if (nome === "" || idade === "") {
        alert("Por favor, Preencha os campos corretamente. Tente novamente.")
  }  else {
        if(esporte === true) {
            alert(nome+", de "+idade+" anos, quer praticar esportes");
        }
        else {
            alert(nome+", de "+idade+" anos, não quer praticar esportes");
        }
  }
}

function item2() {
    var num = document.getElementById("inputEx2").value;
    let numInt = parseInt(num);
    if(numInt % 2 == 0) {
        document.getElementById("ex2").innerHTML = "O número "+numInt+" é par.";
    }
    
    else {
        document.getElementById("ex2").innerHTML = "O número "+numInt+" é impar.";
    }
    
}


function item3Soma(){
    var num1 = Number(document.getElementById("num1Ex3").value);
    var num2 = Number(document.getElementById("num2Ex3").value);
    document.getElementById("resultEx3").value = num1 + num2;   
}

function item3Subtracao(){
    var num1 = Number(document.getElementById("num1Ex3").value);
    var num2 = Number(document.getElementById("num2Ex3").value);
    document.getElementById("resultEx3").value = num1 - num2;
}

function item3Multiplicacao(){
    var num1 = Number(document.getElementById("num1Ex3").value);
    var num2 = Number(document.getElementById("num2Ex3").value);
    document.getElementById("resultEx3").value = num1 * num2;
}

function item3Divisao(){
    var num1 = Number(document.getElementById("num1Ex3").value);
    var num2 = Number(document.getElementById("num2Ex3").value);
    document.getElementById("resultEx3").value = num1 / num2;   
}