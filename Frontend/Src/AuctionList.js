// frontend/src/components/AuctionList.js

import React, { useEffect, useState } from 'react';
import { deleteAuction } from '../api';

const AuctionList = ({ auctions, token, fetchAuctions }) => {
  const handleDelete = async (id) => {
    await deleteAuction(id, token);
    fetchAuctions(); // Refresh auction list after deletion
  };

  return (
    <div>
      {auctions.map((auction) => (
        <div key={auction._id}>
          <h3>{auction.title}</h3>
          <p>{auction.description}</p>
          <button onClick={() => handleDelete(auction._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AuctionList;
