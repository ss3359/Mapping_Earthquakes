// Add console.log to check to see if our code is working
console.log("working"); 


// // Add GeoJSON data. 
// let sanFranAirport = {
//     "type" : "FeatureCollection", "features": [{
//         "type" : "Feature", 
//         "properties": {
//             "id" : "3469", 
//             "name": "San Francisco International Airport", 
//             "city" : "San Francisco", 
//             "country": "United States", 
//             "faa": "SFO", 
//             "alt": "13", 
//             "tz-offset": "-8", 
//             "dst":"A", 
//             "tz": "America/Los_Angeles"}, 
//             "geometry": {
//                 "type": "Point", 
//                 "coordinates": [-122.375, 37.61899948120117]}
//     }]
// }; 


// We create the tile layer that will be the background of our map. 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>', 
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view title layer that will be an option for our map. 
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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






// let cityData = cities; 
// cityData.forEach(function(city){
//     console.log(city)
//     L.marker(city.location)
//     .bindPopup("<h2>" +city.city + ", " + city.state + "</h2> <hr> <h3>Population "+ city.population.toLocaleString() + "</h3>")
//     .addTo(map); 
// });

// Coordinates for each point to be used in the line
// let line1 = [[
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
//   ]]; 

//   let line2 = [[37.6213, -122.3790], 
// [30.1975, -97.6664], 
// [43.6777, -79.6248], 
// [40.6413, -73.7781]]; 

// L.polyline(line2, {
//     color: "yellow"
// }).addTo(map); 
