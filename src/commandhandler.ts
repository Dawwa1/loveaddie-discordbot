/*

const fs = require('fs');
const logger = require('winston')

import client from '@client';
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('@command').filter(file => file.endsWith('.js'));


const token = process.env.DISCORD_TOKEN;
const prefix = "!addiebot ";

client.login(token);

client.once('ready', message => {
    console.log("addiebot ready!")
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;
    try {
        client.commands.get(command).execute(message, args)
    } catch(error) {
        console.log("Error: " + error);
        message.reply("There was an error executing the command!");
    } 
})

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command);
}

*/