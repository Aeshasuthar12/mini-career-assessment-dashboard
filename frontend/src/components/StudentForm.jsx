import React from "react";

function StudentForm() {
  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <input type="text" placeholder="Enter Your Name" />
        </div>
        <div>
          <label>Class</label>
          <input type="number" placeholder="Enter Your Class" />
        </div>
        <div>
          <label>Interests</label>
          <input type="text" placeholder="e.g. Coding, Design.." />
        </div>
        <div>
          <label >Aptitude Score</label>
          <input type="number" placeholder="Enter Your Score" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StudentForm;
