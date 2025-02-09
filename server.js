const express = require("express");
const path = require("path");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 3000;


app.use(cors()); 
app.use(express.json()); 
app.use(express.static(path.join(__dirname, "public"))); 


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"));
});
app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "contact.html"));
});
app.get("/generate", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "generate.html"));
});
app.get("/time", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "age.html"));
});


app.post("/hash", async (req, res) => {
    try {
        const { password } = req.body;
        if (!password) {
            return res.status(400).json({ error: "Password is required" });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        res.json({ hashedPassword }); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
