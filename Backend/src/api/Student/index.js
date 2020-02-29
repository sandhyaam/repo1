import { Router } from 'express'
import { feedbackadd,login,viewFeedback,profile,search, getpassword,forgetpassword,updateStudent}from './controller'


const router = new Router();

router.get('/login',login);

router.get('/profile',profile);

router.post('/feedbackadd',feedbackadd);

router.get('/viewFeedback',viewFeedback);

router.get('/search',search);

router.put('/getpassword/:htno',getpassword);

router.get('/forgetpassword',forgetpassword);

router.put('/updateStudent/:id',updateStudent);


export default router;