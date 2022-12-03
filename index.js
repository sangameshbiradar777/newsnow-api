import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from news now Express server");
});

app.get("/getnews/:url", (req, res) => {
  const URL = "https://proxy-server-1s6r.onrender.com/" + req.params.url;
  // res.send(URL)
  fetch(URL, {
    headers: {
      origin: "http://localhost:5000",
      "X-Requested-With": "XMLHttpRequest",
    },
  })
    .then((data) => {
      // data.header("Access-Control-Allow-Origin", "http://localhost:5500");
      console.log(data);
      return data.json();
    })
    .then((data) => {
      console.log(data);
      res.send(data);
    });
});

app.listen(process.env.PORT || 3000, () => console.log(`Server is running`));
