//KONWERSJA NA INT  - ze wzgledu na starszą wersję bazy operator $pow nie działa na doublach.
db.people.find().forEach( function (x) {
    x.height = parseInt(x.height);
    x.weight = parseInt(x.weight);
    db.people.save(x);
});

//AGREGACJA
db.people.aggregate([
    { 
        $project : {
            nationality: 1,
            weight: 1,
            height: 1,
        }
    },
    {
        $group: { 
            _id: "$nationality",
            maxBMI: { $max: { $divide: ["$weight", { $pow: [ { $divide: ["$height", 100] }, 2]} ]} },
            minBMI: { $min: { $divide: ["$weight", { $pow: [ { $divide: ["$height", 100] }, 2]} ]} },
            avgBMI: { $avg: { $divide: ["$weight", { $pow: [ { $divide: ["$height", 100] }, 2]} ]} }
        }
    },
    {
        $out: "agregacja4"
    }
]);

//KOLEKCJA Z AGREGACJI
printjson(db.agregacja4.find().toArray())