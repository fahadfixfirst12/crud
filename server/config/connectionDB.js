import mongoose from 'mongoose';

const connectDB = async (url) => {
    try {
        mongoose.set({ 'Strcikey': true })
        await mongoose.connect(url);
        return console.log(`MongoDB Conneted...`);
    } catch (error) {
        return console.log(`Error ${error}`);
    }
}

export { connectDB };