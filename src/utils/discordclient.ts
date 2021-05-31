import Discord from 'discord.js';
const { APIUser } = require('discord-api-types/v8');

const client = new Discord.Client();
const token = process.env.DISCORD_TOKEN;

try {
    client.login(token);
}
finally{
    console.log('Login Successful!');
}

const Message = Discord.Message;
const Embed = Discord.MessageEmbed;
const Channel = Discord.Channel;

export default client;
export { Message, Embed, Channel };