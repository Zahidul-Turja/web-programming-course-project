const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      // ! NEW
      type: String,
      required: true,
    },
    profession: {
      // ! NEW
      type: String,
      required: true,
    },
    about: {
      // ! NEW
      type: String,
      default:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi aliquam quasi maxime ab, perspiciatis aspernatur consectetur unde eum atque exercitationem. Excepturi aliquam quasi maxime ab, perspiciatis aspernatur consectetur unde eum atque exercitationem.",
    },
    password: {
      type: String,
      required: true,
    },
    profileImagePath: {
      type: String,
      default: "",
    },
    tripList: {
      // ? CHANGE TO bookings
      type: Array,
      default: [],
    },
    wishList: {
      type: Array,
      default: [],
    },
    propertyList: {
      type: Array,
      default: [],
    },
    reservationList: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;