const busStops = [
  [79.1972,9.9800],
  [79.2295,10.0152],
  [79.2318,10.0396],
  [79.2240,10.1283],
  [79.0023,10.1692],
  [79.0045,10.4007],
  [78.8001,10.3833],
  [78.7047,10.7905],
  [76.6785,9.2250],
  [77.1246,11.0254],
  [76.9558,11.0168],
  // [-71.118625, 42.374863],
];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoidWRoYXlhc2FubXVnYW0iLCJhIjoiY2t4OGhnOTYwMGx5djJvazM2MjloaXRxcCJ9.eu5JQHsyEh6pr3VL9X88ng';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [79.0045,10.4007],
  zoom: 14,
});
var marker = new mapboxgl.Marker()
          .setLngLat([79.0045,10.4007])
           .addTo(map);

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  setTimeout(() => {
    if(counter>=busStops.length)
    return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  },1000);

  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}