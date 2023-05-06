import * as http from "./http.js"

const api_key = `2093278f2a30492ebbf150ef3626b63d`;
const GET_COVID = `https://api.covidactnow.org/v2/states.json?apiKey=${api_key}`;


let json_string = "";

const state = {};
const renderONE = (html) => document.getElementById('view_one').innerHTML = html;
const renderTWO = (html) => document.getElementById('view_two').innerHTML = html;
const renderTHREE = (html) => document.getElementById('view_three').innerHTML = html;
const renderFOUR = (html) => document.getElementById('view_four').innerHTML = html;
const renderFIVE = (html) => document.getElementById('view_five').innerHTML = html;

const renderDOM = (html) => document.getElementById('view').innerHTML = html;



const appStart = async () => {
    var randomWholeNumber1 = Math.floor(Math.random() * 53);
    var randomWholeNumber2 = Math.floor(Math.random() * 53);
    var randomWholeNumber3 = Math.floor(Math.random() * 53);
    var randomWholeNumber4 = Math.floor(Math.random() * 53);
    var randomWholeNumber5 = Math.floor(Math.random() * 53);
 
    const json = await http.sendGETRequest(GET_COVID);
    console.log(json);
   
    for(let i = 0; i < json.length; i++){
    renderONE(`state: ${json[randomWholeNumber1].state}<br> population: ${json[randomWholeNumber1].population}<br> cases: ${json[randomWholeNumber1].actuals.cases}<br>  deaths: ${json[randomWholeNumber1].actuals.deaths}`)
    renderTWO(`state: ${json[randomWholeNumber2].state}<br> population: ${json[randomWholeNumber2].population}<br> cases: ${json[randomWholeNumber2].actuals.cases}<br>  deaths: ${json[randomWholeNumber2].actuals.deaths}`)
    renderTHREE(`state: ${json[randomWholeNumber3].state}<br> population: ${json[randomWholeNumber3].population}<br> cases: ${json[randomWholeNumber3].actuals.cases}<br>  deaths: ${json[randomWholeNumber3].actuals.deaths}`)
    renderFOUR(`state: ${json[randomWholeNumber4].state}<br> population: ${json[randomWholeNumber4].population}<br> cases: ${json[randomWholeNumber4].actuals.cases}<br>  deaths: ${json[randomWholeNumber4].actuals.deaths}`)
    renderFIVE(`state: ${json[randomWholeNumber5].state}<br> population: ${json[randomWholeNumber5].population}<br> cases: ${json[randomWholeNumber5].actuals.cases}<br>  deaths: ${json[randomWholeNumber5].actuals.deaths}`)
    
}


    for(let x = 0; x < json.length; x++){
        json_string += `<p class = "border"> state: ${json[x].state}<br> population: ${json[x].population}<br> cases: ${json[x].actuals.cases}<br>  deaths: ${json[x].actuals.deaths}<br><br></p></p></div>`
    }

   // console.log(json_string)
    renderDOM(`${json_string}`)
}


window.start = async () => {
    appStart();
}

window.addEventListener('load', start);