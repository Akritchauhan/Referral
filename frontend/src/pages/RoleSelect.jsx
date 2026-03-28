import { useNavigate } from "react-router-dom";
import "./common.css";

export default function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div className="flex-center" style={{ height: "100vh" }}>
      <div className="card">
        <h2>Select Role</h2>

        <button className="btn btn-primary" onClick={() => navigate("/login?role=student")}>
          Student
        </button>

        <button className="btn btn-success" onClick={() => navigate("/login?role=employee")}>
          Employee
        </button>
      </div>
    </div>
  );
}