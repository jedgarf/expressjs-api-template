const fs = require("fs");
const request = require('request');

export const corsProxy = async (req, res) => {
    const url = req.query.url;

    if (!url) {
        return res.status(400).json({ error: 'URL is missing' });
    }

    request.get(url, (error, response, body) => {
        if (error) {
          return res.status(500).json({ error: 'Error fetching M3U8 Link' });
        }
    
        // Set the correct headers for M3U8 responses
        res.header('Content-Type', 'application/vnd.apple.mpegurl');
        res.send(body);
    });
};

