import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

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
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="./images/Aleksej_Ivanov_Tobol.jpg"
    alt="Статистические последствия жирных хвостов"
  />
);
const Title = () => <h2>Title of the Book</h2>;
const Author = () => {
  return <h4>Author</h4>;
};

// В шаблоне документа (index.html) находим элемент с идентификатором root
// И сопоставляем с ним корневой элемент приложения (этот элемент единственный, остальные будут вложены в нем)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
