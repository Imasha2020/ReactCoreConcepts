import React from "react";


const Student = ( {name, age, course} ) => {
    return(
        <div>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{course}</h3>
        </div>
        
    );
};

export default Student;