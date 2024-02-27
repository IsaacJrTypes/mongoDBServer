import { Schema, connect, model } from 'mongoose';
import { connectionString } from '../credentials.js';
console.log(connectionString);

// Connect to db
connect(connectionString, {
    dbName: 'databaseTechW24',
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('connected to mongoDB'))
    .catch(err => console.log("cant connect to mongDB: ", err));

// Schema for data 
const UserFeedSchema = new Schema({
    iduser: { type: Number, required: true },
    f_name: { type: String },
    l_name: { type: String },
    DOB: { type: Date },
    gender: { type: String },
    homeStatus: {
        home_type: String,
        mortgage: Number,
    },
    occupation: {
        occ_name: String,
        occ_desc: String,
    },
    income: {
        income_level: String,
        income_desc: String,
    },
    education: {
        edu_level: String,
        edu_desc: String,
        alma_mater: String,
    },
    affiliations: [{
        affiliation_name: String,
        affiliation_desc: String,
        affiliation_intensity: String,
        affiliation_capture: Date,
        captured_from: String,
    }],
    socialViews: [{
        view_name: String,
        view_desc: String,
        view_intensity: String,
        view_capture: Date,
        captured_from: String,
    }],
    socialMedia: [{
        platform: String,
        handle: String,
        SMID: String,
    }],
    posts: [{
        post_title: String,
        post_content: String,
        post_capture: Date,
        post_client: String,
        hashtags: [String],
    }],
}, {
    timestamps: true
});

export default model('UserFeed', UserFeedSchema);