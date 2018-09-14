// Loading Botgram
const Botgram = require('botgram');
// get PotenaBot token
const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) {
    console.error('Seems like you forgot to pass Telegram Bot Token. I can not proceed...');
    process.exit(1);
}

// our PotenaBot
const potena_bot = new Botgram(token);

var commands = require('./commands.js');                // load all the potena_bot new commands
var answer = require('./onMessage.js');                 // load onMessage() function for answer to keywords {pollo, tarallo, ...}

// prints the help with all the bot commands  
commands.declare(potena_bot, "help");
// prints "ngul a mammt"
commands.declare(potena_bot, "mamma"); 
// prints zambardi related sentence
commands.declare(potena_bot, "zambardi");
// depicts a random photo from photo_list
commands.declare(potena_bot, "foto");
// depicts a random photo from ficadelgiorno_list
commands.declare(potena_bot, "ficadelgiorno");
// you don't want to know it
commands.declare(potena_bot, "dominique");
// Generate a Random Molisan Sentence
commands.declare(potena_bot, "random");
// returns the deadline time (in seconds) for required conference: e.g. /deadline ICRA
commands.declare(potena_bot, "deadline");


// the bot answers are listed in onMessage.js
potena_bot.text(answer.onMessage);