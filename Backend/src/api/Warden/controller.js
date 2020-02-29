import menu from '../common/menuModel';
import rooms from '../common/roomModel';
import warden from '../common/wardenModel';
import { sendEmail } from '../common/email';

export const login = (req, res) => {
    warden.findOne({ "phone": req.query.phone, "password": req.query.password }, (err, result) => {
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

export const addMenu = (req, res) => {
    menu.create(req.body, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);

        }
    })
}

export const viewMenu = (req, res) => {
    menu.find((err, result) => {
        res.send(result);
    })
}

export const updateMenu = (req, res) => {
    menu.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        } else {
            res.send(updatedObj);
        }
    })
}
export const deleteMenu = (req, res) =>
    menu.findByIdAndRemove(req.params.id, (err, deletedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(deletedObj);
        }
    });



export const addRooms = (req, res) => {
    rooms.create(req.body, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);

        }
    })
}
export const viewRooms = (req, res) => {
    rooms.find({vacancies:{$gt:0}},(err, result) => {
        res.send(result);
    })
}


export const updateRooms = (req, res) => {
    rooms.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        } else {
            res.send(updatedObj);
        }
    })
}
export const deleteRooms = (req, res) =>
    rooms.findByIdAndRemove(req.params.id, (err, deletedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(deletedObj);
        }
    });

    export const profile = (req, res) => {
        warden.find({ "phone": req.query.phone }, (err, result) => {
          res.send(result.map(data => {
            return data;
          }))
        })
      }



      export const getMenu=(req,res)=>{
        menu.find({"day":req.query.day},(err,result)=>{ 
            if (err) {
            res.send(err);
        }
        else {
            
            res.send(result);

        }
    })
}
export const getWardenPassword=(req,res)=>
{
    warden.findOneAndUpdate({"phone":req.params.phone},req.body, { new: true }, (err, updatedObj) => {
                if (err) {
                    res.send(err);
                }
        else{
            const subject = 'File Received';
            const body = `You have generated a Newpassword<br><br>Mobile No.: ${req.params.phone}<br>Password: ${req.body.password}<br>Please Login Using this Credentials <br>Thank You.`;
            sendEmail(updatedObj.emailid, subject, body);
        res.send([updatedObj]);
        }
    })  
}
export const forgetpassword = (req, res) => {
    warden.findOne({ "emailid": req.query.emailid },req.body, (err, updatedObj) => {
        if (err) {
            res.send(err);
        }
        else {
                const subject = 'File Received';
                const body = `Your Password has given below:<br><br>Mobile No.: ${updatedObj.phone}<br>Password: ${updatedObj.password}<br>Please Login Using this Credentials <br>Thank You.`;
                sendEmail(updatedObj.emailid, subject, body);
            res.send(updatedObj);
        }
    })
}