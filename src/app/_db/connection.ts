import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || '');
  } catch (err) {
    throw new Error(`Failed to connect to MongoDB: ${err}`);
  }
};
export default connectDB;
