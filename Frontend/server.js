const express = require('express');
const app = express();

app.get('/', index);
app.get('/adminloginpage', adminloginpage);



function index(req, res) {
    res.sendFile('index.html', { root: __dirname });
}
function adminloginpage(req, res) {
    res.sendFile('AdminLogin.html', { root: __dirname });
}


app.listen(4567, () => console.log("server starts at port number 4567"));