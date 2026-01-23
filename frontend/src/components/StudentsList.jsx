function StudentsList({ students }) {
  const filteredStudents = students.filter((s) => s.name !== "string");

  if (filteredStudents.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-10">
        No student records available
      </p>
    );
  }

  return (
    <div className="mt-4 max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-2 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            Student Dashboard
          </h2>
        </div>

        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Class</th>
              <th className="px-4 py-2 text-left w-1/3">Interests</th>
              <th className="px-4 py-2 text-center w-24">Score</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((student, index) => (
              <tr
                key={student.id}
                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <td className="px-4 py-4 font-medium text-gray-800">
                  {student.name}
                </td>
                <td className="px-4 py-4">{student.student_class}</td>
                <td className="px-4 py-2 text-gray-600 w-1/3">
                  {student.interests}
                </td>
                <td className="px-4 py-2 text-center w-24">
                  <span
                    className={`px-4 py-1 rounded-full text-xs font-semibold
                      ${
                        student.aptitude_score >= 80
                          ? "bg-green-100 text-green-700"
                          : student.aptitude_score >= 60
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                  >
                    {student.aptitude_score}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentsList;
