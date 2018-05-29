install:
	npm install $(S) $(N)

start:
	npm run babel-node -- src/bin/brain-even.js

publish:
	npm publish

lint:
	npm run eslint src/bin/index.js
