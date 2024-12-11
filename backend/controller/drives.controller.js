import Drive from "../models/drives.models.js";

// Controller for creating a new drive
export const createDrive = async (req, res) => {
  try {
    const { name, time, image } = req.body;

    // Validate that all required fields are provided
    if (!name || !time || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create a new Drive document
    const newDrive = new Drive({
      name,
      time,
      image
    });

    // Save the new Drive to the database
    await newDrive.save();

    // Send a success response
    res.status(201).json({ message: "Drive created successfully", drive: newDrive });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Controller for fetching all drives
export const getAllDrives = async (req, res) => {
  try {
    const drives = await Drive.find(); // Find all drives in the database
    res.status(200).json(drives);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Controller for fetching a drive by ID
export const getDriveById = async (req, res) => {
  try {
    const drive = await Drive.findById(req.params.id); // Find a drive by ID

    if (!drive) {
      return res.status(404).json({ message: "Drive not found" });
    }

    res.status(200).json(drive);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Controller for updating a drive by ID
export const updateDriveById = async (req, res) => {
  try {
    const { name, time, image } = req.body;
    const drive = await Drive.findByIdAndUpdate(
      req.params.id,
      { name, time, image }, // Fields to update
      { new: true } // Return the updated document
    );

    if (!drive) {
      return res.status(404).json({ message: "Drive not found" });
    }

    res.status(200).json({ message: "Drive updated successfully", drive });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Controller for deleting a drive by ID
export const deleteDriveById = async (req, res) => {
  try {
    const drive = await Drive.findByIdAndDelete(req.params.id); // Delete the drive by ID

    if (!drive) {
      return res.status(404).json({ message: "Drive not found" });
    }

    res.status(200).json({ message: "Drive deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Controller for deleting all drives
export const deleteAllDrives = async (req, res) => {
  try {
    await Drive.deleteMany(); // Delete all drives
    res.status(200).json({ message: "All drives deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
