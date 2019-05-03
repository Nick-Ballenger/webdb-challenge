const db = require('../data/dbconfig');

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};


function find() {
  return db('actions');
}

function findById(id) {
  
  return db('actions')
  .select(
      'id',
      'action_description as description',
      'notes',
      'action_complete as complete'
  )
  .where('project_id', id);
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
