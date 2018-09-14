const bg = require('botgram');

var venafrano = require('./molisan-vocabulary.js');     // load the vocabulary for random sentence generation
var utils = require('./utils.js');                      // load base utilities to address lists
var lists = require('./misc_lists.js');                 // load lists of photo/names/curses/stuff


exports.declare = function(potena_bot, string) {
  potena_bot.command(string, function (msg, reply, next) {
    if(string == "help") {
      reply.markdown("**Aee! T l sev ritt** \n\t `/help` : issi vi. \n\t `/foto` : e c la ve. \n\t `/ficadelgiorno` : a pressione. \n\t `/frasedelgiorno` : aee. \n\t `/mamma` : ngul a mammt. \n\t `/zambardi` : sex symbol. \n\t `/random` : gli vi.");
    }
    else if(string == "mamma") {
       reply.markdown("Ngul a mammt!"); 
    }
    else if(string == "zambardi"){
      reply.markdown("Chigl s'ha chiavat a mamm!");
    }
    else if(string == "foto"){
      reply.photo(utils.randomElementFromList(lists.photo));
    }
    else if(string == "ficadelgiorno"){
      reply.photo(utils.randomElementFromList(lists.ficadelgiorno));
    }
    else if(string == "dominique"){
      reply.photo("http://danielevangelista.altervista.org/PotenaBotMedia/Photos/dominik.jpg");
    }
    else if(string == "random"){
      reply.markdown(venafrano.generateMolisan());
    }
    else if(string == "deadline"){
      var msg_splitted = msg.text.split(" ");
      if (msg_splitted.length == 2) {
        var conf_name = msg_splitted[1];
        if (conf_name in lists.deadlines) {
          var today = new Date();
          var date_diff = lists.deadlines[conf_name].getTime() - today.getTime();
          var date_diff_in_sec = Math.abs(date_diff / 1000);
          var to_reply = "Ahah! Tie soltant " + Math.floor(date_diff_in_sec).toString() + " second a " + conf_name + ". Futt a mov!";
          reply.markdown(to_reply);
        } else {
          var to_reply = "Che cazz è " + conf_name + "?";
          reply.markdown(to_reply);
        }
      } 
    } // deadline
  })  
  
}

