const Asena = require('../events');
const axios = require('axios');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const fs = require('fs');


if (Config.WORKTYPE == 'private') {

   Asena.addCommand({pattern: 'vava', fromMe: true}, (async (message, match) => {
      await message.sendMessage('Gold Modz\n');
   }));

   Asena.addCommand({pattern: 'fatp', fromMe: false}, (async (message, match) => {        
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("media/gif/apk/FATP.mp3"),
            MessageType.audio, 
            {mimetype: Mimetype.mp4Audio}
        )
   }));

   Asena.addCommand({pattern: 'resso', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage(' *RESSO PREMIUM* \n📌 https://www.mediafire.com/download/dzk1c6vq1mv05xu\n Developed : *Muhammed Rizad*
\nInstagram  : *@rizad__x96*
\nMail ID        : *rizad@mail2tor.com*');
   }));

   Asena.addCommand({pattern: 'spotify', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage(' *SPOTIFY PREMIUM* \n📌https://www.mediafire.com/download/rbia8otentihfta.\n Developed : *Muhammed Rizad*
\nInstagram  : *@rizad__x96*
\nMail ID        : *rizad@mail2tor.com*');
   }));
}

else if (Config.WORKTYPE == 'public') {

   Asena.addCommand({pattern: 'vava', fromMe: false}, (async (message, match) => {
      await message.sendMessage('GOLD MODZ\n');
   }));
    
   Asena.addCommand({pattern: 'fatp', fromMe: false}, (async (message, match) => {        
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("media/gif/apk/FATP.mp3"),
            MessageType.audio, 
            {mimetype: Mimetype.mp4Audio}
        )
   }));

   Asena.addCommand({pattern: 'resso', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage(' *RESSO PREMIUM* \n📌 https://www.mediafire.com/download/dzk1c6vq1mv05xu.\n Developed : *Muhammed Rizad*
\nInstagram  : *@rizad__x96*
\nMail ID        : *rizad@mail2tor.com*');
   }));

   Asena.addCommand({pattern: 'spotify', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage(' *SPOTIFY PREMIUM* \n📌https://www.mediafire.com/download/rbia8otentihfta.\n Developed : *Muhammed Rizad*
\nInstagram  : *@rizad__x96*
\nMail ID        : *rizad@mail2tor.com*');
   }));
}
