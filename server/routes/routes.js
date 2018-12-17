const express = require ('express');
const {
  showPresentations,
  showSinglePresentation,
  addPresentation,
  editPresentation,
  deletePresentation,
} = require ('../controllers/presentations.controller');
const presentationRouter = express.Router ();

presentationRouter.get('/',(req, res) => res.send('Check /presentations route if there presentation.'))
presentationRouter.get ('/presentations', showPresentations);
presentationRouter.get('/presentations/:id',showSinglePresentation);
presentationRouter.post('/presentations', addPresentation);
presentationRouter.put('/presentations/:id', editPresentation);
presentationRouter.delete('/presentations/:id', deletePresentation);


module.exports = presentationRouter;

