exports.seed = async function(knex) {
	await knex("projects").insert([   
		{ name: "Project 1", description: "Stuff", completed: true },
	  { name: "Project 2", description: "More Stuff", completed: false },,
	])
}
