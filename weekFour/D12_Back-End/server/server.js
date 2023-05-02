const express = require('express');
const app = express();
const port = 8000;

app.get("/api", (req, res) => {
    res.json({ message: "Hello World!" });
});

app.get("/api/neko", (req, res) => {
    res.json({ catName: "みな", catAge: "2歳5ヶ月", adoptionDate: 20210206 });
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );