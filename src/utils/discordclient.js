import Discord from 'discord.js';
export const client = new Discord.Client();
const token = process.env.DISCORD_TOKEN;

try {
    client.login(token);
}
finally{
    console.log('Login Successful!');
}

export default Discord;