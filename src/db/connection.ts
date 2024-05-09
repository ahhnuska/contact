import mongoose from 'mongoose'


const url = 'mongodb://localhost:27017'; 


const dbName = 'conactinfo'; 

async function connectToMongoDB() {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(`${url}/${dbName}`);
      console.log('Connected successfully to MongoDB server');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  } else {
    console.log('Already connected to MongoDB');
  }
}

export default connectToMongoDB
