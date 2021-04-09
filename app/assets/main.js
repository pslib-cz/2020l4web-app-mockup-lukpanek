function initMap() {

    map = new OpenLayers.Map("map");
    map.addLayer(new OpenLayers.Layer.OSM());

    let layer_switcher= new OpenLayers.Control.LayerSwitcher({});

    var lonLat = new OpenLayers.LonLat(15.057365389450066, 50.765668103494704)
        .transform(
            new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
            map.getProjectionObject() // to Spherical Mercator Projection
        );
    var zoom=18;
    map.setCenter (lonLat, zoom);
}

$('.tran-button').click(() => {

});