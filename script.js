let notal =  Number(prompt('Entre com a primeira nota do aluno')); 
let nota2 = Number(prompt('Entre com a segunda nota do aluno')); 
let nota3 = Number(prompt('Entre com a terceira nota do aluno'));

let media;

 media = (nota1 + nota2 + nota3)/3;

 if (media>=7); {
    alert(`voce foi aprovado com a nota ${media}`);
 } 
 else if (media <7 && media >= 6) {
     alert(`voce foi para recuperação ${media}`);
 } else {
     alert(`Voce foi reprovado com a nota ${media}`);
 }