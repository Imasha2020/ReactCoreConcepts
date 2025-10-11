import  React from "react";
import {createRoot} from "react-dom";

const Student = () => {
  return React.createElement("div", {}, [
    React.createElement("h3", {}, "Kamal"),
    React.createElement("h3", {}, 20),
    React.createElement("h3", {}, "BSc"),
  ]);
};

const StudentCard = () => {
  return React.createElement(
    "div",
    { className: "st-card" },
    React.createElement("img", {
      src: "https://static.vecteezy.com/system/resources/previews/048/711/768/non_2x/happy-graduate-student-holding-diploma-and-books-vector.jpg",
      alt: "Student Image",
      className: "student-image",
    }),

    React.createElement(Student),
  );
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Hello, React!"), //h1 is wrapper element   {} is passed data    "Hello, React!" is content
    React.createElement(StudentCard),
    React.createElement(StudentCard),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
