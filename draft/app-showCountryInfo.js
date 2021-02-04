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

// <!-- App: show info of Countries -->
// <div class="div-border" id='app-showCountryInfo' id='sub-grid'>
// 	<h3 style="text-align: center">Show Info of Countries</h3>
// 	<br>
// 	<div id='sub-grid'>
// 		<div>
// 			<img src="" id="country-flag" alt="no image" width="150" height='90'>
// 		</div>
// 		<div style="padding-top: 30px;">
// 			<div id="country-name"></div>
// 			<div id="coutry-population"></div>
// 		</div>
// 	</div>  
// 	<div id='country-JSON' style="font-size:small"></div>          
// </div>



// window.addEventListener("load", myInit, true); 
//         function myInit(){  
//             //load the function of app-showCountryInfo
//             setInterval(showCountryInfo,1100);
//             // show the current time with the time running 
//             setTimeout(setInterval(startTime,300),300);
//             generateSelect();
//             processWeatherData("Berlin");
//             };   
    