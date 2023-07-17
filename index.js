const { Client, IntentsBitField, GatewayIntentBits } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        GatewayIntentBits.Guilds,
    ],
});

const config = require('./config.json');
const {token} = config;

eventHandler(client)

client.login(token);