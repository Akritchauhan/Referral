import { useState } from "react";
import axios from "axios";

export default function CreateJob() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    try {
      await axios.post(
        "http://127.0.0.1:8000/jobs/create/",
        {
          title,
          company,
          description,
          skills_required: skills, 
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Job posted!");
    } catch (err) {
      console.log(err.response);
      alert(err.response?.data?.error || "Error posting job");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create Job</h2>

      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <br /><br />

      <input placeholder="Company" onChange={(e) => setCompany(e.target.value)} />
      <br /><br />

      <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
      <br /><br />

      <input placeholder="Skills Required" onChange={(e) => setSkills(e.target.value)} />
      <br /><br />

      <button onClick={handleSubmit}>Post Job</button>
    </div>
  );
}