import express from 'express'
import UserFeed from './models/UserFeed.js';

//import { connectionString } from './credentials'

const app = express()
const port = process.env.PORT || 3000;

app.set('port', port);


app.use(express.json())

// Get entries from MongoDB
app.get('/',async (req,res) => {
    let responseObj;
    try {
        responseObj = await UserFeed.find()
        //console.log(responseObj)
    } catch(err) {
        responseObj = {success: false}
        console.error('Fetch error: ',err)
    }
    res.type('text/json')
    res.send(responseObj)
})

// Error handling
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404: Not Found');
});

app.listen(app.get('port'), () => {
    console.log(`Express running at ${port}`);
    console.log(`In browser go to: http://localhost:${port}`);
});