import feedback from '../common/feedbackModel';
import student from '../common/StudentModel';
import menu from '../common/menuModel';
import { sendEmail } from '../common/email';

export const login = (req, res) => {
    student.findOne({ "htno": req.query.htno, "password": req.query.password }, (err, result) => {
        res.send(result);
    })
}
export const updateStudent = (req, res) => {
    student.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        } else {

            res.send(updatedObj);
        }
    })
}

export const feedbackadd = (req, res) => {
    feedback.create(req.body, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);

        }
    })
}
export const viewFeedback = (req, res) => {
    feedback.find((err, result) => {
        res.send(result);
    })
}
export const search = (req, res) => {
    menu.find({ "day": req.query.day }, (err, result) => {
        res.send(result);
    })
}

export const profile = (req, res) => {
    student.find({"htno": req.query.htno }, (err, result) => {
        res.send(result.map(data => {
            return data;
        }))
    })
}

export const getpassword = (req, res) => {
    student.findOneAndUpdate({ "htno": req.params.htno }, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            const subject = 'File Received';
            const body = `You have generated a Newpassword<br><br>Hall Ticket No.: ${req.params.htno}<br>Password: ${req.body.password}<br>Please Login Using this Credentials <br>Thank You.`;
            sendEmail(updatedObj.emailid, subject, body);
            res.send([updatedObj]);
        }
    })
}
export const forgetpassword = (req, res) => {
    student.findOne({ "emailid": req.query.emailid },req.body, (err, updatedObj) => {
        if (err) {
            res.send(err);
        }
        else {
                const subject = 'File Received';
                const body = `Your Password has given below:<br><br>Hall Ticket No.: ${updatedObj.htno}<br>Password: ${updatedObj.password}<br>Please Login Using this Credentials <br>Thank You.`;
                sendEmail(updatedObj.emailid, subject, body);
            res.send(updatedObj);
        }
    })
}
