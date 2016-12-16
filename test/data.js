var MongoClient = require("mongodb").MongoClient;

var medicamentos = [
	{_id: 1, nome: "Diclofenaco", fabricante: "cimed"},
	{_id: 2, nome: "Ibuprofeno", fabricante: "bayer"},
	{_id: 3, nome: "Zyprexa", fabricante: "medley"},
	{_id: 4, nome: "Zoloft", fabricante: "ache"},
	{_id: 5, nome: "Amoxicilina", fabricante: "EMS"}
];

MongoClient.connect("mongodb://127.0.0.1:27017/my_pharmaco_test", function(error, db) {
	if(error) throw err;

	db.dropDatabase(function(err) {
		if(err) return console.log(err);

		console.log("The database has been dropped successfully");

		db.collection("medicamentos").insert(medicamentos, function(err, inserted) {
			if(err) return console.log(err);

			console.log("database has been filled")

			process.exit(0);
		});

	});

});