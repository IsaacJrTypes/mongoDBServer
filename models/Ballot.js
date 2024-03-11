import { Schema, model } from 'mongoose';


const choiceSchema = new Schema({
    questionId: Schema.Types.ObjectId, 
    answer: String, 
}, { _id: false, strict: false }); 

const sessionSchema = new Schema({
    name: String,
    sessionStart: Date,
    sessionEnd: Date,
}, { _id: false });

const electionSchema = new Schema({
    name: String,
    description: String,
    startDate: Date,
    endDate: Date,
}, { _id: false }); 

const ballotSchema = new Schema({
    voter_id: {
        type: Number,
        required: true
    },
    election: electionSchema,
    session: sessionSchema,
    choices: [choiceSchema],
    submissionTime: {
        type: Date,
        default: Date.now
    },
    validated_session: Boolean
}, { strict: false }); 

export default model('Ballot', ballotSchema);
