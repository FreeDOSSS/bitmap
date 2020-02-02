const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statisticSchema = new Schema(
  {
    users_id: Number,
    date: String,
    page_views: Number,
    clicks: Number
  },
  {
    timestamps: true
  }
);

const STATISTIC = mongoose.model("STATISTIC", statisticSchema);

module.exports = STATISTIC;
