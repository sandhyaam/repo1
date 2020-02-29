import { Router } from 'express'
import {
    login,
    updateWarden,
    addMenu,
    addRooms,
    viewMenu,
    updateMenu,
    deleteMenu,
    viewRooms,
    updateRooms,
    deleteRooms,
    profile,
    getMenu,
    getWardenPassword,
    forgetpassword
} from './controller'


const router = new Router();

router.get('/login', login);

router.put('/updateWarden/:id',updateWarden);

router.get('/profile', profile);

router.post('/addMenu', addMenu);

router.get('/viewMenu', viewMenu);

router.put('/updateMenu/:id', updateMenu);

router.delete('/deleteMenu/:id', deleteMenu);

router.post('/addRooms', addRooms);

router.get('/viewRooms', viewRooms);

router.put('/updateRooms/:id', updateRooms);

router.delete('/deleteRooms/:id', deleteRooms);

router.get('/getMenu',getMenu);

router.put('/getWardenPassword/:phone',getWardenPassword);

router.get('/forgetpassword',forgetpassword);


export default router;