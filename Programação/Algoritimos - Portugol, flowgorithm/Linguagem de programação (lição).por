programa
{
	
	funcao inicio()
	{
		real janeiro,fevereiro,marco,abril
		real media
		real total

		escreva("Digite sua arrecadação em janeiro:")
		leia(janeiro)
		escreva("Digite sua arrecadação em fevereiro:")
		leia(fevereiro)
		escreva("Digite sua arrecadação em março:")
		leia(marco)
		escreva("Digite sua arrecadação em abril:")
		leia(abril)

		total = (janeiro+fevereiro+marco+abril)
		media = (janeiro+fevereiro+marco+abril)/4

		escreva("Seu total de vendas foi de: "+ total+ " e sua média de vendas foi de: "+ media)
		
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 532; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */