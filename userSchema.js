const mongoose = require("mongoose");

// Define a schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profile: {
      firstName: String,
      lastName: String,
      avatar: String,
    },
  },
  {
    timestamps: true,
  }
);

// Instance method
userSchema.methods.getFullName = function () {
  return `${this.profile.firstName} ${this.profile.lastName}`;
};

// Static method
userSchema.statics.findByEmail = function (email) {
  return this.findOne({ email: email.toLowerCase() });
};

// Virtual property
// userSchema.virtual("fullname").get(function () {
//   return `${this.profile.firstName} ${this.profile.lastName}`;
// });

// Create a model
const User = mongoose.model("User", userSchema);

module.exports = User;
