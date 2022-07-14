
export interface StudentProfile{
    unid:string
    name:string
    group:string
    address:string
    age:number
    phone:number
    dob: string
    gender:string
    father:string
    mother:string
    therapy: number 
    speechTherapy:number
    transportation: number 
    admissionCharge:number
    monthlyCharge:number
    snacks:number
}

export interface TransactionProfile{
    studentunid:string
    transactionunid:string
    date:string
    paidAmount:int
    forMonth:string
    therapy: number 
    speechTherapy:number
    transportation: number 
    admissionCharge:number
    monthlyCharge:number
    snacks:number
    paid:boolean

}