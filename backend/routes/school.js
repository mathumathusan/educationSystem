const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const School = require("../models/School");

// Route for handling user registration
router.post("/school/signup", async (req, res) => {
  try {
    // Fetching values from the request body
    const {
      schoolname,
      subject,
      address,
      city,
      state,
      verification,
      email,
      phoneno,
      password,
    } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // Hashing with a salt round of 10

    // Create a new user instance with the hashed password
    const newSchool = new School({
      schoolname,
      subject,
      address,
      city,
      state,
      verification,
      email,
      phoneno,
      password: hashedPassword, // Store the hashed password
    });

    // Save the user to the database
    await newSchool.save();

    // Respond with a success message
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    // Handle any errors
    return res.status(500).json({ error: "Registration failed" });
  }
});

router.post("/school/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists in the database
    const school = await School.findOne({ email });

    if (!school) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Compare the password using bcrypt or any secure comparison method
    const isPasswordValid = await bcrypt.compare(password, school.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // If the user and password are valid, simply return a success message
    return res.status(200).json({ message: "Login successful", school });
  } catch (error) {
    console.error("Login error", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/schools", async (req, res) => {
  try {
    const data = await School.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/school/:id", async (req, res) => {
  try {
    const data = await School.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/school/:id", async (req, res) => {
  try {
    const result = await School.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/school/:id", async (req, res) => {
  try {
    const result = await School.findByIdAndDelete(req.params.id);
    res.send("Data Successfully deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
