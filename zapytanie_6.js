db.people.insert({
	sex: "Female",
	first_name: "Martyna",
	last_name: "Dybowska",
	job: "programmer",
	email: "martynadybowska@wp.pl",
	location: {
		city: "Warsaw",
		address: {
			streetname: "Dickensa",
			streetnumber: "2"
		}
	},
	description: "Lorem ipsum dolor sit amet",
	height: "166",
	weight: "50",
	birth_date: "1995-11-16T01:10:00Z",
	nationality: "Poland",
	credit: [
		{
			type: "mastercard",
			number: "123456789876543",
			currency: "PLN",
			balance: "11000"
		}, 
		{
			type: "mastercard",
			number: "987654321234567",
			currency: "EUR",
			balance: "12000"
		}
	]
})

printjson(db.people.findOne(
    {first_name: "Martyna", last_name: "Dybowska"}
))