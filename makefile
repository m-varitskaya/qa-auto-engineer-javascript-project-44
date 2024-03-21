install: # установить зависимости
	npm ci

brain-games: # запуск приветствия
	node bin/brain-games.js

publish: # аргумент чтобы не засорять общее хранилище учебными пакетами
	npm publish --dry-run

lint:
	npx eslint

brain-even: # игра "проверка на четность"
	node bin/brain-even.js