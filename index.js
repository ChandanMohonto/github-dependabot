const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  axios.get('https://api.github.com')
    .then(response => {
      res.send(`GitHub API Response: ${response.data.current_user_url}`);
    })
    .catch(error => {
      res.send(`Error: ${error.message}`);
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
