import { Embed } from '@client';



const socials = () => {
    const embed = new Embed
    embed.setAuthor("AddieBot", "https://cdn.discordapp.com/icons/794715345733812255/a_755b623570a94600e04eed0a7461d5f4.png?size=256", "https://github.com/henrikvtcodes/loveaddie-discordbot");
    embed.setTitle("♡ loveaddie's socials! ♡", );
    embed.setColor("#FB6694");
    embed.setDescription('A list of addie\'s socials!');
    embed.addField("Twitch", "[This](https://twitch.tv/loveaddie/) is where addie streams her content! ", true);
    embed.addField("Youtube", "[This](https://www.youtube.com/channel/UCpZkASmeHBMODJtE_qos2Zg/featured) is where addie posts VODs and more!", true);
    embed.addField("Twitter", "Follow addie on twitter to see [addie's tweets](https://twitter.com/swimthestars)!", true);
    embed.addField("Instagram", "Follow [addie](https://www.instagram.com/yaydrianne/?hl=en) on Instagram to see her Instagram posts!", true);
    embed.setTimestamp();
    return embed;
}

export default socials;