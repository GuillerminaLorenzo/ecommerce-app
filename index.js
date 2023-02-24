const express = require('express')
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(cookieSession({ keys: ['kcnsjbdv123'] }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(authRouter);
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
