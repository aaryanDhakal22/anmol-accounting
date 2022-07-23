
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
    speechTherapy:number
    therapy: number 
    transportation: number 
    extras:number
    note : string
    tuition:number
    snacks:number
    paid:string
}

export interface Transaction{
    transactionId:string
    date:string
    type:"SchoolMaintainance" | "Donation" |"Supplies"| "Bills" | "Kitchen"
    subType:string
    payer:string
    note:string
    amount:number
    mode:string
    
}