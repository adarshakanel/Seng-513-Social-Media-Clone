const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose")
const userRoutes = require("./routes/User")
const postRoutes = require('./routes/Post')
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/user", userRoutes);
app.use("/post", postRoutes);

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
// get driver connection
const dbUrl = process.env.URL;

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Mongo Connection open!")
}).catch(err => {
    console.log("Mongo Error spotted!");
    console.log(err);
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});