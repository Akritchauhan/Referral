import { useNavigate } from "react-router-dom";
import "./common.css";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h2>Job Portal</h2>

      <div>
        <button className="btn btn-secondary" onClick={() => navigate("/dashboard")}>
          Dashboard
        </button>

        <button
          className="btn btn-danger"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}