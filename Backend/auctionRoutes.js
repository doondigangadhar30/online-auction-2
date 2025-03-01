// backend/routes/auctionRoutes.js

const express = require('express');
const Auction = require('../models/Auction');
const router = express.Router();

// Create Auction
router.post('/create', async (req, res) => {
  try {
    const { title, description, startingPrice, seller } = req.body;
    const auction = new Auction({ title, description, startingPrice, seller });
    await auction.save();
    res.status(201).json(auction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Edit Auction
router.put('/edit/:id', async (req, res) => {
  try {
    const { title, description, startingPrice } = req.body;
    const auction = await Auction.findByIdAndUpdate(req.params.id, {
      title, description, startingPrice
    }, { new: true });
    res.json(auction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete Auction
router.delete('/delete/:id', async (req, res) => {
  try {
    await Auction.findByIdAndDelete(req.params.id);
    res.json({ message: 'Auction deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
