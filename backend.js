const express = require('express')
const app = express()
const port = 3000
let db = [["j", "j"]]
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.set('view engine', 'ejs')

// Define a route handler for the root URL
app.get('/', (req, res) => {
    res.render('login.ejs')
})

app.get('/createAccount', (req, res) => {
    res.render('createAccount.ejs')
})

app.post('/create', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    db.push([username, password])
    res.render('login.ejs')
})

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    if (db.includes([username, password])) {
        res.render('loggedIn.ejs')
    }
})

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})