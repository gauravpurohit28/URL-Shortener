import express from "express"
import {nanoid} from "nanoid"
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/api/create",(req,res)=>{
    const {url} = req.body
    res.send(nanoid(7))
})





const PORT=5000
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}` );
})
