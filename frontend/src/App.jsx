// frontend/src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/jobs"; 
import ResumeUpload from "./pages/resumeUpload"; 
import CreateJob from "./pages/CreateJob";
import MyJobs from "./pages/MyJobs";
// RoleSelect import removed

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Set Login as the starting page */}
        <Route path="/" element={<Login />} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Dashboard & Feature Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/upload" element={<ResumeUpload />} />
        <Route path="/create-job" element={<CreateJob />} />
        <Route path="/my-jobs" element={<MyJobs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;