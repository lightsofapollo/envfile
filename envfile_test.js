suite('envfile', function() {
  var envfile = require('./'),
      fixture = require('fs').readFileSync('test/fixture.env', 'utf8');

  test('parsed content', function() {
    var result = envfile(fixture);
    assert.deepEqual(result, {
      XFOO: '1',
      BAR: 'amazingmagicalthings'
    });
  });
});
