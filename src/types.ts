export  type ISkill ={
    [key:string]:{
        name:string,
        url:string,
        description:string
    }
     }

     export type JobRow={
        id:number,
        title:string,
        company:string,
        url:string,
        description:string,
        skillList:string,publicationDate:string,
        todo:string

    }


     export type Job={
        id:number,
        title:string,
        company:string,
        url:string,
        description:string,
        skillList:string,publicationDate:string,
        todo:string
        skills:string[]
    }