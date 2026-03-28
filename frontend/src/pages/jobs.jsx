import { useEffect, useState } from "react";
import axios from "axios";
import "./common.css";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";

export default function ViewJobs() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    axios
      .get("http://127.0.0.1:8000/jobs/get_jobs/", { 
        headers: {
          // Changed to 'Token' because your backend settings define 
          // 'rest_framework.authentication.TokenAuthentication' as the primary class
          Authorization: `Token ${token}`, 
        },
      })
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setError("Failed to load jobs. Please ensure you are logged in.");
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar role="student" />
        <div className="main">
          <h2>Available Jobs</h2>
          
          {error && <p className="error-message">{error}</p>}
          
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div className="card hover-scale" key={job.id}>
                <h3>{job.title}</h3>
                {/* Your backend Job model uses 'company_name' */}
                <p className="text-muted">{job.company_name}</p> 
                <p>{job.description}</p>
                <button className="btn btn-success">Apply</button>
              </div>
            ))
          ) : (
            // FIXED: Removed the curly braces from inside the conditional expression
            !error && <p>No jobs available at the moment.</p>
          )}
        </div>
      </div>
    </>
  );
}