import React from "react";
import StudentForm from "../components/StudentForm"


function AddStudent({addStudent}) {
  return (
    <div className="flex justify-center">
     <StudentForm addStudent={addStudent}/>
    </div>
  );
}

export default AddStudent;
