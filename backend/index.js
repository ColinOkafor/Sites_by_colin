const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

// ✅ Allow Vercel frontend or localhost
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "OPTIONS"],

    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import your routes
const userRoutes = require("./connect.js");
app.options("*", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.status(200).end();
});

app.use("/", userRoutes);

// SIMPLE PASSWORD
const ADMIN_PASSWORD = "secret67";

// Serve admin HTML
app.get("/admin", (req, res) => {
    const pass = req.query.pass;

    if (pass !== ADMIN_PASSWORD) {
        return res.status(401).send("Unauthorized");
    }

    res.sendFile(path.join(__dirname, "admin.html"));
});

// Serve JSON data
app.get("/admin/data", (req, res) => {
    const pass = req.query.pass;

    if (pass !== ADMIN_PASSWORD) {
        return res.status(401).send("Unauthorized");
    }

    const filePath = path.join(__dirname, "data.json");

    if (!fs.existsSync(filePath)) {
        return res.json([]);
    }

    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    res.json(data);
});

// ✅ IMPORTANT: export app instead of listen
module.exports = app;
