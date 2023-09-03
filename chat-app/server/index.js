const express = require ("express");
const mongoose = require ('mongoose')
const userRoutes = require('./routes/userRoutes')

const dotenv = require("dotenv");
const {chats} = require ("./data/data");
const app = express();

const {notFound,errorHandler} = require("./middleware/errorMiddleware")

dotenv.config();
let cors = require("cors");
app.use(express.json())
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Chat");

app.get('/',(req, res) => {
    res.send("API is running");
    console.log("Hello");
})

app.use('/api/user',userRoutes);

app.use(notFound);
app.use(errorHandler)


// app.get('/api/chat', (req,res) => {
//     res.send(chats);
// })

// app.get('/api/chat/:id',(req,res) => {
//    // console.log(req.params.id);
//    const singleChat = chats.find(c=>c._id === req.params.id);
//    res.send(singleChat);
// });

const PORT = process.env.PORT ||5173

app.listen(5000,console.log(`Server started`));