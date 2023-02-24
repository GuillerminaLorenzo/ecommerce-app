const express = require('express')
const bodyParser = require('body-parser');
const usersRepo = require('./repositories/users');
const cookieSession = require('cookie-session');

const app = express()
const port = 3000

app.use(cookieSession({ keys: ['kcnsjbdv123'] }));
app.use(bodyParser.urlencoded({ extended: true }));
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

app.get('/signup', (req, res) => {
    res.send(`
        <div>
            Your id is: ${req.session.userId}
            <form method="POST">
                <input name="email" type="email" placeholder="email" />
                <input name="password" type="password" placeholder="password" />
                <input name="passwordConfirmation" type="password" placeholder="passwordConfirmation" />
                <button>Sign Up</button>
            </form>
        </div>
    `);
});

app.post('/signup', async (req, res) => {
    const { email, password, passwordConfirmation } = req.body;
    const existingUser = await usersRepo.getOneBy({ email });
    if (existingUser) {
        return res.send('Email in use');
    }
    if (password !== passwordConfirmation) {
        return res.send('Password must match');
    }

    const user = await usersRepo.create({ email, password });
    req.session.userId = user.id;
    
    res.send('Account created');
});

app.get('/signout', (req, res) => {
    req.session = null;
    res.send('Logged out')
});

app.get('/signin', (req, res) => {
    res.send(`
        <div>
            <form method="POST">
                <input name="email" type="email" placeholder="email" />
                <input name="password" type="password" placeholder="password" />
                <button>Sign In</button>
            </form>
        </div>
    `);
});

app.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const user = await usersRepo.getOneBy({ email });
    if (!user) {
        return res.send('Email not found');
    }
    const validPassword = await usersRepo.comparePasswords(
        user.password,
        password
    )
    if (!validPassword) {
        return res.send('Invalid password');
    }

    req.session.userId = user.id;
    
    res.send('Signed in');
})