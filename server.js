const express = require('express');
const cors = require('cors');
const spawn = require('child_process').spawn;
const app = express();

// to avoid accidental clicks
const rateLimit = require("express-rate-limit");
 
const limiter = rateLimit({
    windowMs: 5 * 1000, // every 5 seconds
    max: 10 // limit each IP to 10 requests per windowMs
});

app.use(limiter);
app.use(cors());
app.use(express.json());
app.use(express.static('./public')); // folder containing web page content

app.get('/', (req, res) => {
    res.sendFile('public/index.html'); // web page with code snippets
});

app.post('/secret', (req, res) => {
    // handle different kinds of actions

    if(req.body.action == "snips") {
        spawn('xdotool', ['type',  '--delay', '0', req.body.data]);
        // spawn('python3', 'insertText.py', req.body.data]);
    } else if(req.body.action == "webpages") {
        spawn('chromium', [req.body.data]);
    } else if(req.body.action == "apps") {
        spawn(req.body.data);
    }

    res.redirect('back'); // refresh page
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Listening on http://0.0.0.0:3000');
});
