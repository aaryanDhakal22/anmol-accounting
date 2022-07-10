export interface DOB{
    year:number
    month:number
    day:number
}
export interface StudentPersonal{
    group:string
    address:string
    age:number
    phone:number
    dob: DOB
    gender:string
    father:string
    mother:string
}

export interface StudentAccount{
    therapy: number 
    speechTherapy:number
    transportation: number 
    admissionCharge:number
    monthlyCharge:number
    snacks:number
}
export interface StudentProfile{
    id:string
    name:string
    personal:StudentPersonal
    account:StudentAccount
}