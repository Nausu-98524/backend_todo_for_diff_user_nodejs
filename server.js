const express = require('express');
const connectToDB = require('./db/dbConfig');
const app = express();
connectToDB()
const auth  = require("./routes/auth")
const list  = require("./routes/list")

app.get('/', (req, res)=>{
    res.send('helloo')
})
app.use(express.json())


app.use("/api/v1", auth);
app.use("/api/v2", list);

app.listen(5000, ()=>{
    console.log('server Started..')
})