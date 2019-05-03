const db = require('../data/dbconfig');

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};


function find() {
  return db('projects');
}

function findById(id) {
  return db('projects')
    .where({ id })
    .first();
}


function add(projects) {
  return db('projects')
    .insert(projects, 'id')
    .then(([id]) => {
      return findById(id);
    });
}

function update(id, changes) {
  return db('projects')
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
  return db('projects')
    .where({ id })
    .del();
}
