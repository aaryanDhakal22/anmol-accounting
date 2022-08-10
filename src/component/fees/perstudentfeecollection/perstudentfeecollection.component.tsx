import React, { ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useNotificationQuery } from "../../../hooks/useNotification";
import LinedTile from "../../lined_tile/linedtile.component";
import Totaller from "../../totaller/totaller.component";

const PerStudentFeeCollection = ()=>{
    const navigate = useNavigate()
    const params = useParams()
    const searchStudentId = params["studentId"]
    
    const [year,setYear] = React.useState<string>("")
    const [month,setMonth] = React.useState<string>("")
    const notifications = useNotificationQuery()

    if(searchStudentId===undefined){
        return <p>Please Restart</p>
    }

    const handleYearChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setYear(e.currentTarget.value)
    }
    const handleMonthChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setMonth(e.currentTarget.value)
    }


   
    if (notifications.isLoading || notifications.isFetching ){
        return <p>Loading...</p>
    }
    if (notifications.isError){
        if(notifications.error instanceof Error){
            return <p>An Error Occured in Fetching Notification : {notifications.error.message}</p>
        }
    }
    if(notifications.isSuccess){
        const notsOfStudent = notifications.data.filter((item)=>{
            return item.studentId===searchStudentId
        })
        const filteredNots = notsOfStudent.filter((item)=>{
            return item.date.includes(year) && item.month.toLowerCase().includes(month.toLowerCase())
        })
        let totalSum = 0
        filteredNots.forEach(item=>{
            totalSum+=item.amount
        })
        return (
            <>
            <div className=" topbar">
                <button className="btn mr-auto ml-20" onClick={()=>navigate(`/notification/add/${searchStudentId}`)} >(+)Add</button>
                <input  className="topbar-text " placeholder="YEAR" type="number"id="outlined-name"value={year}onChange={handleYearChange}/>
                <input  className="topbar-text mr-20" placeholder="MONTH"  type="text"id="outlined-name"value={month}onChange={handleMonthChange}/>
            </div>
                <div className="grid grid-cols-2 gap-5 p-10 mt-5">
                {/* <LinedTile    left={""} center={"(+) Add"} right={""} /> */}
                {filteredNots.map((notification)=>{
                    return <LinedTile key={notification.notificationId} onClick={()=>navigate(`/notification/edit/${notification.notificationId}`)}  left={notification.date} center={notification.month+", "+notification.year} right={'Rs.'+notification.amount.toString()} />
                })}
                
                </div>
                <Totaller amount={totalSum} />
            </>
        )
    }
    return <p>An Unknown Error Occured</p>
}
export default PerStudentFeeCollection