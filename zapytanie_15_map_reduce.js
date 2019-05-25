//MAP-REDUCE
var mapFun = function() {
    this.credit.forEach(function(credit) {
        emit(credit.currency, { count: 1, balance: credit.balance });
    });
}

var redFun = function(key, values) {
    var reducedVal = { count: 0, balance: 0 }

    values.forEach(function(value) {
        reducedVal.count += value.count;
        reducedVal.balance += value.balance;
    });

    return reducedVal;
}

var finFun = function (key, reducedVal) {
    reducedVal.avg = reducedVal.balance / reducedVal.count;
    reducedVal.sum = reducedVal.balance;
    delete reducedVal.balance;
    delete reducedVal.count;

    return reducedVal;
}

printjson(db.people.mapReduce(
    mapFun,
    redFun,
    {
        query: { "nationality": "Poland", "sex": "Female" },
        out: "map-reduce5",
        finalize: finFun
    }
))

//KOLEKCJA MAP-REDUCE
printjson(db.getCollection('map-reduce5').find().toArray())




