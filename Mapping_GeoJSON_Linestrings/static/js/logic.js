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
    center: [44.0,-80.0], 
    zoom: 2, 
    layers: [streets]
}); 

// Accessing the Toronto airline routes GeoJSON URL. 
let torontoData = "https://raw.githubusercontent.com/ss3359/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/torontoRoutes.json";

// // Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/ss3359/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json"

// Then we add our 'graymap' tile layer to the map. 
streets.addTo(map); 

let myStyle = {
    color: "#ffffa1", 
    weight: 2
}
// Grabing our JSON data. 
d3.json(torontoData).then(function(data){
    console.log(data); 
    // Creating a GeoJSON layer with the retrieved data. 
    L.geoJson(data, {
        color: "#ffffa1", 
        weight: 2, 
        onEachFeature: function(feature, layer){
            layer.bindPopup("<h3> Airline: "+feature.properties.airline+"</h3> <hr> <h3> Destination: "+
            feature.properties.dst+"</h3>");
        }
    }).addTo(map);
}); 
//  style: myStyle
//  onEachFeature: function(feature, layer){
//     layer.bindPopup("<h3> Airline: "+ feature.properties.airline +"</h3> <hr> <h3> Destination: "
//     + feature.properties.dst+"</h3>");
// }

L.control.layers(baseMaps).addTo(map); 

