//MAP-REDUCE
var ilosc;
var waluta;

var mapFun = function() {
    this.credit.forEach(function (credit) {
      ilosc = credit.balance;
      waluta = credit.currency;

      emit(waluta, ilosc);
    });
}

var redFun = function(key,values) {
    return Array.sum(values);
}

printjson(db.people.mapReduce(
    mapFun,
    redFun,
    {
        out: "map-reduce2"
    }
))

//KOLEKCJA MAP-REDUCE
printjson(db.getCollection('map-reduce2').find().toArray())
