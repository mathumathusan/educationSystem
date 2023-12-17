const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = 8080;
const user = require("./routes/users");
const school=require("./routes/school")

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/education')
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error', err);
  });

app.use(user);
app.use(school);

app.get("/", (req, res) => {
  res.json("hi");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
