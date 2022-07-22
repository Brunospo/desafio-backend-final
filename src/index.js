require('dotenv').config();

const  express = require('express');
const cors = require('cors');

const categoryRouter = require('./router/categoryRouter');
const userRouter = require('./router/userRouter');
const authenticationRouter = require('./router/authenticationRouter');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/categoria', categoryRouter);
app.use('/usuario', userRouter);
app.use('/login', authenticationRouter);

app.listen(process.env.PORT); //eslint-disable-line