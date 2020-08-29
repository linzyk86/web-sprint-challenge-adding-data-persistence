const db = require("./data/config")

// -   [ ] adding resources.
//     -   [ ] retrieving a list of resources.
//     -   [ ] adding projects.
//     -   [ ] retrieving a list of projects.
//     -   [ ] adding tasks.
//     -   [ ] retrieving a list of tasks. 

function find() {
	return db("projects")
		
}
function addProject(project) {
  return db("projects")
    .insert(project, "id")
}

function findResouces() {
	return db("resources")		
}

function addResouces(resource) {
  return db("resources")
    .insert(resource, "id")
}

function findTasks(id) {
	return db("tasks")
    .leftJoin("projects", "projects.name", "projects.description")
    .where("tasks.project_id", id)	
    .select("tasks.project_id","tasks.description", "projects.name as project_name", "projects.description as project_description","tasks.completed")	
}


function addTasks(tasks) {
  return db("tasks")
    .insert(tasks, "id")
}



module.exports = {
	find, addProject, findResouces, addResouces, findTasks, addTasks
}