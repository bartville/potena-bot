var lists = require('./misc_lists.js');
var utils = require('./utils.js');

// PotenaBot is triggered by specific words, as Pollo/Tarallo/Alberto
exports.onMessage = function(msg, reply){
	var to_reply = msg.text
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
  } else if (msg.text.indexOf('lol' ) > -1  || msg.text.indexOf('Lol') > -1) {
		to_reply = 'Cazz c rir, strunz!'
    reply.text(to_reply).then();
    return;      
  } else if (msg.text.indexOf('sapere' ) > -1  || msg.text.indexOf('sai') > -1) {
		to_reply = 'e, l sacc, l sacc!'
    reply.text(to_reply).then();
    return;        
  } else if (msg.text.indexOf('alberto') > -1 || msg.text.indexOf('Alberto') > -1) {
		to_reply = 'Albrdo!'
    reply.text(to_reply).then();
    return;       
  } else if (msg.text.indexOf('ciro') > -1 || msg.text.indexOf('Ciro') > -1) {
		to_reply = 'Chair!'
    reply.text(to_reply).then();
    return;       
  } else if (msg.text.indexOf('mannaggia') > -1 || msg.text.indexOf('mannagg') > -1) {
		to_reply = 'negg sant Ncandr!'
    reply.text(to_reply).then();
    return;       
/*  } else if (msg.text.indexOf('dominique') > -1 || msg.text.indexOf('Dominique') > -1) {
    reply.photo("http://danielevangelista.altervista.org/PotenaBotMedia/Photos/dominik.jpg", '"eho, hai rotto il cazz!"');
    return;       
*/
    } else if (msg.text.indexOf('insulta') > -1 || msg.text.indexOf('Insulta') > -1) { 
    var msg_splitted = msg.text.split(" ");
    var id_insulta = msg_splitted.indexOf('insulta')
    if(id_insulta == -1)
      id_insulta = msg_splitted.indexOf('Insulta');
    to_reply = msg_splitted[id_insulta+1] + utils.randomElementFromList(lists.curses);
    reply.text(to_reply).then();
    return;
  }
  
}