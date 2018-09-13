const Botgram = require('botgram');

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
    console.error('Seems like you forgot to pass Telegram Bot Token. I can not proceed...');
    process.exit(1);
}

const bot = new Botgram(token);

function onMessage(msg, reply) {
    reply.text(msg.text).then();
    return;   
}

bot.text(onMessage);
