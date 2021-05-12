const Discord = require('discord.js')
const client = new Discord.Client();
const token = process.env.DISCORD_TOKEN

try {
    client.login(token);
}
finally{
    console.log("Login Successful!")
}

client.on('message', message => {
    if (message.content === "!addie socials") {
        const embed = new Discord.MessageEmbed()
        .setAuthor("AddieBot", "https://cdn.discordapp.com/icons/794715345733812255/a_755b623570a94600e04eed0a7461d5f4.png?size=256", "https://github.com/henrikvtcodes/loveaddie-discordbot")
        .setTitle("♡ loveaddie's socials! ♡", )
        .setColor("#FB6694")
        .setDescription('A list of addie\'s socials!')
        .addField("Twitch", "[This](https://twitch.tv/loveaddie/) is where addie streams her content! ", true)
        .addField("Youtube", "[This](https://www.youtube.com/channel/UCpZkASmeHBMODJtE_qos2Zg/featured) is where addie posts VODs and more!", true)
        .addField("Twitter", "Follow addie on twitter to see [addie's tweets](https://twitter.com/swimthestars)!", true)
        .addField("Instagram", "Follow [addie](https://www.instagram.com/yaydrianne/?hl=en) on Instagram to see her Instagram posts!", true)
        .setFooter("Socials requested by " + message.author.username);
        message.channel.send(embed);
    }
})
