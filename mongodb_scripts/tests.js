var medicamentos = [
	{_id: 1, nome: "Diclofenaco", fabricante: "cimed"},
	{_id: 2, nome: "Ibuprofeno", fabricante: "bayer"},
	{_id: 3, nome: "Zyprexa", fabricante: "medley"},
	{_id: 4, nome: "Zoloft", fabricante: "ache"},
	{_id: 5, nome: "Amoxicilina", fabricante: "EMS"}
];

db.test2.insert(medicamentos);