const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f450c78fb7msh8765990528797f3p1cda5ejsn15acb181d563',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Winnipeg', options)
	.then(response => response.json())
	.then(response => {console.log(response)
	
	document.getElementById("temperature").innerHTML = response.temp})
	.catch(err => console.error(err));