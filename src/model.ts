import fs from "fs";
import {JobRaw,Job, ISkill,nullObjectSkill,Todos}from "./types.js"
import * as model from "./model.js"

const rawJobs : JobRaw[]= JSON.parse(fs.readFileSync("./src/data/jobs.json","utf8")) ;
const skillsInfo : any=JSON.parse(fs.readFileSync("./src/data/skillInfo.json","utf8"))


// get jobs
// export const getJobs=()=>{
//     return  jobs

// }

// convert skills in jobs

// array

// export const getJobs=()=>{
//     const jobs:Job[] =[]
//     rawJobs.forEach((rawJob:JobRaw)=>{
//    const job:Job={
//     ...rawJob,
//     skills: model.buildSkills(rawJob.skillList)
//    }
//    jobs.push(job)
// })
//     return  jobs

// }

// oder object
// import model sich selbst
export const getJobs=()=>{
 return rawJobs.map((rawJob:JobRaw)=>{
    return {
        ...rawJob,
        skills: model.buildSkills(rawJob.skillList)
    }
 })
}



export const buildSkills=(skillList:string)=>{
    const skills : ISkill[] =[];
    //leerzeichen löschen
const skillIdCodes= skillList.split(",").map(m=>m.trim());
skillIdCodes.forEach((skillIdCode)=>{
    //durchsuchen, wenn angular gefunden wird, dass adde skills
    const _skill =skillsInfo[skillIdCode];

    if(_skill===undefined){
     //Füge einen leeren Skill hinzu, wenn der Skill nicht gefunden wurde
        const skill : ISkill= {
            ...nullObjectSkill,
            idCode: skillIdCode
        }
        skills.push(skill)
    }else{
    //Füge den gefundenen Skill hinzu
        const skill : ISkill={
            ..._skill,
           skillIdCode
        }
        skills.push(skill)
    }
})

    return skills;
}

// oder  skills als object

// export const buildSkills = (skillList: string) => {
    //     const skills: { [key: string]: ISkill } = {};
    //     const skillIdCodes = skillList.split(",").map(m => m.trim());

//     skillIdCodes.forEach((skillIdCode) => {
//         const _skill = skillsInfo[skillIdCode];

//         if (_skill === undefined) {

//             skills[skillIdCode] = { ...nullObjectSkill, idCode: skillIdCode };
//         } else {

//             skills[skillIdCode] = { ..._skill, skillIdCode };
//         }
//     });

//     return skills;
// };



// add todos to raw data
export const getAddedTodos=()=>{
    return rawJobs.map((job:Job)=>{
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

// add seperate todo Array

// export const getTodos=()=>{
//     const todos:Todos[] =[]
//     rawJobs.forEach((job:Job)=>{

//         const todo:Todos={
//             company:job.company,
//             title:job.title,
//             test:"abdul"
//         }
//         todos.push(todo)
//     })
//     return todos


// }

// todos  object

export const getTodos=()=>{
    return  rawJobs.map((job:Job)=>{
        return {
            todo:job.todo,
            company:job.company,
            title:job.title,
            test:"abdul44"
        }
    })


 }




// getSkills
export const getSkills=()=>{
    return skillsInfo
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

