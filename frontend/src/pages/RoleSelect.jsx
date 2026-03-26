import { useNavigate } from "react-router-dom";

export default function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Select Your Role</h1>

      <button onClick={() => navigate("/login?role=student")}>
        Student
      </button>

      <button onClick={() => navigate("/login?role=employee")}>
        Employee / Hirer
      </button>
    </div>
  );
}