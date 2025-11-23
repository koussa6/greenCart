import mongoose from 'mongoose';

const connectDb = async () => {
  mongoose.connection.on('connected', () => console.log('Data connected'));
  await mongoose.connect(`${process.env.MONGO_URI}green-cart`);
};

export default connectDb;
