const express = require("express");
const app = express();
const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connect");
const urlModel = require("./models/url");
connectToMongoDB("mongodb://127.0.0.1:27017/urlshortnerdb").then(() =>
  console.log("connected to mongodb")
);

app.use(express.json());
app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const enrty = await urlModel.findOneAndUpdate(
    { shortId: shortId },
    { $push: { visitedHistory: { timpstamp: Date.now() } } }
  );
  res.redirect(enrty.redirectUrl);
});

app.listen(8001);
