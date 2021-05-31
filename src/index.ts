import client from '@client';
import { Message, Channel } from '@client';

import Socials from '@command/socials';
import Asciify from '@command/asciify';
import {validArgs} from '@command/socials';

const prefix = '!addie'


const main = () => {
    while (true){
        client.on('message', message => {
            if (message.content.startsWith(prefix) || message.author.bot) {
                const args = message.content.slice(prefix.length).trim().split(/ +/);
                let msg = new Message(client, , message.channel)

                if ('socials' in args) {
                    let msg = Socials();
                    message.channel.send(msg);
                }
                else if ('imgtoascii' in args) {
                    let msg = Asciify(message);
                    message.channel.send(msg);
                }
            }
        }
        )
    }
}

main();