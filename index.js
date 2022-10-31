import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from news now Express server')
})

app.get('/getnews/', (req, res) => {
  const URL = 'https://guarded-beach-97677.herokuapp.com/' + 'https://newsapi.org/v2/everything?q=sbi&searchIn=title&language=en&page=1&pageSize=10&apiKey=b720fe057ca34e46809d9e53a42ac6bd';
  // res.send(URL)
  fetch(URL, {headers: {
    'origin': 'http://localhost:5000',
    'X-Requested-With': 'XMLHttpRequest'
  }}).then(data => {
    // data.header("Access-Control-Allow-Origin", "http://localhost:5500");
    console.log(data);
    return data.json();
  }).then(data => {
    res.json(data);
  })
})

app.listen(process.env.PORT || 3000, () => console.log(`Server is running`));

