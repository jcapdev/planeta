const {Router}  = require('express');

const router = Router();


router.get('/mainlog', (req, res) => res.redirect('/main.js'))
router.get('/', (req, res) => res.redirect('/login.html'))

module.exports = router;

