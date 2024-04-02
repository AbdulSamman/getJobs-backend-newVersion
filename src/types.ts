export  type ISkill ={
        idCode:string,
        name:string,
        url:string,
        description:string

}

export  const nullObjectSkill = {
    idCode:"",
        name:"",
        url:"",
        description:""

}


export type JobRaw={
        id:number,
        title:string,
        company:string,
        url:string,
        description:string,
        skillList:string,
        publicationDate:string,
        todo:string

}


    //  export type Job={
    //     id:number,
    //     title:string,
    //     company:string,
    //     url:string,
    //     description:string,
    //     skillList:string,publicationDate:string,
    //     todo:string
    //     skills:string[]
    // }

    // oder

    export type Job = JobRaw & {
        skills:ISkill[]
    }

    export type Todos= {
        company: string,
        title: string,
        test: string
    }