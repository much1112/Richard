const { Client, IntentsBitField } = require('discord.js')

const client = new Client({
    intents: [
        Intents.ALL
    ]
})

require('dotenv').config();
const botToken = process.env.BOT_TOKEN;

client.login(botToken)