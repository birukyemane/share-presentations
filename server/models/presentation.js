const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PresentationSchema = new Schema({
    presenter: {
        type: String,
    },
    evaluater: {
        type: String,
    },
    topic: {
        type: String,
    },
    articles: {
        type: String,
    },
    date: {
        type: Date,
    },
    keywords: {
        type: String,
    },
    summary: {
        type: String,
    }
});

const Presentation = mongoose.model('Presentation', PresentationSchema);
module.exports = Presentation;
