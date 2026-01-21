import React from "react";

function StudentsList() {
  const students = [
    {
      id: 1,
      name: "Aesha Suthar",
      class: 12,
      interests: "coding, math",
      aptitudeScore: 80,
    },
    {
      id: 2,
      name: "Dhruvi",
      class: 11,
      interests: "Design",
      aptitudeScore: 83,
    },
  ];
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
