const express = require('express')
require('dotenv').config()

const app = express()

app.get("/", (req, res) => {
    res.send(`${process.env.message}`);
})

app.listen(process.env.PORT, () => {
    console.log(`server ruuinng on port ${process.env.PORT}`)
})