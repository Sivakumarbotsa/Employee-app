const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const bodyParser = require("body-parser");
const userRouter = require('./routes/user');
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("✅ Employee Registration API is working!");
});


mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("MongoDB connection error:", err);

});


app.use(bodyParser.json());
app.use('/api/emp', userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});