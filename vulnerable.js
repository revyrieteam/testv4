const express = require('express');
const app = express();

app.get('/user/:id', function (req, res) {
    const userId = req.params.id;
    res.send("User ID is: " + userId);  // ❌ Potential XSS
});

app.listen(3000);

let debug = true;
if (debug = false) {  // ❌ Bug: assignment instead of comparison
    console.log("Debug mode is off");
}
