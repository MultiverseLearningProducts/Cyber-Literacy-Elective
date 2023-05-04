const express = require('express');
const { User } = require("./models/index")

const app = express();
const port = 3000;

app.get('/users/:id', async (req, res) => {
    
    const user = await User.findByPk(req.params.id)    


})

app.listen(port, () => {
    console.log(`Your server is listening on port http://localhost:${port}/users/1`);
})