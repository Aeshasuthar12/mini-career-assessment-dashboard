import React from "react";
import StudentsList from "../components/StudentsList";

function Dashboard({students}) {
  return (
    <div className="max-w-4xl mx-auto">
      <StudentsList students={students} />
    </div>
  );
}

export default Dashboard;
