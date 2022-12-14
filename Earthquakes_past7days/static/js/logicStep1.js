// Add console.log to check to see if our code is working
console.log("working"); 

// We create the tile layer that will be the background of our map. 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>', 
    maxZoom: 18,
    accessToken: API_KEY
});


 
// We create the tile layer that will be the background of our map. 
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>', 
    maxZoom: 18,
    accessToken: API_KEY
});


// Create a base layer that holds both maps. 
let baseMaps = {
    "Streets": streets, 
    "Satellite": satelliteStreets
}; 

// Create the map objcet with a center at the San Francisco airport. 
let map = L.map("mapid", {
    center: [39.5,-98.5], 
    zoom: 3, 
    layers: [streets]
}); 

// Pass our map layers into our layer control and add the layer control to the map. 
L.control.layers(baseMaps).addTo(map); 


// // Grabing our JSON data. 
d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson').then(function(data) {
    // Creating a GeoJSON layer with the retrieved data. 
    L.geoJSON(data).addTo(map);
}); 


