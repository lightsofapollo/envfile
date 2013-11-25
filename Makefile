default: test

.PHONY: test
test: node_modules
	./node_modules/.bin/mocha envfile_test.js

node_modules: package.json
	npm install
