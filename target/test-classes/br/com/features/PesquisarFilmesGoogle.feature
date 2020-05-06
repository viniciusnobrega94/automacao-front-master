# language:pt
# encoding: utf-8

@pesquisa-teste
Funcionalidade: Pesquisa de Diretores e Filmes

  Esquema do Cenario: Pesquisar Diretores e Filmes
    Dado que informo o diretor "<diretor>" e o ano de nascimento "<nascimento>"
    E informo o filme "<filme>" e ano de lancamento "<ano>"
    Quando clico em pesquisar
    Entao recebo o total de resultados para a pesquisa
    
	Exemplos: 
      | diretor						| nascimento             | filme                | ano  |
      | Rob Cohen				| 12 de março de 1949    | Velozes e furiosos      | 2001 |
      | Bong Joon-ho | 14 de Setembro de 1969    | Parasita  | 2019 |
      | Ang Lee		| 23 de outubro de 1954 | Projeto Gemini						| 2019 |
      | Todd Phillips			| 20 de dezembro de 1970 | Coringa			        | 2019 |