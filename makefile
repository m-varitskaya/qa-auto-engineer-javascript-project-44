install: # установить зависимости
	npm ci

brain-games: # запуск приветствия
	node bin/brain-games.js

publish: # аргумент чтобы не засорять общее хранилище учебными пакетами
	npm publish --dry-run