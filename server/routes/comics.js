const express = require('express');
const router = express.Router();
const Comic = require('../models/comic');


// get all panel01
router.get('/panel01', async (req, res) => {
  try {
    const panel01 = await Comic.findOne({ panelId: 'panel01' });
    console.log(panel01); 
    res.json(panel01);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// add new panel
router.post('/', async (req, res) => {
  const { imagePath } = req.body;
  try {
    const panel01 = new Comic({
      panelId: 'panel01',
      imagePath : 'https://res.cloudinary.com/dga6z71xk/image/upload/v1726356699/01_gclzmo.png',
    });
    await panel01.save(); // saved this asset
    res.status(201).json(panel01);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
