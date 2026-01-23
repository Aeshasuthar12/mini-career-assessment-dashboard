import { useState, useEffect } from "react";
import StudentsList from "../components/StudentsList";
import { getAllStudentsApi } from "../api/studentApi";

function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getAllStudentsApi().then((res) => {
      setStudents(res.data.reverse());
    });
  }, []);

  return (
    <div className="min-h-screen py-4">
      <div className="max-w-6xl mx-auto px-2">
        <StudentsList students={students} />
      </div>
    </div>
  );
}

export default Dashboard;
