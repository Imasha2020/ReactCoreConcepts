import  React from "react";
import {createRoot} from "react-dom";

const Student = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h3", {}, props.name),
    React.createElement("h3", {}, props.age),
    React.createElement("h3", {}, props.course),
  ]);
};

const StudentCard = (props) => {
  return React.createElement(
    "div",
    { className: "st-card" },
    React.createElement("img", {
      src: "https://static.vecteezy.com/system/resources/previews/048/711/768/non_2x/happy-graduate-student-holding-diploma-and-books-vector.jpg",
      alt: "Student Image",
      className: "student-image",
    }),

    React.createElement(Student, {...props} , {}),
  );
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Hello, React!"), //h1 is wrapper element   {} is passed data    "Hello, React!" is content
    React.createElement(StudentCard, {name : "Amal" , age: 20 , course: "BSc"} ,{}),
    React.createElement(StudentCard, {name : "Kamal" , age: 22 , course: "MSc"} ,{}),
    React.createElement(StudentCard, {name : "Sonal" , age: 21 , course: "BCom"} ,{}),
    React.createElement(StudentCard, {name : "Ravi" , age: 23 , course: "BCA"} ,{}),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
