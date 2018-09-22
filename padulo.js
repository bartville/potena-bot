var utils = require("./utils.js");
var people = require("./persone.js");

exports.times = ['oggi', 'domani', "quest'anno", "l'anno prossimo", "questo semestre", "per i prossimi 3 anni"];
exports.verbs = ['si occupa di', 'presenta una demo a', "é responsabile di", "fa lezione a"];
exports.duties = ['openDIAG', 'Maker Faire', 'TDP', 'Laboratorio di IA', 'OberSeminar', "Lista Acquisti", "RoboCup"];

exports.datasets = ["catacombe di Priscilla", "Jesi", "Ancona", "Caffarella", "Eschikon", "Zurigo", "Cambuash"];

exports.meeting_themes = ["le normative sulla sicurezza del laboratorio", 
                          "la classificazione della peronospera per i girasoli", 
                          "il semantic mapping", 
                          "la calibrazione automatica di tutti i sensori per la human robot interaction"];

// generates a molisan sentence as: subject + verb + preposition + object
exports.generatePadulo = function() {
  var paduli = [this.basePadulo(), this.labMeetingPadulo(), this.datasetAcquisitionPadulo()];
  return utils.randomElementFromList(paduli);
}

exports.basePadulo = function() {
  var time = utils.randomElementFromList(this.times);
  var subject = utils.randomElementFromList(people.subjects);
  var verb = utils.randomElementFromList(this.verbs);
  var duty = utils.randomElementFromList(this.duties);
  var sentence = '"' + time + ' ' + subject + ' ' + verb + ' ' + duty + '"';
  return sentence;  
}

exports.labMeetingPadulo = function() {
  var time = "al prossimo meeting di laboratorio";
  var subject = utils.randomElementFromList(people.subjects);
  var verb = "presenterà";
  var meeting_theme = utils.randomElementFromList(this.meeting_themes);
  var sentence = '"' + time + ' ' + subject + ' ' + verb + ' ' + meeting_theme + '"';
  return sentence;  
}

exports.datasetAcquisitionPadulo = function() {
  var time = utils.randomElementFromList(this.times);
  var subject = utils.randomElementFromList(people.subjects);
  var verb = "andrà ad acquisire un dataset a";
  var dataset = utils.randomElementFromList(this.datasets);
  var sentence = '"' + time + ' ' + subject + ' ' + verb + ' ' + dataset + '"';
  return sentence;     
}