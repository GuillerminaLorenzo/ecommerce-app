const express = require('express')
const bodyParser = require('body-parser');
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

app.post('/', (req, res) => {
    res.send('Account created');
});