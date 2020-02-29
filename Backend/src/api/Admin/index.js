import { Router } from 'express'

import {
    login,
    addWarden,
    viewWarden,
    updateWarden,
    deleteWarden,
    addStudent,
    viewStudent,
    updateStudent,
    deleteStudent,
    viewMenu,
    viewRooms,
    viewFeedback,
    addPayment,
    getpayDetails,
    paymentdata,
    getData,
    wardendownload,
    getWardenData
} from './controller'

const router = new Router();

router.get('/', login);

router.post('/addWarden',addWarden);

router.post('/addStudent',addStudent);

router.get('/viewWarden',viewWarden);


router.put('/updateWarden/:id',updateWarden);

router.delete('/deleteWarden/:id',deleteWarden);

router.get('/viewStudent',viewStudent);

router.put('/updateStudent/:id',updateStudent);

router.delete('/deleteStudent/:id/:r',deleteStudent);

router.get('/viewMenu',viewMenu);

router.get('/viewRooms',viewRooms);

router.get('/viewFeedback',viewFeedback);

router.put('/payment/:htno',addPayment);

router.post('/payment',addPayment);

router.get('/getpayDetails',getpayDetails);

router.get('/paymentdata',paymentdata);

router.get('/getData/:id',getData);

router.get('/wardendownload/:id',wardendownload);

router.get('/getWardenData/:id',getWardenData);



export default router;