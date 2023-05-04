// Import bcrypt here

const express = require('express');
const { User } = require("./models/index")

const app = express();
app.use(express.json());
const port = 3000;

app.get('/users', async (req, res) => {
    // Returns all the users and their passwords
    const users = await User.findAll()
    res.send(users);
})

app.post("/register", async(req, res, next) => {
    // Encrypt password here

   
    res.send("successfully created user " + user.name)
})

app.listen(port, () => {
    console.log(`Your server is listening on port http://localhost:${port}/users`);
})