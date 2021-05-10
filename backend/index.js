const express = require('express');
const app = express();

const port = require('./config').port;

const userRouter = require('./routers/userManager');
const equipmentRouter = require('./routers/equipmentManager');
const staffRouter = require('./routers/staffManager');
const utilRouter = require('./routers/utils');

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/user', userRouter);
app.use('/equipment', equipmentRouter);
app.use('/util', utilRouter);
app.use('/staff', staffRouter);

app.use(express.static('./uploads'));

app.get('/home', (req, res) => {
    res.send("Welcome Home");
})

app.listen(port, () => {
    console.log('server started at port 5000')
})