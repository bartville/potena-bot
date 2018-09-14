// returns a valid random id from specified list
exports.randomIdFromList = function (list) {
  return Math.floor((Math.random() * list.length));
}
// return a random element from specified list
exports.randomElementFromList = function (list) {
  return list[this.randomIdFromList(list)];
}