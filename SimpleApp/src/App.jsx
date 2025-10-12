import  React from "react";
import {createRoot} from "react-dom/client";
import StudentCard from "./Components/StudentCard.jsx";
import { test } from "./Components/StudentCard.jsx";

console.log(test);

const App =() =>{
  return(
    <div>
      <h1>My React App</h1>
      <StudentCard name="Amal" age={20} course="BSc" />
      <StudentCard name="Kamal" age={22} course="MSc" />
      <StudentCard name="Sonal" age={21} course="BCom" />
      <StudentCard name="Ravi" age={23} course="BCA" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
