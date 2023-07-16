function loadpk(){

	var valorPk= document.getElementById("numeroPk").value;
	//var url="https://pokeapi.co/api/v2/pokemon-form/25";
	
	var url="https://pokeapi.co/api/v2/pokemon/"+valorPk+"/";
	
	fetch (url)
		.then((response)=> {
			return response.json();
		})
			
		.then ((data) => {
		
			console.clear();
			console.log(data);
			document.getElementById('nome').innerHTML = data['name'];
			//document.getElementById('numero').innerHTML = data['id'];
			document.getElementById('abilidade1').innerHTML = data['abilities']['0']['ability']['name'];
            document.getElementById('abilidade2').innerHTML = data['abilities']['1']['ability']['name'];
           			document.getElementById('experi').innerHTML = data['base_experience'];
			
			let img = data['sprites']['other']['dream_world']['front_default'];
			document.getElementById('picFront').setAttribute('src',img);
			
			
			// let imgBack = data['sprites']['back_default'];
			// document.getElementById('picBack').setAttribute ('src',imgBack);
		})

	    .catch((erro) => {
			console.log("Erro:"+erro);
		});
		
}



function loadpk2(){

	var valorPk= document.getElementById("numeroPk2").value;
	//var url="https://pokeapi.co/api/v2/pokemon-form/25";
	
	var url="https://pokeapi.co/api/v2/pokemon/"+valorPk+"/";
	
	fetch (url)
		.then((response)=> {
			return response.json();
		})
			
		.then ((data) => {
		
			console.clear();
			console.log(data);
			document.getElementById('nome2').innerHTML = data['name'];
			//document.getElementById('numero').innerHTML = data['id'];
			document.getElementById('abilidade4').innerHTML = data['abilities']['0']['ability']['name'];
            document.getElementById('abilidade5').innerHTML = data['abilities']['1']['ability']['name'];
           
			document.getElementById('experi2').innerHTML = data['base_experience'];
			
			let img = data['sprites']['other']['dream_world']['front_default'];
			document.getElementById('picFront2').setAttribute('src',img);
			
			
			// let imgBack = data['sprites']['back_default'];
			// document.getElementById('picBack').setAttribute ('src',imgBack);
		})

	    .catch((erro) => {
			console.log("Erro:"+erro);
		});
		
}


