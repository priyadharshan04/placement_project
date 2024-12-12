import  { useState } from "react";
import axios from "axios";
import "./drive.admin.add.css"; // Importing the CSS file

const AddDrive = () => {
  const [name, setName] = useState(""); // State for the drive name
  const [time, setTime] = useState(""); // State for the drive time
  const [image, setImage] = useState(""); // State for the image URL
  const [message, setMessage] = useState(null); // State to show success or error message

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Post new drive data to the backend
      const response = await axios.post("http://localhost:5000/api/drives", {
        name,
        time,
        image,
      });

      if (response.status === 201) {
        setMessage("Drive added successfully!");
        // Reset form fields
        setName("");
        setTime("");
        setImage("");
      } else {
        setMessage("Failed to add the drive.");
      }
    } catch (err) {
      setMessage(`Error: Could not add drive.${err}`);
    }
  };

  return (
    <div className="drive-input-container">
      <h2 className="title">Add a New Drive</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} className="drive-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input  smooth-type"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time" className="form-label">Time:</label>
          <input
            type="datetime-local"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="form-input  smooth-type"
            required
            
          />
        </div>

        <div className="form-group">
          <label htmlFor="image" className="form-label">Image URL:</label>
          <input
            type="url"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="form-input  smooth-type"
            required
            placeholder="http://..."
          />
        </div>

        <button type="submit" className="submit-btn">ADD</button>
      </form>
    </div>
  );
};

export default AddDrive;
