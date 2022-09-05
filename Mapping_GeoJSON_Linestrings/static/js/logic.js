// Add console.log to check to see if our code is working
console.log("working"); 


// We create the tile layer that will be the background of our map. 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>', 
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view title layer that will be an option for our map. 
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>', 
    maxZoom: 18, 
    accessToken: API_KEY
}); 

let baseMaps = {
    Street: streets, 
    Dark: dark, 

}; 

// Create the map objcet with a center at the San Francisco airport. 
let map = L.map("mapid", {
    center: [30,30], 
    zoom: 2, 
    layers: [streets]
}); 

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/ss3359/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json"

// Then we add our 'graymap' tile layer to the map. 
streets.addTo(map); 

// Grabing our JSON data. 
d3.json(airportData).then(function(data){
    console.log(data); 
    // Creating a GeoJSON layer with the retrieved data. 
    L.geoJSON(data).addTo(map);
   
}); 


L.control.layers(baseMaps).addTo(map); 

