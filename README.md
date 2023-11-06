### Folder structure

- node_modules - зависимости приложения. Основные - перечеслены в package.json

- public - содержит статическое содержимое, в том числе шаблон страницы (indec.html)

- index.html

  - заголовок
  - шрифтв
  - стили (CSS)
  - id="root" - это собственно все приложение, реальное содержимое "инжектируется" при запуске в этот раздел

- src Собственно разрабатывается код здесь src/infdex.js это входная точка js приложения

- package.json - каждое приложение node.js содержит файл с описанием метаданных приложения (в частности, зависимости приложения, скрипты которые оно выполняет)

- package-lock.json - слепок дерева зависимостей

### Создание приложения

Сначала удалим папку src которую создал за нас create-react-app. Теперь создадим папку с таким же именем и поместим в нее
файл (пустой) index.js

В файле сохраняем такой код

import React from "react";
import ReactDOM from "react=dom/client";

function Greeting() {
return <h3>My First Componene</h3>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);

и видим что наше приложение запустилось. То есть, мы создали функцию (можно было и "стрелочную") которая:

- Начинается с заглавной буквы
- возвращает разметку JSX

# Устанавливаем расширения среды

- Highlight Matching Tag
- emmet
- ES7+ React/Redux/React-Native/JS snippets
