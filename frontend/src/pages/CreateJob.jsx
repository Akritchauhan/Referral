import { useState } from "react";
import axios from "axios";
import "./common.css";

export default function CreateJob() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");

  const handleSubmit = async () => {
    await axios.post(
      "http://127.0.0.1:8000/jobs/create/",
      {
        title,
        company,
        description,
        skills_required: skills.split(",").map(s => s.trim()),
      },
      {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      }
    );

    alert("Job Posted!");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Create Job</h2>

        <input className="input" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <input className="input" placeholder="Company" onChange={(e) => setCompany(e.target.value)} />
        <textarea className="input" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
        <input className="input" placeholder="Skills (comma separated)" onChange={(e) => setSkills(e.target.value)} />

        <button className="btn btn-primary" onClick={handleSubmit}>
          Post Job
        </button>
      </div>
    </div>
  );
}