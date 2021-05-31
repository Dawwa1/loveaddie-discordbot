const Discord = require('discord.js');
const ascii = require('asciify-image');
const fs = require('fs')

token = "ODI1MDk5NTc4MjY0NzgwODIw.YF4_3Q.CmO6P-m6SvDNPRWQ5ZAsHs-X3-E"
const client = new Discord.Client();

client.login(token);

var options = {
    fit: 'box',
    color: false,
    width: 35,
    height: 35
};

options.colors = false;

client.on('ready', msg => {
    console.log('bot ready');
})

client.on('message', message => {

    let embed = new Discord.MessageEmbed();

    embed.setTitle = "ascii to img"
    embed.setDescription = "yeah"

    var asciiShit = undefined;

    if (message.content == "imgtoascii" && message.attachments.size > 0 ? message.attachments.array()[0].url : null) {
        var imgUrl = message.attachments.array();
        ascii(imgUrl[0].url.toString(), options, (err, asciifiied) => {
            if (err) {
                throw err;
            } else {

                asciiShit = asciifiied;

                fs.writeFile('textFile.txt', asciiShit, err => {
                    if (err) throw err;

                    console.log('part 1 worked yay')
                    
                })
                fs.readFile('textFile.txt', 'utf-8', (err, data) => {
                    if (err) {
                        throw err;
                    } else {
                        message.channel.send('yeah', {files: ['textFile.txt']})
                    }
                })
            }
        })
    }
})
