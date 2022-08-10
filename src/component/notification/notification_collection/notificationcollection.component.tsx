import { useNavigate } from "react-router-dom";

import { useNotificationQuery } from "../../../hooks/useNotification";
import LinedTile from "../../lined_tile/linedtile.component";

const TiledCollection = ({year,month,searchStudentId}:{year:string,month:string,searchStudentId:string})=>{
    const navigate = useNavigate()

    

    const notsOfStudent = useNotificationQuery()
    if (notsOfStudent.isLoading || notsOfStudent.isFetching ){
        return <p>Loading...</p>
    }
    if (notsOfStudent.isError){
        if(notsOfStudent.error instanceof Error){
            return <p>An Error Occured in Fetching Notification : {notsOfStudent.error.message}</p>
        }
    }
    if(notsOfStudent.isSuccess)
    return (
        <>
            {notsOfStudent.data.map((notification)=>{
                return <LinedTile key={notification.notificationId}  onClick={()=>navigate(`/notification/details/${notification.notificationId}`)}  left={notification.date} center={notification.month} right={notification.amount.toString()} />
            })}
        </>
    )
    return <p>An Unknown Error Occured</p>
}
export default TiledCollection