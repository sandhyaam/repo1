import adminModel from './adminModel';
import warden from '../common/wardenModel';
import student from '../common/StudentModel';
import menu from '../common/menuModel';
import rooms from '../common/roomModel';
import feedback from '../common/feedbackModel';
import paymentHistory from '../common/paymentHistoryModel';
import { sendEmail } from '../common/email';

export const login = (req, res) => {
    adminModel.findOne({ "username": req.query.username, "password": req.query.password }, (err, result) => {
        res.send(result);
    })
}

export const addWarden = (req, res) => {
    warden.create(req.body, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            const subject = 'File Received';
            const body = `You Received a File from Admin<br><br>Phone: ${req.body.phone}<br>Password: ${req.body.password}<br>Please Login Using this Credentials <br>Thank You.`;
            sendEmail(req.body.emailid, subject, body);
            res.send(result);

        }
    })
}

export const viewWarden = (req, res) => {
    warden.find((err, result) => {
        res.send(result);
    })
}

export const updateWarden = (req, res) => {
    warden.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        } else {
            res.send(updatedObj);
        }
    })
}
export const deleteWarden = (req, res) =>
    warden.findByIdAndRemove(req.params.id, (err, deletedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(deletedObj);
        }
    });
export const addStudent = (req, res) => {
    student.create(req.body, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            var flag = -1;
            rooms.findOneAndUpdate({ "roomno": req.body.roomno }, { $inc: { vacancies: flag } }, (errr, ok) => {
                if (errr) {
                    res.send(errr);
                }
            })
            paymentHistory.create(req.body, (err, result) => {
                if (err) {
                    res.send(err);
                }
            })
            const subject = 'File Received';
            const body = `You Received a File from Admin<br><br>Phone: ${req.body.phone}<br>Password: ${req.body.password}<br>Advance Amount:${req.body.paidamount}<br>Please Login Using this Credentials <br>Thank You.`;
            sendEmail(req.body.emailid, subject, body);
            res.send(result);

        }
    })
}


export const viewStudent = (req, res) => {
    student.find((err, result) => {
        res.send(result);
    })
}


export const updateStudent = (req, res) => {
    student.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {

        if (err) {
            res.send(err);
        }
        else {
            if (req.body.roomno !== req.body.temproomno) {
                var flag = -1;
                rooms.findOneAndUpdate({ "roomno": req.body.roomno }, { $inc: { vacancies: flag } }, (errr, ok) => {
                    if (errr) {
                        res.send(errr);
                    }
                })
                var flag2 = 1;
                rooms.findOneAndUpdate({ "roomno": req.body.temproomno }, { $inc: { vacancies: flag2 } }, (errrr, okk) => {
                    if (errrr) {
                        res.send(errrr);
                    }
                })
                res.send(updatedObj);
            }
            else {
                res.send(updatedObj);
            }

        }
    })
}
export const deleteStudent = (req, res) => {
    student.findByIdAndRemove(req.params.id, (err, deletedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            var flag = 1;
            rooms.findOneAndUpdate({ "roomno": req.params.r }, { $inc: { vacancies: flag } }, (errr, ok) => {
                if (errr) {
                    res.send(errr);
                } else {
                    res.send(ok);
                }
            })
        }
    })
}


export const viewMenu = (req, res) => {
    menu.find((err, result) => {
        res.send(result);
    })
}

export const viewRooms = (req, res) => {
    rooms.find((err, result) => {
        res.send(result);
    })
}

export const viewFeedback = (req, res) => {
    feedback.find((err, result) => {
        res.send(result);
    })
}




export const getpayDetails = (req, res) => {
    student.find({ "htno": req.query.htno }, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {

            res.send(result);

        }
    })
}

export const addPayment = (req, res) => {
    student.findOneAndUpdate({ "htno": req.params.htno }, req.body, { new: true }, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            paymentHistory.create(req.body, (err, result) => {
                if (err) {
                    res.send(err);
                }
                else {
                    student.findOne({ "htno": req.params.htno }, (err, result) => {
                        if (err) {
                            res.send(err);
                        }
                        else {
                            const subject = 'Hostel Management System';
                            const body = `You Received your Fee Payment Details from Admin:<br><br>HallTicket No.: ${req.body.htno}<br>Advance Amount:${req.body.paidamount}<br>Newpayment: ${req.body.newpayment}<br>Due:${req.body.due}<br>Thank You.`;
                            sendEmail(result.emailid, subject, body);
                            res.send(result);
                        }

                    })
                }
            })


        }
    })
}

export const paymentdata = (req, res) => {
    paymentHistory.find({ "htno": req.query.htno }, (err, result) => {
        res.send(result);
    })
}


export const getData = (req, res) => {
    student.findById(req.params.id, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send([result]);
        }
    })
}
export const wardendownload = (req, res) => {
    warden.findById(req.params.id, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send([result]);
        }
    })
}
export const getWardenData = (req, res) => {
    warden.findById(req.params.id, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send([result]);
        }
    })
}
