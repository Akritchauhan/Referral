import { useNavigate } from "react-router-dom";
import "./common.css";

export default function Sidebar({ role }) {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      {role === "student" && (
        <>
          <button className="btn btn-primary" onClick={() => navigate("/jobs")}>
            View Jobs
          </button>

          <button className="btn btn-secondary" onClick={() => navigate("/upload")}>
            Upload Resume
          </button>
        </>
      )}

      {role === "employee" && (
        <>
          <button className="btn btn-primary" onClick={() => navigate("/create-job")}>
            Post Job
          </button>

          <button className="btn btn-success" onClick={() => navigate("/my-jobs")}>
            My Jobs
          </button>
        </>
      )}
    </div>
  );
}