import { createElement } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

//const categories = [
//  "electronics",
//  "jewelery",
//  "men's clothing",
//  "women's clothing"
//];

//view ~ react node
//const app = createElement(
//  "div",
//  {id: "category-section", className: "p-5"},
//  createElement("button", {className: "text-2xl text-gray-500 mb-3"}, "Product Categories"),
//  createElement("div",
//    null,
//    ...categories.map((category) =>
//      createElement(
//        "button",
//        { className: "border border-black px-4 py-2 me-2" },
//        category
//      )
//    )
//  )
//);

const root = document.querySelector("#root");

//view render
createRoot(root).render(<RouterProvider router={router} />);

//const root = document.querySelector("#root");
//const ttl = document.createElement("p");
//ttl.innerText = "Product Categories";
//ttl.classList.add("text-2xl", "text-gray-400", "mb-3");
//
//const categoryButton = (categoryName) => {
//  const btn = document.createElement("button");
//  btn.innerText = categoryName;
//  btn.classList.add("border", "border-black", "px-4", "py-2", "me-2");
//  return btn;
//}
//
//root.append(ttl);
//categories.forEach((category) => root.append(categoryButton(category)));