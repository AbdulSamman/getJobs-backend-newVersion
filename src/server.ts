import express from "express"
import fs from "fs";
import cors from "cors"

const app=express()
const port = 3968
app.use(cors())

const jobs = JSON.parse(fs.readFileSync("./src/data/jobs.json","utf8")) as Job[];
const skills=JSON.parse(fs.readFileSync("./src/data/skillInfo.json","utf8"))

type Job={
    id:number,title:string,company:string,url:string,description:string,skillList:string,publicationDate:string,todo:string
}

app.get("/",(req:express.Request,res:express.Response)=>{
res.send("Jobs site API")
})
// add todos to the data
app.get("/jobs",(req:express.Request,res:express.Response)=>{
    //res.json((jobs))
    res.json(jobs.map(job=>{
        return{
           ...job,
            todo:{
                company:job.company,
               title:job.title,
              test:"abdul"
            }
        }
    }))
})
// add todos seperat
app.get("/todos",(req:express.Request,res:express.Response)=>{
    res.json(jobs.map((job:Job)=>{
        return {
            todo:job.todo,
            company:job.company,
            title:job.title,
            test:"abdul"
        }
    }))
})

app.get("/skills",(req:express.Request,res:express.Response)=>{
    res.json((skills))
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);

})