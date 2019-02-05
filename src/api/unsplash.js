import axios from 'axios';

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com/search/photos',
  headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Client-ID dffeca5423aae4e830fa70fca31a0551a2ea5bf7be596b886749a8eb125dcf51'
  }
});

export default unsplash;