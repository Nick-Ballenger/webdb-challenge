const router = require('express').Router();

const Action = require('./actionModel');

router.get('/', (req, res) => {
    Action.find()
    .then(Action => {
      res.status(200).json(Action);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: 'We ran into an error retrieving the Action' });
    });
});

router.get('/:id', async (req, res) => {
  try {
    const action = await Action.findById(req.params.id);
    if (project) {
      res.status(200).json(action);
    } else {
      res.status(404).json({ message: 'We could not find the action' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error retrieving the action' });
  }
});

router.post('/', async (req, res) => {
  const Action = req.body;

  if (Action.name) {
    try {
      const inserted = await Action.add(Action);
      res.status(201).json(inserted);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error creating the Action' });
    }
  } else {
    res.status(400).json({ message: 'Please provide name of the Action' });
  }
});

router.put('/:id', async (req, res) => {
  const changes = req.body;

  if (changes.name) {
    try {
      const updated = await Action.update(req.params.id, changes);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({
          message: 'That Action does not exist',
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error updating the Action' });
    }
  } else {
    res.status(400).json({
      message: 'Please provide the name of the Action',
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const count = await Action.remove(req.params.id);
    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({
        message: 'That Action does not exist, perhaps it was deleted already',
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error removing the Action' });
  }
});

module.exports = router;
