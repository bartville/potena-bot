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

var venafrano = require('./molisan-vocabulary.js');
var ficadelgiorno = require('./ficadelgiorno.js');
var answer = require('./onMessage.js');

// returns a valid random id from specified list
function randomIdFromList(list) {
  return Math.floor((Math.random() * list.length));
}
// return a random element from specified list
function randomElementFromList(list) {
  return list[randomIdFromList(list)];
}

/* Selection of Photos */
var photo_list = ["https://mas-group.inf.h-brs.de/wp-content/uploads/2015/06/Daniele_Nardi-292x262.jpg",
                 "http://spqr.diag.uniroma1.it/wp-content/uploads/2013/04/daniele-150x150.jpg",
                 "http://www.dis.uniroma1.it/~labrococo/pics/labrococo.jpg",
                 "http://www.asl.ethz.ch/the-lab/_jcr_content/par/textimage/image.imageformat.lightbox.676719260.jpg"];

/* Selection of Sentences */
var frasedelgiorno_list = ["ma quindi step- si usa per dire matrigna, patrigno, sorellastra?\nOra capisco tutti quei porno!\nDi conseguenza step-chicken significa __Pullashtr__"];


/* List of Deadlines */
var approaching_deadlines = {};
approaching_deadlines["ICRA"] = new Date("September 15, 2018 23:59:00");
//approaching_deadlines["RSS"] = new Date("January 15, 2019 23:59:00");
approaching_deadlines["IROS"] = new Date("March 1, 2019 23:59:00");

/* Selection of Curses */
var curses_list = [" mamta fa l spaccat ngopp i tutr",
                  " ti svito la testa e ci cago dentro"];


// prints the help with all the bot commands
potena_bot.command("help", function (msg, reply, next) {
  reply.markdown("**Aee! T l sev ritt** \n\t `/help` : issi vi. \n\t `/foto` : e c la ve. \n\t `/ficadelgiorno` : a pressione. \n\t `/frasedelgiorno` : aee. \n\t `/mamma` : ngul a mammt. \n\t `/zambardi` : sex symbol. \n\t `/random` : gli vi.");
});

// prints "ngul a mammt"
potena_bot.command("mamma", function (msg, reply, next) {
  reply.markdown("Ngul a mammt!");
});
   
// prints zambardi related sentence
potena_bot.command("zambardi", function (msg, reply, next) {
  reply.markdown("Chigl s'ha chiavat a mamm!");
});

// depicts a random photo from photo_list
potena_bot.command("foto", function (msg, reply, next) {
  reply.photo(randomElementFromList(photo_list));
});

// depicts a random photo from ficadelgiorno_list
potena_bot.command("ficadelgiorno", function (msg, reply, next) {
  reply.photo(randomElementFromList(ficadelgiorno.list));
});

// prints a random sentence from frasedelgiorno_list
potena_bot.command("frasedelgiorno", function (msg, reply, next) {
  reply.markdown(randomElementFromList(frasedelgiorno_list));
});

// you don't want to know it
potena_bot.command("dominique", function (msg, reply, next) {
  reply.photo("http://danielevangelista.altervista.org/PotenaBotMedia/Photos/dominik.jpg");
});

// generates a molisan sentence as: subject + verb + preposition + object
function generateMolisan() {
    var subject = randomElementFromList(venafrano.subjects);
    var verb = randomElementFromList(venafrano.verbs);
    var preposition = "";
    if(Math.random() > 0.5)
      preposition = randomElementFromList(venafrano.prepositions);
    var object = randomElementFromList(venafrano.objects);
    var sentence = subject + ' ' + verb + ' ' + preposition + ' ' + object;  
    if(Math.random() > 0.5)
      sentence = sentence + ". " + randomElementFromList(venafrano.bonus) + "!";    
    return sentence;
}

// Generate a Random Molisan Sentence
potena_bot.command("random", function (msg, reply, next) {  
  reply.markdown(generateMolisan());
});


// returns the deadline time (in seconds) for required conference: e.g. /deadline ICRA
potena_bot.command("deadline", function (msg, reply, next) {
  var msg_splitted = msg.text.split(" ");
  if (msg_splitted.length == 2) {
    var conf_name = msg_splitted[1];
    if (conf_name in approaching_deadlines) {
      var today = new Date();
      var date_diff = approaching_deadlines[conf_name].getTime() - today.getTime();
      var date_diff_in_sec = Math.abs(date_diff / 1000);
      var to_reply = "Ahah! Tie soltant " + Math.floor(date_diff_in_sec).toString() + " second a " + conf_name + ". Futt a mov!";
      reply.markdown(to_reply);
    }
    else {
      var to_reply = "Che cazz è " + conf_name + "?";
      reply.markdown(to_reply);
    }
  } 
});



potena_bot.text(answer.onMessage);
