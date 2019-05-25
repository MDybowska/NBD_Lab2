//AGREGACJA
db.people.aggregate([
    {
        $group: { 
            _id: "$job",
            count: { $sum: 1 }
        }
    },
    {
        $out: "agregacja3"
    }
]);

//KOLEKCJA Z AGREGACJI
printjson(db.agregacja3.find().toArray())