const express = require('express')
require('dotenv').config()

const app = express()

app.get("/", (req, res) => {
    res.send("this is working fine");
})

app.listen(process.env.PORT, () => {
    console.log(`server ruuinng on port ${process.env.PORT}`)
})