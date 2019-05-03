const db = require('../data/dbconfig');

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};


function find(){
  return db('actions')
            .join("projects", "actions.project_id", '=', "projects.id")
            .select("actions.id", "actions.action_name","actions.action_description","actions.action_notes",{ project: "projects.project_name" })
}

function findById(id) {
  return db('actions')
    .where({ id })
    .first();
}

function add(actions) {
  return db('actions')
    .insert(actions, 'id')
    .then(([id]) => {
      return findById(id);
    });
}

function update(id, changes) {
  return db('actions')
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        return findById(id);
      } else {
        return null;
      }
    });
}

function remove(id) {
  return db('actions')
    .where({ id })
    .del();
}
