
var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const token = process.env.GITHUB_TOKEN;

const ROOT_URL = 'https://api.github.com';

router.get('/', async function(req, res, next) {
    // const ROOT_URL = 'https://api.github.com';
console.log(ROOT_URL)
 
  console.log(req.query);

  const username = req.query.username;
  console.log(`username: ${username}`)
 
  if (!username) return res.render('api', {title: 'Github Users', userData: null});

  const options = {
    headers: {
      Authorization: `token ${token}`
    }
  };
 
  const userData = await fetch(`${ROOT_URL}/users/${username}`, options)
  .then(res => res.json());
  console.log(userData);
// Fetching the the user's repo data
userData.repos = await fetch(userData.repos_url, options)
  .then(res => res.json());
console.log(userData.repos[0]);
res.render('api', { userData });
});

router.get('/user/repos', async function(req, res, next) {
    const username = req.user.gitUsername; 
    const options = {
      headers: {
        Authorization: `token ${token}` 
      }
    };
    const repos = await fetch(`${ROOT_URL}/users/${username}/repos`, options)
      .then(res => res.json());
    res.json(repos);
  });
  

module.exports = router;


