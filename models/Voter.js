import { Schema, model } from 'mongoose';


const contactSchema = new Schema({
    contact_id: Number,
    contact_type: String,
    contact_value: String,
});

const addressSchema = new Schema({
    address_id: Number,
    street: String,
    city: String,
    state: String,
    zip_code: String,
    country: String,
    capture_date: Date,
});

const accountSchema = new Schema({
    account_id: Number,
    account_email: { type: String, required: true },
    password: { type: String, required: true },
    capture_date: { type: Date, default: Date.now },
});


const engagementSchema = new Schema({
    device: String,
    client_delivery: String,
    engagement_metadata: Schema.Types.Mixed, // for JSON data
    capture_time: Date,
    type: String,
});

const metaDataSchema = new Schema({
    type: String,
    data: Schema.Types.Mixed, // for JSON data
});

const userTrackerSchema = new Schema({
    ip_address: String,
    mac_address: String,
    browser_cookie: String,
    capture_access: Date,
});

const voterSchema = new Schema({
    voter_id: { type: Number, required: true },
    f_name: String,
    l_name: String,
    DOB: String,
    social_security_number: String,
    contact: [contactSchema],
    address: [addressSchema],
    account: accountSchema,
    engagements: [engagementSchema],
    metaData: [metaDataSchema],
    userTracker: [userTrackerSchema]
}, { timestamps: true });


export default model('Voter', voterSchema);
