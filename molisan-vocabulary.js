var utils = require("./utils.js");
var people = require("./persone.js");

/***** LIST OF WORDS FOR MOLISAN VOCABULARY*****/
exports.bonus =        ["aee", "e l vi", "e gli vi" ,"essi vi", "e c la ve", "sant Ncandr", "neggia i cuazz"];
exports.verbs =        ["spetacc", "ha squacciato", "squacc", "trzzea", "ha spresato", "ha cagato"];
exports.prepositions = ["", "ngopp", "sott", "alloc", "rent"];
exports.objects =      ["l vscuott", "le vscuottera", "la frssor", "i pullashtr", "i spiarn"];

// generates a molisan sentence as: subject + verb + preposition + object
exports.generateMolisan = function() {
    var subject = utils.randomElementFromList(people.subjects);
    var verb = utils.randomElementFromList(this.verbs);
    var preposition = "";
    if(Math.random() > 0.5)
      preposition = utils.randomElementFromList(this.prepositions);
    var object = utils.randomElementFromList(this.objects);
    var sentence = subject + ' ' + verb + ' ' + preposition + ' ' + object;  
    if(Math.random() > 0.5)
      sentence = sentence + ". " + utils.randomElementFromList(this.bonus) + "!";    
    return sentence;
}