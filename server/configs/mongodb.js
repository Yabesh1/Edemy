import mongoose from "mongoose";

export  const connectDB = async () => {
    await mongoose.connect('mongodb+srv://yabesh:yabesh123@cluster0.ihbedxs.mongodb.net/lms')
    .then(() => console.log("DB connected"));
}