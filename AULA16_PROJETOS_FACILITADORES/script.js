//Métodos facilitadores - includes, startsWith e endsWith
//(informações dentro de arrays)

//includes - array
let nomes = ['Amir', 'Benir', 'Cemir'];

console.log(nomes.includes('Benir'));
console.log(nomes.includes('AMIR'));

if(nomes.includes('Amill')){
    console.log('Nome encontrado');
}else{
    console.log('Nome não encontrado');
}


//starsWhith - variáveis
let aluno = 'Albano';
console.log(aluno.startsWith('alb'));
console.log(aluno.startsWith('Alb'));

//endsWhith - variaveis
console.log(aluno.endsWith('ano'));
console.log(aluno.endsWith('anO'));

