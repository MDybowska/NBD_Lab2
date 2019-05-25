//MAP-REDUCE
var mapFun = function() {
    emit(this.job, { iloscPracownikow: 1 });
}

var redFun = function(key, values) {
    var reducedVal = { iloscPracownikow: 0 };

    values.forEach(function (values) {
      reducedVal.iloscPracownikow += values.iloscPracownikow;
    });

    return reducedVal;
}

printjson(db.people.mapReduce(
    mapFun,
    redFun,
    {
        out: "map-reduce3"
    }
))

//KOLEKCJA MAP-REDUCE
printjson(db.getCollection('map-reduce3').find().toArray())