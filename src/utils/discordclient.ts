import Discord from 'discord.js';
const client = new Discord.Client();
const token = process.env.DISCORD_TOKEN;

try {
    client.login(token);
}
finally{
    console.log('Login Successful!');
}


export default client;