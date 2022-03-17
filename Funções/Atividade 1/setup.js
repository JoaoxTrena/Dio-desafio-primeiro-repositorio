// alunos é um objeto que pssui dentro dele nome, nota e turma
const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];



function alunosA (array, media){
    let aprovados = [];


    for(let i = 0; i < array.lenght; i++){

       const {nota, nome} = array[i]; // Object destructing

        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosA(alunos, 5));