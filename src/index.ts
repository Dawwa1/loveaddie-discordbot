import client from '@client';

import Socials from '@command/socials';
import {validArgs} from '@command/socials';

const prefix = '!addie'


const main = () => {
    while (true){
        client.on('message', message => {
            if (message.content.startsWith(prefix) || message.author.bot) {
                const args = message.content.slice(prefix.length).trim().split(/ +/);

                if ('socials' in args) {
                    const msg = Socials();
                    message.channel.send(msg);
                }
            }       
        }
        )
    }
}

main();