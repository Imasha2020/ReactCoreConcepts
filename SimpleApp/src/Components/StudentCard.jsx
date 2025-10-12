import React from "react";
import Student from "../Components/Student.jsx";

const StudentCard = ({ name, age, course }) => {
    return (
        <div className="st-card">
            <img src="../Components/happy-graduate-student-holding-diploma-and-books-vector.jpg" 
            alt={`Student ${name}`} 
            className = "student-image"/>
            <Student name={name} age={age} course={course} />
        </div>
    );
};

export const test = 10;

export default StudentCard;