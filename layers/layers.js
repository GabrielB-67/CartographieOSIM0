var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_OSIMduGrandEst_1 = new ol.format.GeoJSON();
var features_OSIMduGrandEst_1 = format_OSIMduGrandEst_1.readFeatures(json_OSIMduGrandEst_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSIMduGrandEst_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSIMduGrandEst_1.addFeatures(features_OSIMduGrandEst_1);cluster_OSIMduGrandEst_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_OSIMduGrandEst_1
});
var lyr_OSIMduGrandEst_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_OSIMduGrandEst_1, 
                style: style_OSIMduGrandEst_1,
                interactive: true,
                title: '<img src="styles/legend/OSIMduGrandEst_1.png" /> OSIM du Grand Est'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_OSIMduGrandEst_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_OSIMduGrandEst_1];
lyr_OSIMduGrandEst_1.set('fieldAliases', {'Nom': 'Nom', 'Pays': 'Pays', 'Ville': 'Ville', 'CP': 'CP', 'Départeme': 'Départeme', 'Adresse': 'Adresse', 'Mail': 'Mail', 'Site': 'Site', 'Actions à': 'Actions à', 'Zones inte': 'Zones inte', 'Pays d\'int': 'Pays d\'int', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_OSIMduGrandEst_1.set('fieldImages', {'Nom': 'TextEdit', 'Pays': 'TextEdit', 'Ville': 'TextEdit', 'CP': 'TextEdit', 'Départeme': 'TextEdit', 'Adresse': 'Hidden', 'Mail': 'TextEdit', 'Site': 'TextEdit', 'Actions à': 'Hidden', 'Zones inte': 'TextEdit', 'Pays d\'int': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_OSIMduGrandEst_1.set('fieldLabels', {'Nom': 'header label', 'Pays': 'no label', 'Ville': 'header label', 'CP': 'no label', 'Départeme': 'header label', 'Mail': 'header label', 'Site': 'header label', 'Zones inte': 'header label', 'Pays d\'int': 'header label', });
lyr_OSIMduGrandEst_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});