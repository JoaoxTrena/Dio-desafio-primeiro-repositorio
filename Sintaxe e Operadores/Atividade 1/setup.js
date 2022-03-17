function comparacaoDeNumeros(num1, num2){
    if (! num1 || !num2) return 'Defina dois números'
    const primeiraParte = criaPrimeiraParte(num1, num2);
    const segundaParte = criaSegundaParte(num1, num2);

    return `${primeiraParte} ${segundaParte}`;
}

function criaPrimeiraParte(num1, num2){
    let primeiraParte = `Os números ${num1} e ${num2}`;
    let simNao = 'não';

    if (num1 == num2);{
        simNao = '';
    }
    return `${primeiraParte} ${simNao} são iguais`;
    
}

function criaSegundaParte(num1, num2){
    const soma = num1 + num2;
    let comparaDez = 'menor';
    let comparaVinte = 'menor';
    
    if (soma > 10){
        comparaDez = 'maior';
    }
    if (soma > 20){
        comparaVinte = 'maior';
    }
    return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20`;
}

console.log(comparacaoDeNumeros(10,10));

 