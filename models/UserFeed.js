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

// Schemas for data
const HomeStatusSchema = new Schema({
    home_type: String,
    mortgage: Number,
});

const OccupationSchema = new Schema({
    occ_name: String,
    occ_desc: String,
});

const IncomeSchema = new Schema({
    income_level: String,
    income_desc: String,
});

const EducationSchema = new Schema({
    edu_level: String,
    edu_desc: String,
    alma_mater: String,
});

const AffiliationSchema = new Schema({
    affiliation_name: String,
    affiliation_desc: String,
    affiliation_intensity: String,
    affiliation_capture: Date,
    captured_from: String,
});

const SocialViewSchema = new Schema({
    view_name: String,
    view_desc: String,
    view_intensity: String,
    view_capture: Date,
    captured_from: String,
});

const PostSchema = new Schema({
    post_title: String,
    post_content: String,
    post_capture: Date,
    post_client: String,
    hashtags: [String],
});

const SocialMediaSchema = new Schema({
    platform: String,
    handle: String,
    SMID: String,
});

const UserFeedSchema = new Schema({
    iduser: { type: Number, required: true },
    f_name: { type: String },
    l_name: { type: String },
    DOB: { type: Date },
    gender: { type: String },
    homeStatus: HomeStatusSchema,
    occupation: OccupationSchema,
    income: IncomeSchema,
    education: EducationSchema,
    affiliations: [AffiliationSchema],
    socialViews: [SocialViewSchema],
    socialMedia: [SocialMediaSchema],
    posts: [PostSchema],
}, {
    timestamps: true
});

export default model('UserFeed', UserFeedSchema);