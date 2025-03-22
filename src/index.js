import 'dotenv/config';
import express from 'express'
import { Post } from './models/Post.js';

// wrapper o2switch
if (typeof PhusionPassenger !== "undefined") {
    PhusionPassenger.configure({ autoInstall: false })
}

const app = express()

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Hello world from API'
    });
})

app.get('/posts', async(req, res) => {
    const cards = await Post.findAll();
    res.status(200).json(cards)
})

// wrapper o2switch
if (typeof PhusionPassenger !== "undefined") {
    app.listen("passenger")
} else {
    const host = process.env.HOST
    const port = process.env.PORT
    app.listen(port, host, () => {
      console.log(`🚀 Server listening on http://${host}:${port}`)
    });
}