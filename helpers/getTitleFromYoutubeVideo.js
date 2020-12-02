const https = require('https');
require("dotenv/config");

async function getTitleFromYoutubeVideo(videoID) {
    const googleApiKey = process.env.GOOGLE_API_KEY;
    const googleApiUrl = "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + videoID + "&key=" + googleApiKey;

    https.get(googleApiUrl, async (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            title = JSON.parse(data).items[0].snippet.title;
            console.log(title)
            return title;
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
        return "Error fetching the video title!"
    });
}

module.exports = getTitleFromYoutubeVideo;