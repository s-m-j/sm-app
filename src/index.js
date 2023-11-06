import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const title = "Тобол";
const author = "Алексей Иванов";
const img = "./images/Aleksej_Ivanov_Tobol.jpg";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

// В шаблоне документа (index.html) находим элемент с идентификатором root
// И сопоставляем с ним корневой элемент приложения (этот элемент единственный, остальные будут вложены в нем)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
