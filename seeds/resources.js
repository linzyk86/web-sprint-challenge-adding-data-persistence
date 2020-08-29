exports.seed = async function(knex) {
	await knex("resources").insert([   
		{ name: "Resource 1", description: "Pen"},
	  { name: "Resource 2", description: "Paper"},
	])
}
