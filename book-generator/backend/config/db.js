const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.ATLAS_URI);
        console.log(`MongoDB database ${conn.connection.host} connection established successfully`);

    } catch (error){
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB