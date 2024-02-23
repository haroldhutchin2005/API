const express = require('express');
const axios = require('axios');

const router = express.Router();

router.use((req, res, next) => {
  console.log(`Received a request at ${new Date().toLocaleString()}`);
  next();
});

router.get('/ai', async (req, res) => {
  try {
    const content = encodeURIComponent(req.query.content);
    const apiUrl = `https://aiapiviafastapiwithimagebyjonellmagallanes.replit.app/ai?content=${content}`;

    const axiosResponse = await axios.get(apiUrl);
    const content = {
      request_count: 1,
      airesponse: axiosResponse.data.airesponse,
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;