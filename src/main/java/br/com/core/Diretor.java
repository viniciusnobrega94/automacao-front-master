package br.com.core;

import java.util.List;

public class Diretor {

	private List<String> nome;
	private List<String> nascimento;

	public void addDiretor(String nome, String nascimento) {
		this.nome.add(nome);
		this.nascimento.add(nascimento);
	}

	public List<String> getNome() {
		return this.nome;
	}

	public List<String> getNascimento() {
		return this.nome;
	}

}
