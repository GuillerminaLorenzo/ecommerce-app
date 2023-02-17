const express = require('express')
const bodyParser = require('body-parser');
const usersRepo = require('./repositories/users')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

app.get('/', (req, res) => {
    res.send(`
    <div>
        <form method="POST">
            <input name="email" type="email" placeholder="email" />
            <input name="password" type="password" placeholder="password" />
            <input name="passwordConfirmation" type="password" placeholder="passwordConfirmation" />
            <button>Sign Up</button>
        </form>
    </div>
    `);
});

app.post('/', async (req, res) => {
    const { email, password, passwordConfirmation } = req.body;
    console.log(req.body)
    const existingUser = await usersRepo.getOneBy({ email });
    if (existingUser) {
        return res.send('Email in use');
    }
    if (password !== passwordConfirmation) {
        return res.send('Password must match');
    }
    res.send('Account created');
});