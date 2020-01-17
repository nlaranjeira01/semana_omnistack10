module.exports = function(sArray) {
  return sArray.split(",").map(s => s.trim());
};
