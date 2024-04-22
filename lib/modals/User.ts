import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerk_id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    lowercase: true,
  },
  name: {
    type: String,
  },
  bio: String,
  email: {
    type: String,
    unique: true,
  },
  phoneNumber: String,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

// import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             default: "Anonymous",
//             min: 2,
//             max: 100,
//             // required: [true, "Name must be provided"],
//         },
//         email: {
//             type: String,
//             match: /.+\@.+\..+/,
//             min: 2,
//             max: 100,
//         },
//     },
//     { timestamps: true }
// );

// const User = mongoose.models.User || mongoose.model("User", UserSchema);
// // const User = mongoose.models.User || mongoose.model("User", UserSchema);
// export default User;
