const path = require('path');
const express = require('express');

const router = express.Router();

const usersControllers = require(path.join( __dirname, '../', 'controllers', 'users'));

router.get('/', usersControllers.getIndex);

router.get('/add-user', usersControllers.getAddUser);

router.post('/add-user', usersControllers.postAddUser);

router.get('/edit-user', usersControllers.getEditUser);

router.post('/edit-user', usersControllers.postEditUser);


router.post('/delete-user', usersControllers.postDeleteUser);


module.exports = router;