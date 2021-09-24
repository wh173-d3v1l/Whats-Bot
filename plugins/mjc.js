const Asena = require('../events');
const axios = require('axios');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const fs = require('fs');


if (Config.WORKTYPE == 'private') {

   Asena.addCommand({pattern: 'minhaj', fromMe: true}, (async (message, match) => {
      await message.sendMessage('Gold Modz\n');
   }));

   Asena.addCommand({pattern: 'fatll', fromMe: false}, (async (message, match) => {        
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("media/gif/apk/FATP.mp3"),
            MessageType.audio, 
            {mimetype: Mimetype.mp4Audio}
        )
   }));
}

else if (Config.WORKTYPE == 'public') {

   Asena.addCommand({pattern: 'minhaj', fromMe: false}, (async (message, match) => {
      await message.sendMessage('Hey *Minhaj* here \nIam a vocalist \n Doing song covers\nI will entertain you all with songs\nShare & support\n*_MJC muziq_*\n*https://youtube.com/channel/UCrr1j7WPEWtydMf25wzgxfw*\n');
   }));
    
   Asena.addCommand({pattern: 'fatll', fromMe: false}, (async (message, match) => {        
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("media/gif/apk/FATP.mp3"),
            MessageType.audio, 
            {mimetype: Mimetype.mp4Audio}
        )
   }));
}