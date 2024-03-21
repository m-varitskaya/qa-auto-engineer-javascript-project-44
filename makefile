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

brain-calc: # игра калькулятор
	node bin/brain-calc.js

brain-gcd: # игра с нахождением нод
	node bin/brain-gcd.js	

brain-progression: #игра с пропущенным числом в последовательности
	node bin/brain-progression.js	