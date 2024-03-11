import { Schema, model } from 'mongoose';


// Simplified schema examples for embedding or referencing
const educationSchema = new Schema({
    level: String,
    description: String,
    almaMater: String,
    captureDate: Date,
});

const occupationSchema = new Schema({
    name: String,
    description: String,
    captureDate: Date,
});

const incomeSchema = new Schema({
    level: String,
    description: String,
    captureDate: Date,
});

const affiliationSchema = new Schema({
    name: String,
    description: String,
});

const socialViewSchema = new Schema({
    view: String,
    description: String,
    intensityLevel: Number,
});

const personalDataSchema = new Schema({
    voter_id: { type: Number, required: true },
    education: [educationSchema], 
    occupation: [occupationSchema], 
    income: [incomeSchema], 
    affiliations: [affiliationSchema], 
    socialViews: [socialViewSchema], 
});

export default model('Personal_data', personalDataSchema);