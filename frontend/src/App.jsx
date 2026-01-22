import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddStudent from "./pages/AddStudent";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const addStudent = (student) => {
        setStudents((prevStudents) => [...prevStudents,student]);
  }
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex justify-center pt-10 px-4">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-semibold mb-6 text-center">
            Mini Career Assessment Dashboard
          </h1>
          <nav className="flex justify-center mb-8 gap-4">
            <Link to="/" className="text-sm font-medium underline">
              Add Student
            </Link>
            <Link to="/dashboard" className="text-sm font-medium underline">
              Dashboard
            </Link>
          </nav>
          <Routes>
            <Route path="/" element={<AddStudent  addStudent={addStudent} />} />
            <Route path="/dashboard" element={<Dashboard students={students}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
