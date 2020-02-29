const express = require('express');
const app = express();

app.get('/', index);
app.get('/adminloginpage', adminloginpage);
app.get('/adminpage',adminhome);
app.get('/wardenloginpage', wardenloginpage);
app.get('/studentloginpage', studentloginpage);
app.get('/addstudents', addstudents);
app.get('/addwardens', addwardens);
app.get('/wardenpage',wardenhome);
app.get('/studentpage',studenthome);
app.get('/addMenu',addMenu);
app.get('/viewMenu',viewMenu);
app.get('/addRooms',addRooms);
app.get('/viewRooms',viewRooms);
app.get('/viewStudents',viewStudents);
app.get('/studentViewMenu',studentViewMenu);
app.get('/feedback',viewFeedback);
app.get('/profile',profile);
app.get('/studentProfile',studentProfile);
app.get('/studentfeedback',feedback);
app.get('/paydetails',paydetails);
app.get('/paymentHistory',paymentHistory);
app.get('/wardendata',wardendata);
app.get('/studentdata',studentdata);
app.get('/students',students);
app.get('/changepassword',changepassword);
app.get('/Student/forgetpassword',forgetpassword);
app.get('/changeWardenpassword',WardenchangePassword);
app.get('/Warden/Wardenforgetpassword',Wardenforgetpassword);

function index(req, res) {
    res.sendFile('index.html', { root: __dirname });
}
function adminloginpage(req, res) {
    res.sendFile('AdminLogin.html', { root: __dirname });
}
function adminhome(req, res) {
    res.sendFile("Admin/AdminHome.html", { root: __dirname });
}
function wardenloginpage(req, res) {
    res.sendFile('wardenlogin.html', { root: __dirname });
}
function studentloginpage(req, res) {
    res.sendFile('studentlogin.html', { root: __dirname });
}
function addwardens(req, res) {
    res.sendFile('Admin/wardens.html', { root: __dirname });
}
function addstudents(req, res) {
    res.sendFile('Admin/students.html', { root: __dirname });
}
function wardenhome(req, res) {
    res.sendFile("Warden/WardenHome.html", { root: __dirname });
}
function studenthome(req, res) {
    res.sendFile("Student/StudentHome.html", { root: __dirname });
}
function addMenu(req, res) {
    res.sendFile('Warden/menu.html', { root: __dirname });
}
function viewMenu(req, res) {
    res.sendFile('Admin/viewMenu.html', { root: __dirname });
}
function addRooms(req, res) {
    res.sendFile("Warden/rooms.html", { root: __dirname });
}
function viewRooms(req, res) {
    res.sendFile('Admin/viewRooms.html', { root: __dirname });
}
function viewStudents(req, res) {
    res.sendFile('Warden/viewStudents.html', { root: __dirname });
}
function studentViewMenu(req, res) {
    res.sendFile('Student/viewMenus.html', { root: __dirname });
}
function viewFeedback(req, res) {
    res.sendFile('Admin/viewFeedback.html', { root: __dirname });
}
function profile(req,res){
    res.sendFile('Warden/profile.html',{root:__dirname});
}
function studentProfile(req,res){
    res.sendFile('Student/profile.html',{root:__dirname});
}
function feedback(req,res){
    res.sendFile('Student/feedback.html',{root:__dirname});
}
function paydetails(req,res){
    res.sendFile('Admin/PaymentDetails.html',{root:__dirname});
}
function paymentHistory(req,res){
    res.sendFile('Admin/paymentHistory.html',{root:__dirname});
}
function wardendata(req,res){
    res.sendFile("Admin/wardendata.html",{root:__dirname});
}
function studentdata(req,res){
    res.sendFile("Admin/studentdata.html",{root:__dirname});
}
function students(req,res){
    res.sendFile("Admin/students.html",{root:__dirname});
}
function changepassword(req,res){
    res.sendFile('Student/changePassword.html',{root:__dirname});
}
function WardenchangePassword(req,res){
    res.sendFile('Warden/changeWardenpassword.html',{root:__dirname});
}
function forgetpassword(req,res){
    res.sendFile('Student/forgetpassword.html',{root:__dirname});
}
function Wardenforgetpassword(req,res){
    res.sendFile('Warden/wardenforgetPassword.html',{root:__dirname});
}

app.listen(2222, () => console.log("server starts at port number 2222"));