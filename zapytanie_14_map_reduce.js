//MAP-REDUCE
var mapFun = function() {
    var countBMI = function (weight, height) {
        return (weight / Math.pow(height / 100, 2));
    }

    var weight = this.weight;
    var height = this.height;

    var key = this.nationality;
    var value = {
        count: 1,
        sum: countBMI(weight, height),
        min: countBMI(weight, height),
        max: countBMI(weight, height)
    };

    emit(key, value);
}

var redFun = function(key, values) {
    var reducedVal = {
        count: 0,
        sum: 0,
        min: values[0].min,
        max: values[0].max,
    }

    values.forEach(function (value) {
        reducedVal.count += value.count;
        reducedVal.sum += value.sum;
        reducedVal.min = Math.min(reducedVal.min, value.min);
        reducedVal.max = Math.max(reducedVal.max, value.max);
    });

    return reducedVal;
}

var finFun = function (key, reducedVal) {
    reducedVal.avg = reducedVal.sum / reducedVal.count;
    delete reducedVal.sum;
    delete reducedVal.count;
    
    return reducedVal;
}

printjson(db.people.mapReduce(
    mapFun,
    redFun,
    {
        out: "map-reduce4",
        finalize: finFun
    }
))

//KOLEKCJA MAP-REDUCE
printjson(db.getCollection('map-reduce4').find().toArray())




