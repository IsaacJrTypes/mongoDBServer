import UserFeed from "../models/UserFeed.js";
import { data } from './data.js';

const importToMongoDB = async () => {
    // insert data from json file
    try {
        const entries = data;
        await UserFeed.insertMany(entries);
        console.log("Added entries: ", entries.length);
    } catch (err) {
        console.error("Error adding data", err);
    }
};

//importToMongoDB();