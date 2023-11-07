import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
const books = [
  {
    author: "Алексей Иванов",
    title: "Тобол. Много званных",
    img: "./images/Aleksej_Ivanov_Tobol.jpg",
    id: 1,
  },
  {
    author: "Эдуард Овечкин",
    title: "Акулы из стали",
    img: "./images/Eduard_Ovechkin__Akuly_iz_stali.jpg",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book} key={book.id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props.book;
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
