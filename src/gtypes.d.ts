import TrialBalance from "./pages/trail_balance/trial_balance.page";

export interface Student{
    studentId:string
    name:string
    phone:number
    age:number
    group:string
    gender:string
    father:string
    mother:string
    address:string
    dob: string
    speechTherapy:number
    therapy: number 
    transportation: number 
    tuition:number
    snacks:number
    isAdmission:boolean
}

export interface Notification{
    studentId:string
    transactionId:string
    notificationId:string
    date:string
    amount:number
    month:string
    year:string
    speechTherapy:number
    therapy: number 
    transportation: number 
    extras:number
    note : string
    tuition:number
    snacks:number
    paid:'Unpaid'| 'EPay' | 'Cash'
}

export interface Transaction{
    transactionId:string
    date:string
    type:"SchoolMaintainance" | "Donation" |"Supplies"| "Bills" | "Kitchen" |"Select"
    subType:string
    payer:string
    note:string
    amount:number
    paid:'Unpaid'| 'EPay' | 'Cash'
    
}
export interface TrialBalance{
    admission,salary,student,bill_electricity: number
}



