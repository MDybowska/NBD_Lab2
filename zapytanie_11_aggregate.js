//KONWERSJA WYSOKOŚCI I WAGI
db.people.find().forEach( function (x) {
	x.height = parseFloat(x.height);
	x.weight = parseFloat(x.weight);
	db.people.save(x);
});

//AGREGACJA
db.people.aggregate([
	{ $group: 
		{
			_id: "$sex", 
			height: {$avg: "$height"}, 
			weight: {$avg: "$weight"}
		}
	},
	{
		$out: "agregacja1"
	}
])

//KOLEKCJA Z AGREGACJI
printjson(db.agregacja1.find().toArray())