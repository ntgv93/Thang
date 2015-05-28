module.exports.extractEmail = extractEmail;

function extractEmail(comment) {

  var regexp = /[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9]+/i;
  var matches = regexp.exec(comment);

  if(matches === null){
    return null;
  }

  return matches[0].toLowerCase();
}