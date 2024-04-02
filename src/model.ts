import fs from "fs";
import * as type from "./types.js"

const rowJobs = JSON.parse(fs.readFileSync("./src/data/jobs.json","utf8")) as type.JobRow[];


// get jobs
// export const getJobs=()=>{
//     return  jobs

// }

// convert skills in jobs
export const getJobs=()=>{
    const jobs:type.Job[] =[]
    rowJobs.forEach((rowJob:type.JobRow)=>{
   const job:type.Job={
    ...rowJob,
    skills:[]
   }
   jobs.push(job)
})
    return  jobs

}

// add todos to row data
export const getAddedTodos=()=>{
    return rowJobs.map((job:type.Job)=>{
        return {

           ...job,
            todo:{
                company:job.company,
               title:job.title,
              test:"abdul"
            }


        }
    })
}

// add seperate todo

export const getTodos=()=>{
    return  rowJobs.map((job:type.Job)=>{
        return {
            todo:job.todo,
            company:job.company,
            title:job.title,
            test:"abdul"
        }
    })


}


export const getApiDocHTML=()=>{
    return `
    <h1>GETAJOB API</h1>
    <li>
    <a href="http://localhost:3968/jobs">/jobs</a> return an array of job objects
    <li>
    <a href="http://localhost:3968/jobsTodos">/jobsTodos</a> return added todos to row job
    </li>
    <li>

    <a href="http://localhost:3968/todos">/todos</a> return an seperate todos
    </li>
    <li>
    <a href="http://localhost:3968/skills">/skills</a> return an array of skills objects
    </li>
    </li>
    `
}

