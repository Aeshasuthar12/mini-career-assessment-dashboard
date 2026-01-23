import { useState } from "react";
import { addStudentApi } from "../api/studentApi";

function StudentForm() {
  const [formData, setFormData] = useState({
    name: "",
    student_class: "",
    interests: "",
    aptitude_score: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudentApi(formData);
    setFormData({
      name: "",
      student_class: "",
      interests: "",
      aptitude_score: "",
    });
  };

  return (
  <div className="min-h-[75vh] flex items-center justify-center bg-gray-50">
    <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
      
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        Student Assessment Form
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        
        <div>
          <label className="text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="mt-1 w-full rounded-lg border border-gray-300
                       px-4 py-2 focus:ring-2 focus:ring-indigo-200
                       focus:border-indigo-400 outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Class</label>
          <input
            type="text"
            placeholder="Enter your class"
            value={formData.student_class}
            onChange={(e) =>
              setFormData({ ...formData, student_class: e.target.value })
            }
            className="mt-1 w-full rounded-lg border border-gray-300
                       px-4 py-2 focus:ring-2 focus:ring-indigo-200
                       focus:border-indigo-400 outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Interests</label>
          <input
            type="text"
            placeholder="e.g. Coding, Design"
            value={formData.interests}
            onChange={(e) =>
              setFormData({ ...formData, interests: e.target.value })
            }
            className="mt-1 w-full rounded-lg border border-gray-300
                       px-4 py-2 focus:ring-2 focus:ring-indigo-200
                       focus:border-indigo-400 outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">
            Aptitude Score
          </label>
          <input
            type="number"
            placeholder="Enter score"
            value={formData.aptitude_score}
            onChange={(e) =>
              setFormData({ ...formData, aptitude_score: e.target.value })
            }
            className="mt-1 w-full rounded-lg border border-gray-300
                       px-4 py-2 focus:ring-2 focus:ring-indigo-200
                       focus:border-indigo-400 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-indigo-500 text-white
                     py-2.5 rounded-lg font-medium
                     hover:bg-indigo-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
);

}

export default StudentForm;
