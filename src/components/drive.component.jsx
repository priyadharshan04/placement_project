import  { useEffect, useState } from "react";
import axios from "axios";
import "./drive.style.css"; // Link to your CSS file for styling


const DriveList = () => {
  const [drives, setDrives] = useState([]); // Store fetched drives
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchDrives = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/drives");
        if (response.status === 200) {
          setDrives(response.data); // Update drives data
        } else {
          throw new Error("Unexpected response from the server");
        }
      } catch (err) {
        setError(err.message || "Failed to fetch drives");
      } finally {
        setLoading(false);
      }
    };

    fetchDrives();
  }, []);

  // Loading and Error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    
    <div className="drive-container">
      <h2>Ongoing interview drives</h2>
      <ul className="drive-list">
        {drives.map((drive) => (
          <li className="drive-item" key={drive._id}>
            <img
              className="drive-logo"
              src={drive.image}
              alt={drive.name || "Company Logo"}
            />
            <div className="drive-details">
              <h3>{drive.name}</h3>
              <p>{new Date(drive.time).toLocaleString()}</p>
              <button className="drive-list-button"
                onClick={() => alert(`Viewing more details for ${drive.name}`)}
        
              >
                View More
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DriveList;
