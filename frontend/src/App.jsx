import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/jobs";
import ResumeUpload from "./pages/ResumeUpload";
import RoleSelect from "./pages/RoleSelect";
import CreateJob from "./pages/CreateJob";
import MyJobs from "./pages/MyJobs";

<Routes>
  <Route path="/" element={<RoleSelect />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
</Routes>

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/upload" element={<ResumeUpload />} />
        <Route path="/" element={<RoleSelect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-job" element={<CreateJob />} />
        <Route path="/my-jobs"  element={<MyJobs/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;