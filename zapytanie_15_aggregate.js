//AGREGACJA
db.people.aggregate([
    { $match: { "sex": "Female", "nationality": "Poland" } },
    { $unwind: "$credit" },
    {
        $group: { 
            _id: "$credit.currency",
            avgerage: { $avg: "$credit.balance" },
            sum: { $sum: "$credit.balance" },
        }
    },
    {
        $out: "agregacja5"
    }
]);
//KOLEKCJA Z AGREGACJI
printjson(db.agregacja5.find().toArray())