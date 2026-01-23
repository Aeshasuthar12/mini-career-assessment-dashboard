import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddStudent from "./pages/AddStudent";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        <header className="bg-slate-50">
          <div className="max-w-5xl mx-auto px-6 py-4 text-center">
            <h1 className="text-xl font-semibold text-gray-800">
              Mini Career Assessment Dashboard
            </h1>

            <nav className="mt-2 flex justify-center gap-3">
              <Link
                to="/"
                className="px-4 py-1.5 rounded-md text-sm
                   bg-indigo-100 text-indigo-700
                   hover:bg-indigo-200"
              >
                Add Student
              </Link>

              <Link
                to="/dashboard"
                className="px-4 py-1.5 rounded-md text-sm
                   text-gray-600 hover:bg-gray-100"
              >
                Dashboard
              </Link>
            </nav>
          </div>
        </header>

        <div className="px-4 mt-2">
          <Routes>
            <Route path="/" element={<AddStudent />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
