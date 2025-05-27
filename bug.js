import express from 'express';
const app = express();

// Middleware to escape user input (basic example)
function sanitize(input) {
    return String(input)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

app.get('/user/:id', function (req, res) {
    const userId = sanitize(req.params.id); // ✅ Sanitize input
    res.send(`User ID is: ${sanitize(userId)}`); // Ensure sanitization is applied when sending the response
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

let debug = true;
if (debug === false) {  // ✅ Comparison operator fixed
    console.log("Debug mode is off");
}
