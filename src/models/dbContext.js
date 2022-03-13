import mongoose from 'mongoose';
import { config } from '../configs/config';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false, // Don't build indexes
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};
// Or using promises
export const mongoConnection = () => {
    mongoose.connect(config.url, options)
    .then(
        r => {
            console.log('Connected to MongoDB database');
        }, e => {
            console.log('Connection error : >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
            console.log(e);
        }
    );
}




// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => console.log("Connected to MongoDB database"));
// export const db;
