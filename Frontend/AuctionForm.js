// frontend/src/components/AuctionForm.js

import React, { useState } from 'react';
import { createAuction, editAuction } from '../api';

const AuctionForm = ({ auction, token, fetchAuctions }) => {
  const [title, setTitle] = useState(auction ? auction.title : '');
  const [description, setDescription] = useState(auction ? auction.description : '');
  const [startingPrice, setStartingPrice] = useState(auction ? auction.startingPrice : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (auction) {
      await editAuction(auction._id, { title, description, startingPrice }, token);
    } else {
      await createAuction({ title, description, startingPrice, seller: 'USER_ID' }, token);
    }
    fetchAuctions(); // Refresh auction list
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' required />
      <input type='number' value={startingPrice} onChange={(e) => setStartingPrice(e.target.value)} placeholder='Starting Price' required />
      <button type='submit'>{auction ? 'Edit Auction' : 'Create Auction'}</button>
    </form>
  );
};

export default AuctionForm;
