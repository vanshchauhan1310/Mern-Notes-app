const connectDB = require('./db')
const express = require('express')

connectDB();

const app = express();
const port = 5003;

app.use(express.json())

// All Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port,()=>{
    console.log(`App is listening on http://localhost:${port}`)
})