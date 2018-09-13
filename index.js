const Botgram = require('botgram');

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
    console.error('Seems like you forgot to pass Telegram Bot Token. I can not proceed...');
    process.exit(1);
}

const bot = new Botgram(token);

function onMessage(msg, reply) {
	to_reply = msg.text
	if (msg.text.indexOf('pollo') > -1) {
		to_reply = 'Forse vulevi dire Pllashtr!'
	}
    	reply.text(to_reply).then();
    	return;   
}

bot.text(onMessage);
