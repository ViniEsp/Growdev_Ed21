/*
9. Crie uma função chamada calcularMedia(nota1, nota2, nota3,
nome), que recebe 4 parâmetros sendo três inteiros e um texto
(String). Esta função será chamada ao abrir a página e mostrará um
alerta com a média. Exemplo: “João, sua média é 70.” A função
também deve mostrar no console.log() as notas recebidas. Exemplo
“Nota 1: 60,Nota 2: 70,Nota 3: 80”.
*/


// function calcularMedia(nota1, nota2, nota3,nome){

//     let media = (nota1 + nota2 + nota3) / 3;

//     alert(`${nome}, sua média é ${media}.`);
//     console.log(`Nota 1: ${nota1},\n Nota 2: ${nota2},\n Nota 3: ${nota3}`);

// }
// calcularMedia(60,70,80,"Joao");


function calcularMedia() {
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));
    let nome = prompt("Digite o seu nome:");
  
    // Verifica se as entradas são números válidos
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
      alert("Por favor, insira valores numéricos válidos para as notas.");
      return;
    }
  
    var media = (nota1 + nota2 + nota3) / 3;
  
    alert(nome + ", sua média é " + media + ".");
    console.log("Nota 1: " + nota1 + ", Nota 2: " + nota2 + ", Nota 3: " + nota3);
  }
  
  calcularMedia();




