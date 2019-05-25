printjson(db.people.find(
	{birth_date:{$gte:"2001-01-01T00:00:00.000Z",$lte:"2100-12-31T00:00:00.000Z"}},
	{"first_name":1,"last_name":1,"location.city":1}
).toArray())