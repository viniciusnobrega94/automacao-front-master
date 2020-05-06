$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PesquisarFilmesGoogle.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language:pt"
    },
    {
      "line": 2,
      "value": "# encoding: utf-8"
    }
  ],
  "line": 5,
  "name": "Pesquisa de Diretores e Filmes",
  "description": "",
  "id": "pesquisa-de-diretores-e-filmes",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 4,
      "name": "@pesquisa-teste"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Pesquisar Diretores e Filmes",
  "description": "",
  "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretores-e-filmes",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 8,
  "name": "que informo o diretor \"\u003cdiretor\u003e\" e o ano de nascimento \"\u003cnascimento\u003e\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "informo o filme \"\u003cfilme\u003e\" e ano de lancamento \"\u003cano\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "clico em pesquisar",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "recebo o total de resultados para a pesquisa",
  "keyword": "Entao "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretores-e-filmes;",
  "rows": [
    {
      "cells": [
        "diretor",
        "nascimento",
        "filme",
        "ano"
      ],
      "line": 14,
      "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretores-e-filmes;;1"
    },
    {
      "cells": [
        "Rob Cohen",
        "12 de mar�o de 1949",
        "Velozes e furiosos",
        "2001"
      ],
      "line": 15,
      "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretores-e-filmes;;2"
    },
    {
      "cells": [
        "Bong Joon-ho",
        "14 de Setembro de 1969",
        "Parasita",
        "2019"
      ],
      "line": 16,
      "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretores-e-filmes;;3"
    },
    {
      "cells": [
        "Martin Scorsese",
        "17 de novembro de 1942",
        "O Irlândes",
        "2019"
      ],
      "line": 17,
      "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretores-e-filmes;;4"
    },
    {
      "cells": [
        "Todd Phillips",
        "20 de dezembro de 1970",
        "Coringa",
        "2019"
      ],
      "line": 18,
      "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretores-e-filmes;;5"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 15,
  "name": "Pesquisar Diretores e Filmes",
  "description": "",
  "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretores-e-filmes;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@pesquisa-teste"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que informo o diretor \"Rob Cohen\" e o ano de nascimento \"12 de mar�o de 1949\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "informo o filme \"Velozes e furiosos\" e ano de lancamento \"2001\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "clico em pesquisar",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "recebo o total de resultados para a pesquisa",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Rob Cohen",
      "offset": 23
    },
    {
      "val": "12 de mar�o de 1949",
      "offset": 57
    }
  ],
  "location": "PesquisaGoogleSteps.que_informo_o_diretor_e_o_ano_de_nascimento(String,String)"
});
formatter.result({
  "duration": 33039864200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Velozes e furiosos",
      "offset": 17
    },
    {
      "val": "2001",
      "offset": 58
    }
  ],
  "location": "PesquisaGoogleSteps.informo_o_filme_e_ano_de_lancamento(String,String)"
});
formatter.result({
  "duration": 407392200,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaGoogleSteps.clico_em_pesquisar()"
});
formatter.result({
  "duration": 5142101600,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaGoogleSteps.recebo_o_total_de_resultados_para_a_pesquisa()"
});
formatter.result({
  "duration": 187800900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Pesquisar Diretores e Filmes",
  "description": "",
  "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretores-e-filmes;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@pesquisa-teste"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que informo o diretor \"Bong Joon-ho\" e o ano de nascimento \"14 de Setembro de 1969\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "informo o filme \"Parasita\" e ano de lancamento \"2019\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "clico em pesquisar",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "recebo o total de resultados para a pesquisa",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Bong Joon-ho",
      "offset": 23
    },
    {
      "val": "14 de Setembro de 1969",
      "offset": 60
    }
  ],
  "location": "PesquisaGoogleSteps.que_informo_o_diretor_e_o_ano_de_nascimento(String,String)"
});
formatter.result({
  "duration": 1364105100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Parasita",
      "offset": 17
    },
    {
      "val": "2019",
      "offset": 48
    }
  ],
  "location": "PesquisaGoogleSteps.informo_o_filme_e_ano_de_lancamento(String,String)"
});
formatter.result({
  "duration": 157154200,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaGoogleSteps.clico_em_pesquisar()"
});
formatter.result({
  "duration": 3523569500,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaGoogleSteps.recebo_o_total_de_resultados_para_a_pesquisa()"
});
formatter.result({
  "duration": 48747600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Pesquisar Diretores e Filmes",
  "description": "",
  "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretores-e-filmes;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@pesquisa-teste"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que informo o diretor \"Martin Scorsese\" e o ano de nascimento \"17 de novembro de 1942\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "informo o filme \"O Irlândes\" e ano de lancamento \"2019\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "clico em pesquisar",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "recebo o total de resultados para a pesquisa",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Martin Scorsese",
      "offset": 23
    },
    {
      "val": "17 de novembro de 1942",
      "offset": 63
    }
  ],
  "location": "PesquisaGoogleSteps.que_informo_o_diretor_e_o_ano_de_nascimento(String,String)"
});
formatter.result({
  "duration": 1356395100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O Irlândes",
      "offset": 17
    },
    {
      "val": "2019",
      "offset": 50
    }
  ],
  "location": "PesquisaGoogleSteps.informo_o_filme_e_ano_de_lancamento(String,String)"
});
formatter.result({
  "duration": 199855800,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaGoogleSteps.clico_em_pesquisar()"
});
formatter.result({
  "duration": 1890987600,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaGoogleSteps.recebo_o_total_de_resultados_para_a_pesquisa()"
});
formatter.result({
  "duration": 67669700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Pesquisar Diretores e Filmes",
  "description": "",
  "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretores-e-filmes;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@pesquisa-teste"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que informo o diretor \"Todd Phillips\" e o ano de nascimento \"20 de dezembro de 1970\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "informo o filme \"Coringa\" e ano de lancamento \"2019\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "clico em pesquisar",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "recebo o total de resultados para a pesquisa",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Todd Phillips",
      "offset": 23
    },
    {
      "val": "20 de dezembro de 1970",
      "offset": 61
    }
  ],
  "location": "PesquisaGoogleSteps.que_informo_o_diretor_e_o_ano_de_nascimento(String,String)"
});
formatter.result({
  "duration": 1224884800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Coringa",
      "offset": 17
    },
    {
      "val": "2019",
      "offset": 47
    }
  ],
  "location": "PesquisaGoogleSteps.informo_o_filme_e_ano_de_lancamento(String,String)"
});
formatter.result({
  "duration": 458471400,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaGoogleSteps.clico_em_pesquisar()"
});
formatter.result({
  "duration": 2016210000,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaGoogleSteps.recebo_o_total_de_resultados_para_a_pesquisa()"
});
formatter.result({
  "duration": 110102300,
  "status": "passed"
});
});