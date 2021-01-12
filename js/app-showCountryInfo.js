/*klasse */
class Country {
	constructor(d,n,a) {
		this.dateiName=d;
		this.name= n;
		this.population=a;
	}
}
let countries =[];
countries[0]= new Country ('aus.svg','Australia',25);
countries[1]= new Country ('can.png','Canada',37);
countries[2]= new Country ('hol.png','Holland',17);
countries[3]= new Country ('usa.jpg','USA',328);
countries[4]= new Country ('spain.png','Spain',47);
let index=-1;
function showCountryInfo(){
	index++;
	let subIndex = index%countries.length;
	document.getElementById('country-flag').src='bilder/'+countries[subIndex].dateiName;
	document.getElementById('country-name').innerText='Country: ' +countries[subIndex].name;
	document.getElementById('coutry-population').innerText='Population: '+countries[subIndex].population +' millions';
	let j = JSON.stringify(countries[subIndex]);
	document.getElementById('country-JSON').innerText= 'Country Info in JSON format:' + j;
}

