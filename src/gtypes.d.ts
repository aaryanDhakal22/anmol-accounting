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
    type:string
    paidTo:string
    paidFrom:string
    payer:string
    note:string
    amount:number
    mode: string
    
}

export interface Liabilities{
    shareCapitalArchana :number
    shareCapitalSangita :number
    borrowingLoanBank :number
    borrowingArchanaRimal :number
    borrowingSangeetaNeupane :number
    borrowingOthers :number
    socialSecurityTax :number
    salaryTax :number
    salaryPayable :number
    auditFeePayable :number
    otherPayable :number
    capitalReserveOrDeficit :number
}

export interface Assets{
    cashBalance :number
    ptCash :number
    accountReceivable :number

}
export interface Account{
    accountId:string
    currBalance:number
    currLoan:number
    bankName:string
}


export interface TrialBalanceType{
    trailBalanceId:string
    year:number
    month:number
    admissionForm:number
    admission:number
    annualCharge:number
    tuitionFees:number
    snacks:number
    therapy:number
    speechTherapy:number
    transportation:number
    donationInvidual:number
    donationCompany:number
    donationGovernmentAgency:number
    dropShip:number
    resale:number
    bankInterest:number
    rent:number
    salary:number
    vehicleRepair:number
    furnitureRepair:number
    buildingRepair:number
    computerRepair:number
    computerSupport:number
    vehicleRepair:number
    telephoneBills:number
    electricityBills:number
    waterBills:number
    bankCharge:number
    stationary:number
    printing:number
    kitchenUtensils:number
    kitchenGroceries:number
    fuel:number
    transportationRenewal:number
    transportationInsurance:number
    kitchenGas:number
    software:number
    transportationRepair:number
    transportationFare:number
    dailyAllowance:number
    auditFee:number
    auditExpenses:number
    staffTraining:number
    interestOnBorrowing:number
    promotionExpenses:number
    cashBalance:number
    ptCash:number
    accountReceivable:number
    land:number
    building:number
    furniture:number
    computer:number
    vehicles:number
    shareCapitalArchana:number
    shareCapitalSangita:number
    borrowingLoanBank:number
    borrowingArchanaRimal:number
    borrowingSangeetaNeupane:number
    borrowingOthers:number
    socialSecurityTax:number
    salaryTax:number
    salaryPayable:number
    auditFeePayable:number
    otherPayable:number
    capitalReserveOrDeficit:number
}