//KONWERSJA STANÓW KONT
db.people.find({}).forEach(record => {
    db.people.update(
        {"_id": record._id},
        {
            $set: {
                credit: record.credit.map(function(credit) {
                    return {
                        type: credit.type,
                        number: credit.number,
                        currency: credit.currency,
                        balance: parseFloat(credit.balance)
                    };
                })
            }
        }
    );
});

//AGREGACJA
db.people.aggregate([
    { $unwind: "$credit" },
    { $group: 
        { 
            _id: "$credit.currency",
            sum: { $sum : "$credit.balance" }
        }
    },
    {
        $out: "agregacja2"
    }
]);

//KOLEKCJA Z AGREGACJI
printjson(db.agregacja2.find().toArray())