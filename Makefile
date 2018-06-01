install:
	npm install $(S) $(N)

start-even:
	npm run babel-node -- src/bin/brain-even.js

start-calc:
	npm run babel-node -- src/bin/brain-calc.js

start-gcd:
	npm run babel-node -- src/bin/brain-gcd.js

start-bal:
	npm run babel-node -- src/bin/brain-balance.js	

publish:
	npm publish

lint:
	npm run eslint .
