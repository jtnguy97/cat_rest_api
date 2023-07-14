const apiUrlState = "https://disease.sh/v3/covid-19/states/"
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

        
    async function checkState(state){
        const response = await fetch(apiUrlState + state)
        var data = await response.json();
        console.log(data);

            document.querySelector(".state").innerHTML = data.state;
            document.querySelector(".active_cases").innerHTML = "active cases: " + data.active;
            document.querySelector(".today_cases").innerHTML = "today's cases: " + data.todayCases;
            document.querySelector(".today_deaths").innerHTML = "today's deaths: " + data.todayDeaths;
            document.querySelector(".total_cases").innerHTML = "total cases: " + data.cases;
            document.querySelector(".total_deaths").innerHTML = "total deaths: " + data.deaths;
            document.querySelector(".population").innerHTML = "population: " + data.population;
        }

    searchBtn.addEventListener("click", () => {
    checkState(searchBox.value);
    })

  