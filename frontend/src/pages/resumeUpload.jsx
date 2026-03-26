import axios from "axios";

export default function ResumeUpload() {
  const uploadFile = async (e) => {
    const file = e.target.files[0];
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("file", file);

    await axios.post(
      "http://127.0.0.1:8000/resumes/",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Uploaded!");
  };

  return (
    <div>
      <h2>Upload Resume</h2>
      <input type="file" onChange={uploadFile} />
    </div>
  );
}