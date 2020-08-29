exports.seed = async function(knex) {
	await knex("tasks").insert([   
		{ description: "Task 1", project_id: 1 ,completed: false},
	  { description: "Task 2", project_id:2, completed: false},
	])
}
