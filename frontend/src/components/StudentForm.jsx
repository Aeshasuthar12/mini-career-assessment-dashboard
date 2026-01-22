import React, { useState } from "react";

function StudentForm({ addStudent }) {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    interests: "",
    aptitudeScore: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);
    setFormData({
      name: "",
      class: "",
      interests: "",
      aptitudeScore: "",
    });
  };

  return (
    <div className="max-w-md max-auto mt-10 p-6 rounded shadow-sm ">
      <h2 className="text-xl font-semibold mb-6 text-center">
        Student Assessment Form
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={formData.name}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Class</label>
          <input
            type="number"
            placeholder="Enter Your Class"
            value={formData.class}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 "
            onChange={(e) =>
              setFormData({ ...formData, class: e.target.value })
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Interests</label>
          <input
            type="text"
            placeholder="e.g. Coding, Design.."
            value={formData.interests}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1"
            onChange={(e) =>
              setFormData({ ...formData, interests: e.target.value })
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Aptitude Score
          </label>
          <input
            type="number"
            placeholder="Enter Your Score"
            value={formData.aptitudeScore}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1"
            onChange={(e) =>
              setFormData({ ...formData, aptitudeScore: e.target.value })
            }
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:opacity-90"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
