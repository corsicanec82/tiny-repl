install:
	npm install

start-backend:
	npx nodemon --exec npx babel-node server/bin/server.js

lint:
	npx eslint .
