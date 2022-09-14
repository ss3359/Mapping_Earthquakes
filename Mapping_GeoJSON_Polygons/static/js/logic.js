// Add console.log to check to see if our code is working
console.log("working"); 


// We create the tile layer that will be the background of our map. 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>', 
    maxZoom: 18,
    accessToken: API_KEY
});


// We create the tile layer that will be the background of our map. 
// We create the tile layer that will be the background of our map. 
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>', 
    maxZoom: 18,
    accessToken: API_KEY
});


// Create the map objcet with a center at the San Francisco airport. 
let map = L.map("mapid", {
    center: [44.0,-80.0], 
    zoom: 2, 
    layers: [satelliteStreets]
}); 

// Accessing the Toronto airline routes GeoJSON URL. 
// let torontoData = "https://raw.githubusercontent.com/ss3359/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/torontoRoutes.json";

// // Accessing the neighborhood GeoJSON URL
 let torontoHoods = "https://raw.githubusercontent.com/ss3359/Mapping_Earthquakes/main/torontoNeighborhoods.json"

// Then we add our 'graymap' tile layer to the map. 
streets.addTo(map); 

let myStyle = {
    color: "#ffffa1", 
    weight: 2
}
// // Grabing our JSON data. 
d3.json(torontoHoods).then(function(data) {
    console.log(data);
    L.geoJSON(data).addTo(map);
}); 



