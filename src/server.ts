import express from "express"
import fs from "fs";
import cors from "cors"

const app=express()
const port = 3668
app.use(cors())

const jobs = JSON.parse(fs.readFileSync("./src/data/jobs.json","utf8"))
const skills=JSON.parse(fs.readFileSync("./src/data/skillInfo.json","utf8"))

app.get("/",(req:express.Request,res:express.Response)=>{
res.send("Jobs site API")
})

app.get("/jobs",(req:express.Request,res:express.Response)=>{
    res.json((jobs))
})

app.get("/skills",(req:express.Request,res:express.Response)=>{
    res.json((skills))
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);

})