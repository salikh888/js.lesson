var REGION_ID_COLL = 1;
var text = 'Книга1.csv';

var regions = [];


text
    .split('\n')
    .forEach(function(line, i, d) {
        var item = line
            .trim()
            .split(';');
        if( !region ) {
            regionsMap[regionId] = region = {};

            regions.push({

                "title" : {
                    "ru" : item[REGION_ID_COLL],
                    "uz" : item[REGION_ID_COLL]
                },
                "parent" : null
            });
        };
