import { Schema, model } from 'mongoose';


// Define a Hashtag schema
const hashtagSchema = new Schema({
    text: String,
    description: { type: String, default: '' }
}, { _id: false }); 

const socialMediaPostSchema = new Schema({
    title:   String ,
    content:  String,
    client: String,
    Device: String,
    postedAt: Date,
    hashtags: [hashtagSchema], // Embedding Hashtag schema
    engagement: {
        likes: { type: Number, default: 0 },
        shares: { type: Number, default: 0 },
        comments: { type: Number, default: 0 }
    }
});

const socialMediaInfoSchema = new Schema({
    voter_id : {type:Number,required: true},
    platform: String,
    handle: String,
    SMID: String,
    socialMediaPosts:[socialMediaPostSchema]

})

// Compile and export the model
export default model('SocialMedia_Info', socialMediaInfoSchema);
