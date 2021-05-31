import { Embed } from '@client';

const ascii = require('asciify-image');
const fs = require('fs')

// ascii to image options
var options = {
    fit: 'box',
    color: false,
    width: 35,
    height: 35
};
options.color = false;

// function
const asciify = () => {
    const embed = new Embed;

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
    }}