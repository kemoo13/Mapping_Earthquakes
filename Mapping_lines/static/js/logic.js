// Add console.log to check to see if our code is working
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the line
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [30.2672, -97.7431],
    [43.6777, -79.6248],
    [40.7128, -74.0060]    
];

// Create a polyline
L.polyline(line, {
    color: "blue",
    dashArray: 5,
    opacity: 0.5

}).addTo(map);

// Get data from cities.js
// let cityData = cities;


// create the tile layer that will be the background of our map, styles found in 13.2.4 (alternate layout in 13.4.1 "dark-v10")
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    acessToken: API_KEY
});

//Then add the 'graymap' tile layer to the map
streets.addTo(map);