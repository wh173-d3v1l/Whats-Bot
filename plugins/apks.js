const Asena = require('../events');
const axios = require('axios');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const fs = require('fs');


if (Config.WORKTYPE == 'private') {

   Asena.addCommand({pattern: 'rizad', fromMe: true}, (async (message, match) => {
      await message.sendMessage('MASTER IS OFFLINE\n');
   }));

   Asena.addCommand({pattern: 'lilly', fromMe: false}, (async (message, match) => {        
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("app/lilly.apk"),
            MessageType.document, 
            {mimetype: Mimetype.application}
        )
   }));

   Asena.addCommand({pattern: 'resso', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('*RESSO PREMIUM*\nDeveloped : *Muhammed Rizad*\nInstagram  : *@rizad__x96*\nhttps://www.mediafire.com/download/dzk1c6vq1mv05xu');
   }));

   Asena.addCommand({pattern: 'spotify', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('*SPOTIFY PREMIUM* \nDeveloped : *Muhammed Rizad*\nInstagram  : *@rizad__x96*\nhttps://www.mediafire.com/download/rbia8otentihfta.');
   }));
}

else if (Config.WORKTYPE == 'public') {

   Asena.addCommand({pattern: '8301824373', fromMe: false}, (async (message, match) => {
      await message.sendMessage('MASTER IS OFFLINE\n');
   }));
    
   Asena.addCommand({pattern: 'lilly', fromMe: false}, (async (message, match) => {        
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("app/lilly.apk"),
            MessageType.document, 
             {filename: 'Lilly WA Dev' + '.apk', mimetype: 'application/vnd.android.package-archive' caption: 'Author Name  : *Muhammed rizad*\nAuthor ID    : *73955457*\nEmail ID     : *rizadmuhammed@protonmail.com*\nProject Name : *LILLY*\nLanguage     : *JavaScript*\nLicense Type : *GNU General Public License (GPL)*\n'}
        )
   }));

   Asena.addCommand({pattern: 'resso', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('*RESSO PREMIUM* \nDeveloped : *Muhammed Rizad*\nInstagram  : *@rizad__x96*\n https://www.mediafire.com/download/dzk1c6vq1mv05xu');
   }));

   Asena.addCommand({pattern: 'spotify', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('*SPOTIFY PREMIUM* \nDeveloped : *Muhammed Rizad*\nInstagram  : *@rizad__x96*\nhttps://www.mediafire.com/download/rbia8otentihfta.');
   }));

  Asena.addCommand({pattern: 'apkcloner', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('*APK CLONER VIP* \nDeveloped : *Muhammed Rizad*\nInstagram  : *@rizad__x96*\nhttps://www.mediafire.com/file/0q7sq5dtu2bcb6l.');
   }));

  Asena.addCommand({pattern: 'igold', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('*INSTAGOLD*\nDeveloped : *Muhammed Rizad*\nInstagram  : *@rizad__x96*\nhttps://www.mediafire.com/download/1i4lwxb15ktl1zr');
   }));
  
   Asena.addCommand({pattern: 'dev0ps', fromMe: false}, (async (message, match) => {        
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("r1z4d/tutorial.mp4"),
            MessageType.video, 
            {mimetype: Mimetype.mp4}
        )
   }));
}
