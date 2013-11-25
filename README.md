# envfile

Very simple node utility to read .env files (like foreman).

WARNING: This is not a true env parser it will not deal with quotation
or other fancy things. Additionally it expects every environment
variable to be on its own line.

## Usage


some.env:
```
FOO=true
MYSQL=1
```

```js
var envfile = require('envfile'),
    fs = require('fs');


envfile.parse(fs.readFileSync('some.env'));
// => { FOO: 'true', MYSQL: '1' }
```
