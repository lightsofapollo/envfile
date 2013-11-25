function parseLine(object, line) {
  line = line.trim();
  if (!line) return object;

  var pair = line.split('=');
  object[pair[0]] = pair[1];
  return object;
}

function parse(content) {
  // split on newlines
  return content.split('\n').
    // convert lines into an object
    reduce(parseLine, {});
}

module.exports = parse;
