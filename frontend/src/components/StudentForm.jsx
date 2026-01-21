import React from "react";

function StudentForm() {
  return (
    <div className="max-w-md max-auto mt-10 p-6 rounded shadow-sm ">
      <h2 className="text-xl font-semibold mb-6 text-center">
        Student Assessment Form
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Class</label>
          <input
            type="number"
            placeholder="Enter Your Class"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 "
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Interests</label>
          <input
            type="text"
            placeholder="e.g. Coding, Design.."
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Aptitude Score
          </label>
          <input
            type="number"
            placeholder="Enter Your Score"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1"
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
