var utils = require("./utils.js");

/***** LIST OF WORDS FOR MOLISAN VOCABULARY*****/
exports.bonus =        ["aee", "e le vi", "e gli vi" ,"essi vi", "e c la ve", "sant Ncandr", "neggia i cuazz"];
exports.subjects =     ["nardi", "albrdo", "dominik", "lucazz", "telespalla", "roland", "giorgio", "barto'lo", "dodo"];
exports.verbs =        ["spetacc", "ha squacciato", "squacc", "trzzea", "ha spresato", "ha cagato"];
exports.prepositions = ["", "ngopp", "sott", "vicin"];
exports.objects =      ["l vscuott", "le vscuottera", "la frssor", "u pullashtr", "le spiarn"];

// generates a molisan sentence as: subject + verb + preposition + object
exports.generateMolisan = function() {
    var subject = utils.randomElementFromList(this.subjects);
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