import express from 'express';
import { createDrive, deleteAllDrives, deleteDriveById, getAllDrives, getDriveById, updateDriveById } from '../controller/drives.controller.js';


const router = express.Router();

// POST route for creating a new drive
router.post("/", createDrive);

// GET route for fetching all drives
router.get("/", getAllDrives);

// GET route for fetching a drive by ID
router.get("/:id", getDriveById);

// PUT route for updating a drive by ID
router.put("/:id", updateDriveById);

// DELETE route for deleting a drive by ID
router.delete("/:id", deleteDriveById);

// DELETE route for deleting all drives
router.delete("/", deleteAllDrives);

export default router;