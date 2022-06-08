const axios = require('axios');

const instance = axios.create({
  baseUrl: process.env.REACT_APP_API_URL,
});

export { instance };
