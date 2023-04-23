# Skamoney

## Задачи

- Создать новую задачу [тут](https://trello.com/invite/b/swY1EdLb/3c99624e39f63f7ed07bc0b7667b545e/skamoney)

## Требования

- Установить [Docker](https://www.docker.com/products/docker-desktop)
- Momorepo: `git clone git@github.com:i4yma/skamoney.git`

## Запуск БД

```bash
docker-compose -f ./deployment/docker-compose.yaml up -d --build
```

## Остановка БД

```bash
docker-compose down
```

Открываем наше приложение: [http://127.0.0.1:10888](http://127.0.0.1:10888)


### Установка зависимостей
```bash
yarn insatll
```

### Запуск backend
#### Запуск из корневой папки
```bash
yarn start:backend
```

### Запуск frontend
#### Запуск из корневой папки

```bash
yarn start:frontend
```
