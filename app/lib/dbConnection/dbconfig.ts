import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGO_KEY;

if (!MONGODB_URL) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    )
}

let cached = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = {con: null, promise: null}
}

const dbConnect = async () => {
    if (cached.conn) {
        console.log("mongo connected")
        return cached.conn;
    }


// If a connection does not exist, we check if a promise is already in progress. If a promise is already in progress, we wait for it to resolve to get the connection
    if (!cached.promise) {
        const opts = {
            // bufferCommands : false
        };

        cached.promise = await mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
            return mongoose
        })
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

export default dbConnect;