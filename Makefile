install:
	npm install $(S) $(N)

start:
	npm run babel-node -- src/bin/brain-games.js

publish:
	npm publish		
