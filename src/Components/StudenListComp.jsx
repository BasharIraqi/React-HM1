import React from "react";
import StudentComp from "./StudentComp";

export default function StudentListComp() {
    const students = [ { studentName: "John", studentGrade: 55, studentId: "1" },
    { studentName: "Jane", studentGrade: 65, studentId: "2" },
    { studentName: "Joe", studentGrade: 75, studentId: "3" },
    { studentName: "Jack", studentGrade: 85, studentId: "4" },
    { studentName: "Jill", studentGrade: 95, studentId: "5" },
    ]
    return (
        <>
            <h1>Student List</h1>
            <StudentComp students={students} />
        </>
    );
}
      

    