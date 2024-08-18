// netstat -ano | findstr "LISTENING"

import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log(req.rawHeaders)
  res.send("<h2>Hello wrld</h2>")
})

app.get('/home', (req, res) => {
  res.send("<h2>Welcome Home!</h2>")
})

app.get('/about', (req, res) => {
  res.send("Welcome About!</h2>")
})


app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
