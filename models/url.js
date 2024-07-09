const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
  shortId: {
    type: String,
    required: true,
  },
  redirectUrl: {
    type: String,
    required: true,
  },
  visitedHistory: [
    {
      timestamp: {
        type: Number,
        default: Date.now,
      },
    },
  ],
},{timestamps:true});
module.exports=mongoose.model("url",urlSchema)