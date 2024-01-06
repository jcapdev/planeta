const {Router}  = require('express');

//import { Router} from "express";

const {createSession} = require('../controllers/payment.controller.js')
//import { createSession } from '../controllers/payment.controller.js'


const router = Router();

router.get('/pagos', (req, res) => res.redirect('/pay.html'))
router.post('/create-checkout-session', createSession )
router.get('/success', (req, res) => res.redirect('/success.html'))
router.get('/cancel', (req, res) => res.redirect('/pay.html'))
/**/ 

module.exports = router;

