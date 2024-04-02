const mongoose = require("mongoose");
const offreSchema = new mongoose.Schema(
    {
      offre:{
        type: String,
        unique: true,
        required:true,
      } ,
      net:{
        type: Number,
        unique: true,
        required:true,
      },
      days:{
        type: Number,
        unique: true,
        required:true,
      }  ,
      user: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
    ],
    })
module.export = mongoose.model("Offre",offreSchema);