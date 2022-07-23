import { TextField } from "@mui/material";
import React, { ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useNotificationQuery } from "../../../hooks/useNotification";
import LinedTile from "../../lined_tile/linedtile.component"
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
            <TextField
            type="number"
            id="outlined-name"
            label="Year"
            value={year}
            onChange={handleYearChange}
            />
            <TextField
            type="text"
            id="outlined-name"
            label="For Month"
            value={month}
            onChange={handleMonthChange}
            />
                {filteredNots.map((notification)=>{
                    return <LinedTile key={notification.notificationId} onClick={()=>navigate(`/notification/edit/${notification.notificationId}`)}  left={notification.date} center={notification.month} right={notification.amount.toString()} />
                })}
                <LinedTile  onClick={()=>navigate(`/notification/add/${notifications.data[0].studentId}`)}  left={""} center={"(+) Add"} right={""} />
                <Totaller amount={totalSum} />
            </>
        )
    }
    return <p>An Unknown Error Occured</p>
}
export default PerStudentFeeCollection