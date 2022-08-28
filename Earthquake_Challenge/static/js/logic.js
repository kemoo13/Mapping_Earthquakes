// Add console.log to check to see if our code is working
console.log("working");

// Create the map object with center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

// create the tile layer that will be the background of our map, styles found in 13.2.4 (alternate layout in 13.4.1 "dark-v10")
 let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    acessToken: API_KEY
 });

// create the light view tile layer for the map
//let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  //  maxZoom: 18,
    //accessToken: API_KEY
//});

// create the dark view tile layer for the map
//let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  //  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  //  maxZoom: 18,
  //  accessToken: API_KEY/
//});

// Create the satelite view of the map
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer for both maps.
let baseMaps = {
  Streets: streets,
  Satellite_Streets: satelliteStreets
}

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [40, -98],
  zoom: 3,
  layers: [streets]
})

// Add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto routes GeoJSON URL. (the data is too large so this needs to come after the tileLayer to let the map load first)
let torontoData = "https://raw.githubusercontent.com/kemoo13/Mapping_Earthquakes/main/torontoRoutes.json";

//Then add the 'graymap' tile layer to the map
// streets.addTo(map);

// Create the line style
let myStyle = {
  color: '#ffffa1',
  weight: 2
}

// Grabbing our GeoJSON data.
d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson').then(function(data) {
    console.log(data);
  // Create a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});