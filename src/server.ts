import express from "express"
import fs from "fs";
import cors from "cors"
import * as model from "./model.js"


const app=express()
const port = 3968
app.use(cors())




app.get("/",(req:express.Request,res:express.Response)=>{
res.send(model.getApiDocHTML())
})
// row Data
app.get("/jobs",(req:express.Request,res:express.Response)=>{
    res.json((model.getJobs()))

})

// add todos to the data
app.get("/jobsTodos",(req:express.Request,res:express.Response)=>{
    res.json((model.getAddedTodos()))

})
//add todos seperat
app.get("/todos",(req:express.Request,res:express.Response)=>{
    res.json(model.getTodos())

})

app.get("/skills",(req:express.Request,res:express.Response)=>{
    res.json((model.getSkills()))
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);

})