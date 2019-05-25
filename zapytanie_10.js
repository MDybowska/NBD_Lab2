printjson(db.people.find(
	{job:"Editor"},
	{first_name:1, email:1}
).toArray())

db.people.updateMany({job:"Editor"},{"$unset" :{email:1}})

printjson(db.people.find(
	{job:"Editor"},
	{first_name:1, email:1}
).toArray())