const express = require('express');
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');
const speech = require('@google-cloud/speech');

// set up CORS to allow requests from the browser
app.use(fileUpload()); // Don't forget this line!
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.post('/transcribe', async (req, res) => {
    // receive audio file from the request and send it to the transcription 
    console.log(req.files);
    const audioFile = req.files.audio;
    const transcription = await transcribeAudio(audioFile);
    res.send({ "transcription": transcription });
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
}
);

const transcribeAudio = async (audioFile) => {
    const client = new speech.SpeechClient({
        keyFile: 'key.json',
        projectId: 'subhodip'
    });

    const audioBytes = audioFile.data.toString('base64');

    const request = {
        audio: {
            content: audioBytes,
        },
        config: {
            encoding: 'LINEAR16',
            languageCode: 'bn-IN',
            audioChannelCount: 2,
            sampleRateHertz: 48000,
        }
    };

    console.log("request: ", request);

    try {
        console.log("1");
        const [response] = await client.recognize(request);
        console.log("2");
        const transcription = response.results
            .map(result => result.alternatives[0].transcript)
            .join('\n');
        console.log("3");
        console.log(response)
        return transcription;
        console.log("4");
    } catch (error) {
        console.log(error);
    }

}