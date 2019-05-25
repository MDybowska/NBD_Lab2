//MAP-REDUCE
var mapFun = function() { 
	var key = this.sex;
	var value = {
        height: this.height,
        weight: this.weight,
        count: 1
    };

	emit(key,value);
};

var redFun = function(key, values) { 
	reducedVal = {height: 0, weight:0, count:0};

	for (var idx = 0; idx < values.length; idx++) {
		reducedVal.height += values[idx].height;
		reducedVal.weight += values[idx].weight;
		reducedVal.count += values[idx].count;
	}

	return reducedVal;
	};

var finFun = function(key, reducedVal) {
	reducedVal.height = reducedVal.height/reducedVal.count;
	reducedVal.weight = reducedVal.weight/reducedVal.count;
	delete reducedVal.count;
	return reducedVal;
}


printjson(db.people.mapReduce(
	mapFun,
	redFun,
	{
		out: "map-reduce1",
		finalize: finFun
	}
))


//KOLEKCJA MAP-REDUCE
printjson(db.getCollection('map-reduce1').find().toArray())
