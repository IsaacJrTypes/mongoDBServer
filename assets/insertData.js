import UserFeed from "../models/UserFeed.js";
import { connect } from 'mongoose';
//import { voterData } from './voter_data.js';
//import {social_data} from './socialMedia_data.js'
//import {personal_data} from './personalData_data.js'
import { ballot_data } from './ballot_data.js'

import { connectionString } from '../credentials.js';
import Voter from "../models/Voter.js"
import SocialMedia from "../models/SocialMedia.js"
//import personalData from "../models/personalData.js";
//import PersonalData from '../models/PersonalData.js'
import Ballot from '../models/Ballot.js'

console.log(connectionString);

// Connect to db
connect(connectionString, {
    dbName: 'vote_from_home',
  
})
    .then(() => console.log('connected to mongoDB'))
    .catch(err => console.log("cant connect to mongDB: ", err));

const importToMongoDB = async () => {
    // insert data from json file
    try {
        const entries = ballot_data
        await Ballot.insertMany(entries);
        console.log("Voter Added entries: ", entries.length);

    } catch (err) {
        console.error("Error adding data", err);
    }
};

//importToMongoDB();