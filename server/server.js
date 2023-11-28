import express from "express"
import cors from 'cors'
import bodyParser from "body-parser"
import { db, auth } from "./db/connect.js"
import { registerWithEmailAndPassword } from "./handlers/register.js"
import { getAllUsers } from "./db/allUsers.js"

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post('/api/register', (req, res) => {
    const newUser = req.body

    console.log(newUser)
    registerWithEmailAndPassword(newUser.name, newUser.email, newUser.password).then(() => { //THIS IS VERY UNESCURE WAY TO REGISTER, 
        //REAL REGISTRATION SHOULD BE IMPLEMENTED IN APP CODE AND IN TEACHER INTERFACE CODE, NOT ON SERVER. BECAUSE IF YOU SEND
        //PASSWORD TO SERVER UNSECURED, CONNECTION CAN BE INTERFERED AND PASSWORD WILLL GET CAPTURED
        res.status(200).send()
    })
})

app.get('/api/users', async (req, res) => {
    //get list of all users objects
    const usersList = await getAllUsers()
    console.log(usersList)
    res.status(200).send()  
})

// app.get('/api/result',  (req, res) => {
//     getDB().
//     collection('nfactorial').
//     find({}).
//     sort("score").
//     toArray((err, result) => {
//         if (err) {
//             console.error(err)
//             res.status(500).json({err:err})
//             return
//         }
//         res.status(200).json(result)
//     })
// })

// app.post('/api/share', (req, res) => {
//     const newItem = req.body
//     getDB().
//     collection("nfactorial").
//     insertOne(newItem)

//     res.status(200).send()
// })

app.listen(process.env.PORT || 5001, () => {
    console.log('listening on 5001')
})