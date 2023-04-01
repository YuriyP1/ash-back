const express = require('express');
const TelegramApi = require('node-telegram-bot-api');
const token ='6077774598:AAEJJaRdxoFdvp_A_RIn7CrOeS9nIqj1Zmw'

const bot = new TelegramApi(token, {polling: true})



// FOUNDERS
const YURA = 1535962876




const app = express();

const PORT = 3001;

let count = 0

app.listen(PORT, (error)=>{
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})

app.get('/order', (req, res)=>{
    count = count + 1
    bot.sendMessage(YURA, `NEW ЗАМОВЛЕННЯ ${count}`)
})



bot.on('message', msg=>{
    const text = msg.text;
    const id = msg.chat.id;

    if(text === '/start'){
        bot.sendMessage(id, `Добро пожаловать в ASH`)
    }
})