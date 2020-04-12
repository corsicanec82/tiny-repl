install:
	npm install

start-backend:
	npx nodemon --exec npx babel-node server/bin/server.js

start-frontend:
	npx webpack --watch

lint:
	npx eslint .
