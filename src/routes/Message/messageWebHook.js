const { Router } = require('express')

const messageWebhook = Router()

messageWebhook.post('/messageWebHook/',(req, res) =>{
    console.log(req.body);
    res.status(200).end()
})

module.exports = messageWebhook