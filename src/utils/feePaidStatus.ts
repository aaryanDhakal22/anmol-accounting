import NepaliDate from 'nepali-date-converter'

export const feePaidStatus = (year:string,month:string)=>{
    const todayDate = new NepaliDate().format("YY MM").split(" ")
    const todayYear =  todayDate[0]
    const todayMonth =  todayDate[0]
    console.log(todayMonth,todayYear)
}