import axios from "axios";
import "./common.css";

export default function ResumeUpload() {
  const uploadFile = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    await axios.post("http://127.0.0.1:8000/resumes/", formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    alert("Uploaded!");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Upload Resume</h2>
        <input type="file" onChange={uploadFile} />
      </div>
    </div>
  );
}