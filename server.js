const express = require('express');
const TelegramApi = require('node-telegram-bot-api');
const token ='6077774598:AAEJJaRdxoFdvp_A_RIn7CrOeS9nIqj1Zmw'

const bot = new TelegramApi(token, {polling: true})



// FOUNDERS
const YURA = 1535962876




const app = express();

const PORT = 3001;

let count = 0
// console.log(path.join(__dirname, 'frontend', 'ASH', 'dist'))

app.listen(PORT, (error)=>{
    // console.log(path.join(__dirname, 'frontend', 'ASH', 'dist'))
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})

app.get('/order', (req, res)=>{
    count = count + 1
    bot.sendMessage(YURA, `NEW ЗАМОВЛЕННЯ ${count}`)
})
app.get('/', (req, res)=>{
    res.sendFile('./build/index.html', {root: __dirname })
})
app.get('/ash', (req, res)=>{
    res.sendFile(path.join (__dirname, '..', '..', 'frontend', 'ASH', 'dist'))
})



bot.on('message', msg=>{
    const text = msg.text;
    const id = msg.chat.id;

    if(text === '/start'){
        bot.sendMessage(id, `Добро пожаловать в ASH`)
    }
})