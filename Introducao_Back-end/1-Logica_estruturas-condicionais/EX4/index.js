// Crie duas variáveis. Na primeira coloque um total de minutos e
// defina um valor para ela (por exemplo, minutos = 120). Na segunda
// coloque o total em segundos destes minutos armazenados na
// primeira variável. Apresente no documento html a seguinte
// informação: "_ minutos equivale à _ segundos!"

let minutos = parseInt(prompt("Digite o total de minutos: "));
let segundos = minutos * 60;

document.write(minutos+" minutos equivale a "+segundos+" segundos!");