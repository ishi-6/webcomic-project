// models/comic.js
const mongoose = require('mongoose');

const ComicSchema = new mongoose.Schema({
  panelId: {type: String},
  imagePath: { type: String, required: true }, // path to the comic panel
  // description: { type: String },
  // pageNumber: { type: Number },
});

module.exports = mongoose.model('Comic', ComicSchema);
