const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  mov_title: String,
  //mov_year: Int,
  //mov_time: Int,
  mov_lang: String,
  mov_dt_rel: String,
  mov_rel_country: String
})

module.exports = mongoose.model("movie", movieSchema)
