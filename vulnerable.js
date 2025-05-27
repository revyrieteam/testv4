const express = require('express');
const app = express();

app.get('/user/:id', (req, res) => {
    const userId = encodeURIComponent(req.params.id);  // ✅ Basic sanitization
    res.send(`User ID is: ${userId}`);
});

app.listen(3000, () => console.log('Server running on port 3000'));

let debug = true;
if (!debug) console.log("Debug mode is off");  // ✅ Clean check
