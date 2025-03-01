// frontend/src/api.js

const API_URL = 'http://localhost:5000/api';

export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const loginUser = async (userData) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const createAuction = async (auctionData, token) => {
  const response = await fetch(`${API_URL}/auctions/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(auctionData),
  });
  return response.json();
};

export const editAuction = async (id, auctionData, token) => {
  const response = await fetch(`${API_URL}/auctions/edit/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(auctionData),
  });
  return response.json();
};

export const deleteAuction = async (id, token) => {
  const response = await fetch(`${API_URL}/auctions/delete/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};
