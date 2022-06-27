import React from "react";

export default function StudentComp(props) {
    let s = {};
    let rating;

    function getRating(grade) {
        if (grade >= 90) {
            rating = "poor";
        } else if (grade >= 80) {
            rating = "ok";
        } else if (grade >= 70) {
            rating = "good";
        } else if (grade >= 60) {
            rating = "execllent";

        }
        return rating;
    }
    function getStyle(grade) {

        if (grade > 0 && grade <= 56) {
            s = { color: "Red" };
            rating = "Poor";
        }
        else if (grade >= 57 && grade <= 75) {
            s = { color: "Yellow" };
            rating = "Ok";
        }
        else if (grade >= 76 && grade <= 85) {
            s = { color: "Orange" };
        }
        else if (grade >= 86 && grade <= 100) {
            s = { color: "Green" };
        }
        return s;
    }

    return (
        <ul>
            {props.students.map(student => (
                    <li>{student.studentId} - {student.studentName} -
                     <span style={getStyle(student.studentGrade)}>
                        {student.studentGrade}</span> -
                         {getRating(student.studentGrade)}
                    </li>
            ))} 
        </ul>
    );
}