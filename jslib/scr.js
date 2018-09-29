var REGION_ID_COLL = 3;
var REGION_NAME_RU_COLL = 4;
var REGION_NAME_UZ_COLL = 5;
var SUBREGION_ID_COLL = 6;
var SUBREGION_NAME_RU_COLL = 7;
var SUBREGION_NAME_UZ_COLL = 8;

var text = ``;

var regions = [];
var subRegions = [];
var regionsMap = {};

text
    .split('\n')
    .forEach(function(line, i, d) {
        var item = line
            .trim()
            .split(';');

        if( item.length < 9 ) {
            console.error(i, line);
            console.warn(item);
            return;
        }

        var regionId = item[REGION_ID_COLL];
        var region = regionsMap[regionId];

        if( !region ) {
            regionsMap[regionId] = region = {};

            regions.push({
                "value" : regionId,
                "title" : {
                    "ru" : item[REGION_NAME_RU_COLL],
                    "uz" : item[REGION_NAME_UZ_COLL]
                },
                "filter" : null
            });
        }

        var subregionId = item[SUBREGION_ID_COLL].substr(4);
        var subregion = region[subregionId];
        if( !subregion ) {
            region[subregionId] = true;
            subRegions.push({
                "value" : subregionId,
                "title" : {
                    "ru" : item[SUBREGION_NAME_RU_COLL],
                    "uz" : item[SUBREGION_NAME_UZ_COLL]
                },
                "filter" : regionId
            });
        }
    });

console.log('REGIONS');
console.log(regions
    .sort(function(a, b) {
        if( a.title.ru < b.title.ru) return -1;
        if( a.title.ru > b.title.ru) return 1;
        return 0;
    })
);
console.log('');
console.log('SUBREGIONS');
console.log(subRegions
    .sort(function(a, b) {
        if( a.title.ru < b.title.ru) return -1;
        if( a.title.ru > b.title.ru) return 1;
        return 0;
    })
    .sort(function(a, b) {
        if( a.filter < b.filter) return -1;
        if( a.filter > b.filter) return 1;
        return 0;
    })
);