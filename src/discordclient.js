const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_TOKEN;

try {
    client.login(token);
}
finally{
    console.log('Login Successful!');
}

client.on('message', message => {
    if (message.content === '!addie socials') {
        const embed = new Discord.MessageEmbed()
        .setAuthor('AddieBot', 'https://cdn.discordapp.com/icons/794715345733812255/a_755b623570a94600e04eed0a7461d5f4.png?size=256', 'https://github.com/henrikvtcodes/loveaddie-discordbot')
        .setTitle('♡ loveaddie\'s socials! ♡', )
        .setColor('#FB6694')
        .setDescription('A list of addie\'s socials!')
        .addField('Twitch', '[This](https://twitch.tv/loveaddie/) is where addie streams her content! ', true)
        .addField('Youtube', '[This](https://www.youtube.com/channel/UCpZkASmeHBMODJtE_qos2Zg/featured) is where addie posts VODs and more!', true)
        .addField('Twitter', 'Follow addie on twitter to see [addie\'s tweets](https://twitter.com/swimthestars)!', true)
        .addField('Instagram', 'Follow [addie](https://www.instagram.com/yaydrianne/?hl=en) on Instagram to see her Instagram posts!', true)
        .setFooter('Socials requested by ' + message.author.username);
        message.channel.send(embed);
    }
});

client.on('message', message => {
    if (message.content.startsWith('!mute')){
        const user = message.mentions.users.first();
        const author = message.author;
       if (author.hasPermission('KICK_MEMBERS')){
        if (user){
            const member = message.guild.member(user);
            if (member) {

                const embed = new Discord.MessageEmbed()
                .setAuthor('AddieBot', 'https://cdn.discordapp.com/icons/794715345733812255/a_755b623570a94600e04eed0a7461d5f4.png?size=256', 'https://github.com/henrikvtcodes/loveaddie-discordbot')
                .setTitle('♡ mute command ♡')
                .setColor('#EA0C51')
                .setDescription(member + ' got muted by ' + message.author)
                .addField('Mute', member + ' got muted by ' + message.author + ' for reasons deemed neccesary')
                .setFooter('Muted by ' + message.author.username);

                member
                  .mute({
                    reason: 'Requested by ' + message.author.username,
                  })
                  .then(() => {
                    message.reply(embed);
                  })
                  .catch(err => {
                    message.reply('I was unable to ban the member');
                    console.error(err);
                  });
              } else {
                // The mentioned user isn't in this guild
                message.reply('That user isn\'t in this guild!');
              }
            } else {
              // Otherwise, if no user was mentioned
              message.reply('You didn\'t mention the user to mute!');
            }
          }
        }
    });
