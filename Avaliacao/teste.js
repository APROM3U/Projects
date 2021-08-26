
function avaliacaoAluno(notas, nome) {
 const notasForaDaMedia = notas.filter(x => x < 6);
 
 if (notasForaDaMedia.length > 2) {
   return "Aluno " + nome + " Reprovado";
 } else {
   return "Aluno " + nome + " Aprovado";
 }
}
 
const notas = [0, 5, 6, 10, 10];
const nomeAluno = "João";

const result = avaliacaoAluno(notas, nomeAluno);

console.log(result)