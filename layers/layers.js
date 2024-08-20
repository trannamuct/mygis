var wms_layers = [];


        var lyr_GGS_0 = new ol.layer.Tile({
            'title': 'GGS',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

lyr_GGS_0.setVisible(true);
var layersList = [lyr_GGS_0];
