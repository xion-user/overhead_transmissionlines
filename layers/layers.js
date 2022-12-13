ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:28992").setExtent([-76883.994096, 327414.134795, 391756.143826, 658195.635357]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ProvinceBoundary_2 = new ol.format.GeoJSON();
var features_ProvinceBoundary_2 = format_ProvinceBoundary_2.readFeatures(json_ProvinceBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_ProvinceBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvinceBoundary_2.addFeatures(features_ProvinceBoundary_2);
var lyr_ProvinceBoundary_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProvinceBoundary_2, 
                style: style_ProvinceBoundary_2,
                interactive: false,
    title: 'Province Boundary<br />\
    <img src="styles/legend/ProvinceBoundary_2_0.png" /> Drenthe<br />\
    <img src="styles/legend/ProvinceBoundary_2_1.png" /> Flevoland<br />\
    <img src="styles/legend/ProvinceBoundary_2_2.png" /> Fryslân<br />\
    <img src="styles/legend/ProvinceBoundary_2_3.png" /> Gelderland<br />\
    <img src="styles/legend/ProvinceBoundary_2_4.png" /> Groningen<br />\
    <img src="styles/legend/ProvinceBoundary_2_5.png" /> Limburg<br />\
    <img src="styles/legend/ProvinceBoundary_2_6.png" /> Noord-Holland<br />\
    <img src="styles/legend/ProvinceBoundary_2_7.png" /> North-Barabant<br />\
    <img src="styles/legend/ProvinceBoundary_2_8.png" /> Overijssel<br />\
    <img src="styles/legend/ProvinceBoundary_2_9.png" /> Utrecht<br />\
    <img src="styles/legend/ProvinceBoundary_2_10.png" /> Zeeland<br />\
    <img src="styles/legend/ProvinceBoundary_2_11.png" /> Zuid-Holland<br />'
        });
var format_Netherlands_transmission_lines_3 = new ol.format.GeoJSON();
var features_Netherlands_transmission_lines_3 = format_Netherlands_transmission_lines_3.readFeatures(json_Netherlands_transmission_lines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_Netherlands_transmission_lines_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Netherlands_transmission_lines_3.addFeatures(features_Netherlands_transmission_lines_3);
var lyr_Netherlands_transmission_lines_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Netherlands_transmission_lines_3, 
                style: style_Netherlands_transmission_lines_3,
                interactive: true,
    title: 'Netherlands_transmission_lines<br />\
    <img src="styles/legend/Netherlands_transmission_lines_3_0.png" /> 110 kV<br />\
    <img src="styles/legend/Netherlands_transmission_lines_3_1.png" /> 150 kV<br />\
    <img src="styles/legend/Netherlands_transmission_lines_3_2.png" /> 220 kV<br />\
    <img src="styles/legend/Netherlands_transmission_lines_3_3.png" /> 380 kV<br />\
    <img src="styles/legend/Netherlands_transmission_lines_3_4.png" /> 380 kV, 110 kV<br />\
    <img src="styles/legend/Netherlands_transmission_lines_3_5.png" /> 380 kV, 150 kV<br />\
    <img src="styles/legend/Netherlands_transmission_lines_3_6.png" /> 380 kV, 220 kV<br />\
    <img src="styles/legend/Netherlands_transmission_lines_3_7.png" /> 50 kV<br />\
    <img src="styles/legend/Netherlands_transmission_lines_3_8.png" /> <br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_ProvinceBoundary_2.setVisible(true);lyr_Netherlands_transmission_lines_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_ProvinceBoundary_2,lyr_Netherlands_transmission_lines_3];
lyr_ProvinceBoundary_2.set('fieldAliases', {'text': 'text', });
lyr_Netherlands_transmission_lines_3.set('fieldAliases', {'id': 'id', 'lijncode': 'lijncode', 'lijnnaam': 'lijnnaam', 'spanning': 'spanning', 'indicatiev': 'indicatiev', 'netbeheerd': 'netbeheerd', 'contact': 'contact', });
lyr_ProvinceBoundary_2.set('fieldImages', {'text': 'TextEdit', });
lyr_Netherlands_transmission_lines_3.set('fieldImages', {'id': 'Range', 'lijncode': 'TextEdit', 'lijnnaam': 'TextEdit', 'spanning': 'TextEdit', 'indicatiev': 'TextEdit', 'netbeheerd': 'TextEdit', 'contact': 'TextEdit', });
lyr_ProvinceBoundary_2.set('fieldLabels', {'text': 'inline label', });
lyr_Netherlands_transmission_lines_3.set('fieldLabels', {'id': 'header label', 'lijncode': 'header label', 'lijnnaam': 'header label', 'spanning': 'header label', 'indicatiev': 'header label', 'netbeheerd': 'header label', 'contact': 'header label', });
lyr_Netherlands_transmission_lines_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});