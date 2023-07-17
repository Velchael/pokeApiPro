
function loadpk(){

	var valorPk= document.getElementById("numeroPk").value;
	
    if (valorPk !== "" && !isNaN(valorPk) && valorPk > 0 && valorPk % 1 === 0) {
        // Valor correcto, inicializar las variables y continuar con la lógica
        var errorNumeroPk = document.getElementById("errorNumeroPk");
        errorNumeroPk.innerHTML = ""; // Limpiar mensaje de error si existe
    } else {
        // Valor incorrecto, mostrar mensaje de error
        var errorNumeroPk = document.getElementById("errorNumeroPk");
        errorNumeroPk.innerHTML = "Por favor, ingresa o número válido."; // Mensaje de error
    }

	var url="https://pokeapi.co/api/v2/pokemon/"+valorPk+"/";
	
	fetch (url)
		.then((response)=> {
			return response.json();
		})
			
		.then ((data) => {
		
			console.clear();
			console.log(data);
			document.getElementById('nome').innerHTML = data['name'];
			document.getElementById('abilidade1').innerHTML = data['abilities']['0']['ability']['name'];
            document.getElementById('abilidade2').innerHTML = data['abilities']['1']['ability']['name'];
           	document.getElementById('experi').innerHTML = data['base_experience'];
			
			let img = data['sprites']['other']['dream_world']['front_default'];
			document.getElementById('picFront').setAttribute('src',img);
			
		})

	    .catch((erro) => {
			console.log("Erro:"+erro);
		});
		
}
function loadpk2(){

	var valorPk2= document.getElementById("numeroPk2").value;

  // Validar el valor de numeroPk2
  if (valorPk2 !== "" && !isNaN(valorPk2) && valorPk2 > 0 && valorPk2 % 1 === 0) {
	// Valor correcto, inicializar las variables y continuar con la lógica
	var errorNumeroPk2 = document.getElementById("errorNumeroPk2");
	errorNumeroPk2.innerHTML = ""; // Limpiar mensaje de error si existe
} else {
	// Valor incorrecto, mostrar mensaje de error
	var errorNumeroPk2 = document.getElementById("errorNumeroPk2");
	errorNumeroPk2.innerHTML = "Por favor, ingresa o número válido."; // Mensaje de error
}
	var url="https://pokeapi.co/api/v2/pokemon/"+valorPk2+"/";
	
	fetch (url)
		.then((response)=> {
			return response.json();
		})
			
		.then ((data) => {
		
			console.clear();
			console.log(data);
			document.getElementById('nome2').innerHTML = data['name'];
			document.getElementById('abilidade4').innerHTML = data['abilities']['0']['ability']['name'];
            document.getElementById('abilidade5').innerHTML = data['abilities']['1']['ability']['name'];       
			document.getElementById('experi2').innerHTML = data['base_experience'];
			
			let img = data['sprites']['other']['dream_world']['front_default'];
			document.getElementById('picFront2').setAttribute('src',img);
			
		})

	    .catch((erro) => {
			console.log("Erro:"+erro);
		});
		
}



