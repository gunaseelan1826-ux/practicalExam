import React, { useState } from "react";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Pending");

  const addProject = () => {
    if (name && title) {
      setProjects([
        ...projects,
        {
          id: Date.now(),
          name,
          title,
          status,
        },
      ]);

      setName("");
      setTitle("");
    }
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <div className="container">
      <h1>Student Project Management</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <button onClick={addProject}>Add Project</button>
      </div>

      <h2>Project List</h2>

      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Project Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{project.title}</td>
              <td>{project.status}</td>
              <td>
                <button
                  className="delete"
                  onClick={() => deleteProject(project.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {projects.length === 0 && <p>No projects added yet.</p>}
    </div>
  );
}

export default App;