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
  <img src="./images/Aleksej_Ivanov_Tobol.jpg" alt="Алексей иванов. Тобол" />
);
const Title = () => <h2>Title of the Book</h2>;
const Author = () => {
  const inlineGeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineGeadingStyles}>Алексей Иванов</h4>;
};

// В шаблоне документа (index.html) находим элемент с идентификатором root
// И сопоставляем с ним корневой элемент приложения (этот элемент единственный, остальные будут вложены в нем)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
