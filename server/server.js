require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;
// app.get("/", (req, res) => res.type('html').send(html));

// middleware
app.use(cors()); // express
app.use(express.json()); // parse incoming JSON requests

// mongoDB connection
console.log('Mongo URI:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('mongoDB connected'))
  .catch(err => console.error('mongoDB connection err:', err));

  // import comic routes
const comicRoutes = require('./routes/comics');

// use routes
app.use('/api/comics', comicRoutes);

// serve static files
app.use(express.static(path.join(__dirname, '../homestuck/act1')));

// simple test route
app.get('/', (req, res) => {
  res.send('comic API');
});

// fallback route for all unknown requests
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../homestuck/act1', 'index.html'));
// });

// start server
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});


// cloudinary

// import { v2 as cloudinary } from 'cloudinary';
const cloudinary = require('cloudinary').v2;

(async function() {

    cloudinary.config({ 
        cloud_name: 'dga6z71xk', 
        api_key: '976141746436927', 
        api_secret: process.env.CLOUDINARY_KEY
    });
    
})();


