const urlModel = require("../models/url");
const shortid = require("shortid");

async function handleGenerateShortUrl(req, res) {
    // 1- Create the shortid for the url
    // 2- Check if user added the url in the post request
    // 3- Create the url in the database
    // 4- Export the function

    if (!req.body.url) {
        return res.status(400).json({
            error: "Please enter the URL"
        });
    }

    const shortId = shortid.generate();
    await urlModel.create({
        shortId: shortId,
        redirectUrl: req.body.url,
        visitedHistory: []
    });

    return res.json({ id: shortId });
}

module.exports = {
    handleGenerateShortUrl
};
