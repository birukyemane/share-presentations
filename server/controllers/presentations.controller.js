const Presentation = require('../models/presentation');
module.exports = {
    showPresentations:showPresentations,
    showSinglePresentation:showSinglePresentation,
    addPresentation:addPresentation,
    editPresentation:editPresentation,
    deletePresentation:deletePresentation
}

function showPresentations (req, res) {
  Presentation.find ({}, (err, presentations) => {
    if (err) {
      res.status (404).send ('Data was not found');
    }
    res.json (presentations);
  });
}

function showSinglePresentation (req, res) {
  const _id = req.params.id;
  Presentation.find ({_id}, (err, presentation) => {
    console.log (presentation);

    if (err) {
      res.status (404).send ('An error');
      return;
    }
    if (presentation.length < 1) {
      res.send ('A presentation with that id was not found');
    }
    res.json (presentation);
  });
}

function addPresentation (req, res) {
  const newPresentation = new Presentation (req.body);
  console.log(req.body)
  newPresentation
    .save (5)
    .then (() => {
      console.log ('Data is saved');      
    })
    .catch (err => console.log ('Error', err));
  res.send (req.body);
}

function editPresentation (req, res) {
  const _id = req.params.id;
  Presentation.findOne ({_id}, (err, presentation) => {
    //(presentation.name = req.body.name), (presentation.age = req.body.age);
    (presentation.presenter = req.body.presenter), (presentation.evaluater = req.body.evaluater),
    (presentation.topic = req.body.topic), (presentation.articles = req.body.articles),
    (presentation.date = req.body.date), (presentation.keywords = req.body.keywords),
    (presentation.summary = req.body.summary);
    presentation.save (err => {
      if (err) {
        res.status (404).send (err);
      }
      console.log ('Saved');
      res.send ('Presentation has been updated');
    });
  });
}

function deletePresentation (req, res) {
  const _id = req.params.id;
  Presentation.findByIdAndRemove ({_id}, (err, presentation) => {
    if (err) {
      res.status (404).send ('Unable to delete');
    }
    res.send (`A presentation with id ${_id} has been removed.`);
  });
}
