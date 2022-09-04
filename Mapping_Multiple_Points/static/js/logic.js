// Add console.log to check to see if our code is working
console.log("working"); 


// Create the map objcet with a center and a zoom level. 
let map = L.map("mapid").setView([40.7, -94.5], 4); 

let cityData = cities; 
cityData.forEach(function(city){
    console.log(city)
    L.marker(city.location)
    .bindPopup("<h2>" +city.city + ", " + city.state + "</h2> <hr> <h3>Population "+ city.population.toLocaleString() + "</h3>")
    .addTo(map); 
});

// We create the tile layer that will be the background of our map. 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map. 
streets.addTo(map); 