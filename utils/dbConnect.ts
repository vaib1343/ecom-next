import mongoose from "mongoose";

const connectDB = () => {
    if (mongoose.connections[0].readyState) {
        console.log("Already connected");
        return;
    }
    mongoose.connect(
        "",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as mongoose.ConnectOptions,
        (err) => {
            if (err) throw err;
            console.log("DataBase is connected");
        }
    );
};

export default connectDB;
