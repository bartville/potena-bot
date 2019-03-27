var utils = require("./utils.js");
var people = require("./persone.js");

exports.times = ['oggi', 'domani', "quest'anno", "l'anno prossimo", "questo semestre", "per i prossimi 3 anni"];
exports.verbs = ['si occupa di', 'presenta una demo a', "é responsabile di", "fa lezione a"];
exports.duties = ['openDIAG', 'Maker Faire', 'TDP', 'Laboratorio di IA', 'OberSeminar', "Lista Acquisti", "RoboCup"];

exports.datasets = ["catacombe di Priscilla", "Jesi", "Ancona", "Caffarella", "Eschikon", "Zurigo", "Cambuash"];

exports.meeting_themes = ["le normative sulla sicurezza del laboratorio", 
                          "la classificazione della peronospera per i girasoli", 
                          "il semantic mapping", 
                          "la calibrazione automatica di tutti i sensori per la human robot interaction",
                          "il laboratorio dopo averlo messo in ordine"];

exports.roland_duties = ["devi venire a spazzolare il lama",                        
                         "mi devi costruire un nuovo UAV per far giocare il lama",
                         "mi devi progettare un UGV per raccogliere la cacca del lama"];


// generates a molisan sentence as: subject + verb + preposition + object
exports.generateNardiPadulo = function() {
  var paduli = [this.basePadulo(), this.labMeetingPadulo(), this.datasetAcquisitionPadulo()];
  return utils.randomElementFromList(paduli);
}

exports.addAccompagnatore = function(sentence) {
  var subject = people.nardi;
  while(subject == people.nardi) { 
    subject = utils.randomElementFromList(people.subjects);
  }
  var re_splitted = sentence.split('"');
  var extended_sentence = '"' + re_splitted[1] + " ...e " + subject + ' verrà con me!"';
  return extended_sentence.replace(people.nardi, "il sottoscritto");
} 

exports.basePadulo = function() {
  var time = utils.randomElementFromList(this.times);
  var subject = utils.randomElementFromList(people.subjects);
  var verb = utils.randomElementFromList(this.verbs);
  var duty = utils.randomElementFromList(this.duties);
  var sentence = '"' + time + ' ' + subject + ' ' + verb + ' ' + duty + '"';
  if(subject == people.nardi)
    return this.addAccompagnatore(sentence);
  return sentence;  
}

exports.labMeetingPadulo = function() {
  var time = "al prossimo meeting di laboratorio";
  var subject = utils.randomElementFromList(people.subjects);
  var verb = "presenterà";
  var meeting_theme = utils.randomElementFromList(this.meeting_themes);
  var sentence = '"' + time + ' ' + subject + ' ' + verb + ' ' + meeting_theme + '"';
  if(subject == people.nardi)
    return this.addAccompagnatore(sentence);
  return sentence;  
}

exports.datasetAcquisitionPadulo = function() {
  var time = utils.randomElementFromList(this.times);
  var subject = utils.randomElementFromList(people.subjects);
  var verb = "andrà ad acquisire un dataset a";
  var dataset = utils.randomElementFromList(this.datasets);
  var sentence = '"' + time + ' ' + subject + ' ' + verb + ' ' + dataset + '"';
  if(subject == people.nardi)
    return this.addAccompagnatore(sentence);
  return sentence;     
}

exports.generateRolandPadulo = function() {
  var subject = 'ooooooh Ciiiirooo';
  var time = utils.randomElementFromList(this.times);
  var padulo = utils.randomElementFromList(this.roland_duties);
  var sentence = '"' + subject + ' ' + time + ' ' + padulo + '"';
  return sentence;
}

exports.rolandSendCiro = function() {
  return '"ooooooh Ciiiiiroooo, vai tu al posto mio oooooh"';
}