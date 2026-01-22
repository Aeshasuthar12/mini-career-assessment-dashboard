import React from "react";

function StudentsList({students}) {
  
  if(students.length==0){
    return (
      <p className="text-center text-gray-500">No Student Added Yet</p>
    );
  }

  return (
    <div>
      <h2>Student Dashboard</h2>

      <table className="w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Name</th>
            <th className="border px-4 py-2 text-left">Class</th>
            <th className="border px-4 py-2 text-left">Interests</th>
            <th className="border px-4 py-2 text-left">Aptitude Score</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="border px-4 py-2">{student.name}</td>
              <td className="border px-4 py-2">{student.class}</td>
              <td className="border px-4 py-2">{student.interests}</td>
              <td className="border px-4 py-2">{student.aptitudeScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsList;
