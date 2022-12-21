

let botaoCadastrar = document.querySelector(".submit");
	botaoCadastrar.addEventListener("click", function (event){

		event.preventDefault();

		let formulario = document.querySelector(".formulario-cadastro");

		let paciente = pegaValoresDoFormulario (formulario);

		let linhaNovoPaciente = criaLinhas (paciente, "paciente");

		let labelPeso = document.querySelector(".label-peso");
		let pesoValidacao = validacaoPeso (paciente.peso, formulario, linhaNovoPaciente, labelPeso);

		let alturaValidacao = validacaoAltura (paciente.altura, formulario, linhaNovoPaciente);

		adicionaLinhaNaTabela(linhaNovoPaciente, pesoValidacao, alturaValidacao, formulario);
			
	})

function pegaValoresDoFormulario (formulario) {

		let novoPaciente = {
				nome: formulario.nome.value,
				peso: formulario.peso.value,
				altura: formulario.altura.value,
				gordura: formulario.gordura.value,
				imc: calculoImc (formulario.peso.value, formulario.altura.value)
		}
		return novoPaciente;
}

function criaLinhas (dados, classe) {

		let linhaNovoPaciente = document.createElement("tr");
			linhaNovoPaciente.classList.add(classe);

			linhaNovoPaciente.appendChild(criaColunas(dados.nome, "info-nome"));
			linhaNovoPaciente.appendChild(criaColunas(dados.peso, "info-peso"));
			linhaNovoPaciente.appendChild(criaColunas(dados.altura, "info-altura"));
			linhaNovoPaciente.appendChild(criaColunas(dados.gordura, "info-gordura"));
			linhaNovoPaciente.appendChild(criaColunas(dados.imc,"info-imc"));

		return linhaNovoPaciente;
}

function criaColunas (dados, classe) {
		let colunasNovoPaciente = document.createElement("td");
			colunasNovoPaciente.textContent = dados;
			colunasNovoPaciente.classList.add(classe);
			return colunasNovoPaciente;
}

function adicionaLinhaNaTabela (novaLinha, peso, altura, formulario) {
	if (peso === true && altura === true){

		let tabela = document.querySelector("#tabela-pacientes");
			tabela.appendChild(novaLinha);
			formulario.reset();
	}
}

function validacaoPeso (peso, formulario, novaLinha, label){

	let valido = false;

	if(peso < 25 || peso > 130){
		alert("digite um peso entre 25kg e 130kg");
		label.textContent = "Peso Inválido";
		label.classList.add("label-invalida");
		
	}
	else{
		valido = true;
		label.textContent = "Peso";
		label.classList.remove("label-invalida");
	}
	return valido;
}

function validacaoAltura (altura, formulario, novaLinha) {

	let valido = false;

	if(altura < 1.00 || altura > 2.30) {
		alert("digite uma altura entre 1 metro e 2.30 metros");
		
	}
	else {
		valido = true;
		
	}
	return valido;
}


