const mongoose = require("mongoose");

const pcSchema = new mongoose.Schema({
  pcName: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  userName: {
    type: String,
    default: null,
  },
  // isRequested: {
  //   type: Boolean,
  //   default: false,
  // },
  // requesterName: {
  //   type: String,
  //   required: true,
  // },
});

const PC = mongoose.model("PC", pcSchema);

module.exports = PC;
