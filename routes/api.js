
var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const token = process.env.GITHUB_TOKEN;
// Add the line below
const ROOT_URL = 'https://api.github.com';

router.get('/', async function(req, res, next) {
    // const ROOT_URL = 'https://api.github.com';
console.log(ROOT_URL)
  // Use Express's req.query object to 
  // access query parameters
  console.log(req.query);

  const username = req.query.username;
  console.log(`username: ${username}`)
  // If this is not a "search",
  // just render the index view
  if (!username) return res.render('api', {title: 'Github Users', userData: null});

  const options = {
    headers: {
      Authorization: `token ${token}`
    }
  };
  // Temporarily, we'll pass the token
  // in a querystring
  const userData = await fetch(`${ROOT_URL}/users/${username}`, options)
  .then(res => res.json());
  console.log(userData);
// Fetching the the user's repo data
userData.repos = await fetch(userData.repos_url, options)
  .then(res => res.json());
console.log(userData.repos[0]);
res.render('api', { userData });
});


module.exports = router;


