const Botgram = require('botgram');

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
    console.error('Seems like you forgot to pass Telegram Bot Token. I can not proceed...');
    process.exit(1);
}

const bot = new Botgram(token);

bot.command("help", function (msg, reply, next) {
  reply.markdown("Aee! T l sev ritt");
});

bot.command("mamma", function (msg, reply, next) {
  reply.markdown("Ngul a mammt!");
});
   
bot.command("foto", function (msg, reply, next) {
  reply.photo("https://mas-group.inf.h-brs.de/wp-content/uploads/2015/06/Daniele_Nardi-292x262.jpg");
});

/* TO ADD LIST

 - essi vi
 - frssora
 - random pick of photo
 - random curses in molisn't language
*/



function onMessage(msg, reply) {
	to_reply = msg.text
	if (msg.text.indexOf('pollo') > -1 || msg.text.indexOf('Pollo') > -1) {
		to_reply = 'Forse vulevi dire Pllashtr!'
    reply.text(to_reply).then();
    return;   
  } else if (msg.text.indexOf('polli' || msg.text.indexOf('Polli') > -1) > -1) {
		to_reply = 'Forse vulevi dire Pllashtr!'
    reply.text(to_reply).then();
    return;       
  } else if (msg.text.indexOf('tarallo') > -1  || msg.text.indexOf('Tarallo') > -1) {
		to_reply = 'Vscuott!'
    reply.text(to_reply).then();
    return;       
  } else if (msg.text.indexOf('taralli' ) > -1  || msg.text.indexOf('Taralli') > -1) {
		to_reply = 'Vscuotter!'
    reply.text(to_reply).then();
    return;       
  } else if (msg.text.indexOf('alberto') > -1 || msg.text.indexOf('Alberto') > -1) {
		to_reply = 'Albrdo!'
    reply.text(to_reply).then();
    return;       
  } 
  
}

bot.text(onMessage);
