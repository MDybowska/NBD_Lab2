db.people.updateMany(
    { "location.city": "Moscow" }, 
    { "$set": { "location.city": "Moskwa" } }
)

db.people.count(
    { "location.city": "Moscow" }
)

db.people.count(
    { "location.city": "Moskwa" }
)