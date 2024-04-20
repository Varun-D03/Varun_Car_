const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const dotenv = require('dotenv')
const cors=require('cors')

const dbConnection = require('./db')
app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json())

//env config
dotenv.config();

app.use('/api/cars/' , require('./routes/carsRoute'))
app.use('/api/users/' , require('./routes/usersRoute'))
app.use('/api/bookings/' , require('./routes/bookingsRoute'))


const path = require('path')

if(process.env.NODE_ENV==='production')
{

    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

          res.send('Hello world')//File(path.resolve(__dirname, 'client/build/index.html'));

    })

}

app.get('/', (req, res) => res.send('Hello World!'))


 


app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`))