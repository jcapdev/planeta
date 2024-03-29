const express = require('express');
//import paymentRoutes from './routes/payment.routes.js'

const paymentRoutes = require('./routes/payment.routes.js')
const loginRoutes = require('./routes/login.routes.js')


const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');


const app = express();

app.set('views', path.join(__dirname,'views'))

app.engine('.hbs', exphbs.create({
    defaultLayout: 'main',
    extname: '.hbs',        
}).engine)

app.set('view engine','.hbs')

app.use(morgan('dev'))
app.use(express.json())
app.use(paymentRoutes);
app.use(loginRoutes);

app.use(express.urlencoded({extended:false}))

app.use(require("./routes/index"))

app.use(express.static(path.join(__dirname,'public')));

module.exports = app;
/**/ 