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

function item4() {
    let numPA = Number(document.getElementById("num1Ex4").value);
    let numPG = Number(document.getElementById("num1Ex4").value);
    let raiz = Number(document.getElementById("raizEx4").value);
    let termo = 10;
    let termoAtual;
    let termoPG = 1;
    respostaPA = "";
    respostaPG = ""; 
    for(let count=1; count<=termo ; count++){
        numPA = numPA + raiz;
        respostaPA += "Termo " + count + " = " + numPA +"<br>";     
    }
    for(let count=0; count < termo ; count++){
        termoAtual = numPG * Math.pow(raiz, count);
        respostaPG += "Termo " + termoPG + " = " + termoAtual +"<br>"; 
        termoPG++;
    }
    document.getElementById("ex4PA").innerHTML = "PA:<br> " + respostaPA;
    document.getElementById("ex4PG").innerHTML = "PG:<br> " + respostaPG;
}