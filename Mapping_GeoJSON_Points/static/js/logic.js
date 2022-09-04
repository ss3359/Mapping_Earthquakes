// Add console.log to check to see if our code is working
console.log("working"); 


// Create the map objcet with a center at the San Francisco airport. 
let map = L.map("mapid").setView([37.5, -122.5], 10); 

// Add GeoJSON data. 
let sanFranAirport = {
    "type" : "FeatureCollection", "features": [{
        "type" : "Feature", 
        "properties": {
            "id" : "3469", 
            "name": "San Francisco International Airport", 
            "city" : "San Francisco", 
            "country": "United States", 
            "faa": "SFO", 
            "alt": "13", 
            "tz-offset": "-8", 
            "dst":"A", 
            "tz": "America/Los_Angeles"}, 
            "geometry": {
                "type": "Point", 
                "coordinates": [-122.375, 37.61899948120117]}
    }]
}; 

// Grabbing our GeoJSON data. 
// L.geoJSON(sanFranAirport, {
//     // We turn to each feature into a marker on the map. 
//     pointToLayer: function(feature, latlng){
//         console.log(feature); 
//         return L.marker(latlng)
//         .bindPopup("<h2>" + feature.properties.name+ "</h2> <hr> <h3>" + feature.properties.city+ ", " + feature.properties.country); 
//     }
// }).addTo(map); 

// Grabing our JSON data. 
L.geoJSON(sanFranAirport, {
    onEachFeature: function(feature, layer){
        console.log(layer);
        layer.bindPopup("<h2> Airport Code: " + feature.properties.faa+ "</h2> <hr> <h3> Airport Name: " + feature.properties.name);
    }
}).addTo(map); 

// We create the tile layer that will be the background of our map. 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>', 
    maxZoom: 18,
    accessToken: API_KEY
});


// Then we add our 'graymap' tile layer to the map. 
streets.addTo(map); 








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
