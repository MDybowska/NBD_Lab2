db.people.count()
db.people.remove({height:{$gt:"190"}})
db.people.count()