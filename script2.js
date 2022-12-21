let titulo = document.querySelector(".titulo")

let listaPacientes = document.querySelectorAll('.paciente');

 for (let i = 0; i < listaPacientes.length; i += 1) {

 	
 	let tabela = document.querySelector("tbody");

	let paciente = listaPacientes[i];

	let celulasNome = paciente.querySelector(".info-nome");

	let botaoDelete = paciente.querySelector(".botao-delete");


	let celulasPeso = paciente.querySelector('.info-peso');
	let peso = celulasPeso.textContent;

	let celulasAltura = paciente.querySelector('.info-altura');
	let altura = celulasAltura.textContent;

	let celulaImc = paciente.querySelector('.info-imc');
		celulaImc.textContent = calculoImc (peso, altura);

	let pesoValido = validacaoPeso(peso);
	let alturaValida = validacaoAltura(altura);

	function calculoImc (valorPeso, valorAltura) {
		let calculo = valorPeso / (valorAltura*valorAltura);
		return calculo.toFixed(2);
	}

	function validacaoPeso (valorPeso) {
		if (valorPeso >=25 && valorPeso <= 150) {
			return true;
		}
		else{
			return false;
		}
		
	}

	function validacaoAltura (valorAltura) {
		if (valorAltura >= 1.00 && valorAltura <= 2.30) {
			return true;
		}
		else {
			return false;
		}
	}

	
	if (pesoValido === false) {
		celulasPeso.textContent = 'Peso fora de categoria';
		celulasPeso.classList.add("pacienteInvalido");
	} 

	if (alturaValida === false) {
		celulasAltura.textContent = 'Altura fora de categoria';
		celulasAltura.classList.add("pacienteInvalido");
	}	

	let stringClasse = `".${celulasNome.textContent}"`; 

	adicionaClasseLinha (paciente, celulasNome);	
	adicionaClasseBotao (botaoDelete, celulasNome);

	botaoDelete.onclick = remove (stringClasse, tabela);
		
}

function adicionaClasseLinha (paciente, celulasNome) {
			classe = celulasNome.textContent;
			paciente.classList.add(classe);
}

function adicionaClasseBotao (botao, celulasNome) {
			classe = celulasNome.textContent;
			botao.classList.add(classe);
}

function remove (stringClasse, tabela) {
			tabela.removeChild(stringClasse);
}
