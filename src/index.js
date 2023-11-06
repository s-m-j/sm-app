import React from "react";
import ReactDOM from "react-dom/client";

/* function Greeting() {
  return <h3>My First Componene</h3>;
} */

function Greeting() {
  return React.createElement("h2", {}, "Hello from Me");
}

// В шаблоне документа (index.html) находим элемент с идентификатором root
// И сопоставляем с ним корневой элемент приложения (этот элемент единственный, остальные будут вложены в нем)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
