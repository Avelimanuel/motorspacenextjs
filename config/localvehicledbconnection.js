import mongoose from 'mongoose';
let dbconnected = false;

const connectToLocalVehicleDb = async () =>{
    if(dbconnected){
        console.log('DB is already connected');
        return
    }
    try {
        if(!process.env.LOCAL_VEHICLES_MONGODB_CONNECTION_URI){
            console.log('LOCAL_VEHICLES_MONGODB_CONNECTION_URI is not set/must be defined');
        }
        await mongoose.createConnection(process.env.LOCAL_VEHICLES_MONGODB_CONNECTION_URI)
        dbconnected = true;
        console.log('Connected to local vehicle db');
        return
        
        
    } catch (error) {
        console.log('Error connecting to local vehicle db:', error);
        
    }
    

}
export default connectToLocalVehicleDb