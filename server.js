var express = require("express");

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

// Redirect HTTPS to HTTP (Weathermap Free plan doesn't work with HTTPS')
app.use(function (req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'http') {
        next();
    } else {
        res.redirect('http://' + req.hostname + req.url);
    }
});

app.use(express.static("public"));


app.listen(PORT, function(){
    console.log("Server running on port " + PORT);
});