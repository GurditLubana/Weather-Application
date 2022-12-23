
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f450c78fb7msh8765990528797f3p1cda5ejsn15acb181d563",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

fetch(
  "https://weatherapi-com.p.rapidapi.com/forecast.json?q=Winnipeg&days=3",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);


    // document.getElementById("country").innerHTML = response.location.country;
    // document.getElementById("lat").innerHTML = response.lat;
    // document.getElementById("localtime").innerHTML = response.localtime;
    // document.getElementById("localtime_epoch").innerHTML = response.localtime_epoch;
    // document.getElementById("lon").innerHTML = response.lon;
    document.getElementById("name").innerHTML = response.location.name;
    // document.getElementById("region").innerHTML = response.location.region;
    document.getElementById("condition").innerHTML = response.current.condition.text;
    // document.getElementById("imgSrc").innerHTML = response.current.condition.icon
    // document.getElementById("tz_id").innerHTML = response.tz_id;

document.getElementById("feelslike_c").innerHTML = response.current.feelslike_c;
// document.getElementById("feelslike_f").innerHTML = response.current.feelslike_f;
// document.getElementById("gust_kph").innerHTML = response.current.gust_kph;
// document.getElementById("gust_mph").innerHTML = response.current.gust_mph;
document.getElementById("humidity").innerHTML = response.current.humidity;
// document.getElementById("is_day").innerHTML = response.current.is_day;
// document.getElementById("last_updated").innerHTML = response.current.last_updated;
// document.getElementById("last_updated_epoch").innerHTML = response.current.last_updated_epoch;
// document.getElementById("precip_in").innerHTML = response.current.precip_in;
document.getElementById("precip_mm").innerHTML = response.current.precip_mm;
document.getElementById("pressure_in").innerHTML = response.current.pressure_in;
// document.getElementById("pressure_mb").innerHTML = response.current.pressure_mb;
document.getElementById("temp_c").innerHTML = response.current.temp_c;
// document.getElementById("temp_f").innerHTML = response.current.temp_f;
document.getElementById("uv").innerHTML = response.current.uv;

document.getElementById("vis_km").innerHTML = response.current.vis_km;
// document.getElementById("vis_miles").innerHTML = response.current.vis_miles;
// document.getElementById("wind_degree").innerHTML = response.current.wind_degree;
// document.getElementById("wind_dir").innerHTML = response.current.wind_dir;
document.getElementById("wind_kph").innerHTML = response.current.wind_kph;
// document.getElementById("wind_mph").innerHTML = response.current.wind_mph;
document.getElementById("maxtemp_c").innerHTML = response.forecast.forecastday[0].day.maxtemp_c
document.getElementById("mintemp_c").innerHTML = response.forecast.forecastday[0].day.mintemp_c

  })
  .catch((err) => console.error(err));
  
 