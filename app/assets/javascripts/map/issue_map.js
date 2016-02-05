var map = L.map('map');
var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 10, maxZoom: 18, attribution: osmAttrib});
var center = new L.LatLng(41.8811008, -87.6291208);
map.setView(center, 10);
map.addLayer(osm);

// Set options for geocoder control
var options = {
  latlng: center,
  position: 'topright',
  expanded: true
};

var geocoder = L.control.geocoder("search-F2Xk0nk", options);
geocoder.addTo(map);

// Create container layer group to allow for deleting previously added layers
var all_markers = L.layerGroup().addTo(map);

geocoder.on('select', function (e) {
  // clear existing layers from previous searches (if any)
  all_markers.clearLayers();
  var coordinates = e.feature.geometry.coordinates;
  console.log(coordinates);
  /*
  function handleGeo(geo_resp) {
    var gjLayer = L.geoJson(geo_resp, {
      // add styling
      onEachFeature: function (feature, layer) {
        //maybe add image later
        layer.bindPopup("<b>Status:</b> " + feature.properties.status_311 +
        "<br><b>Status Notes:</b> " + feature.properties.status_notes_311 +
        "<br><b>Issues:</b> " + feature.properties.issues);
      }
    });
    all_markers.addLayer(gjLayer);
    */
});