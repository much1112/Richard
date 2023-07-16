const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

const config = require('./config.json'); /*change to safe_config.json*/

const {botToken} = config;

client.on('ready', (c) => {
    console.log(`${c.user.username} is ready.`);
});

client.on('messageCreate', (msg) => {
    if(msg.author.bot){
        return;
    }
});

client.login(botToken);