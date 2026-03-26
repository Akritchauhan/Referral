import { useEffect, useState } from "react";
import axios from "axios";

export default function MyJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/jobs/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setJobs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>My Jobs</h2>
      {jobs.map((job) => (
  <div key={job.id}>
    <h3>{job.title}</h3>
    <p>{job.company}</p>
  </div>
))}
    </div>
  );
}