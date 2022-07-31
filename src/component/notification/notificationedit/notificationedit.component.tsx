import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

import { useNotificationQuery } from "../../../hooks/useNotification";
import NotificationEditForm from "../notification_edit_form/notificationeditform.component";

const NotificationEdit = ()=>{
    const params = useParams()
    const notificationId = params["notificationId"]
    const notsOfStudent = useNotificationQuery()

    const navigate = useNavigate()

    if (notsOfStudent.isLoading  ){
        return <p>Loading...</p>
    }
    if (notsOfStudent.isError){
        if(notsOfStudent.error instanceof Error){
            return <p>An Error Occured in Fetching Notification : {notsOfStudent.error.message}</p>
        }
    }
    if(notsOfStudent.isSuccess){
        console.log("isSuccess")
        const notification = notsOfStudent.data.filter((item)=>{
            return item.notificationId === notificationId
        })[0]
        return(
            <>

                <button className="btn  ml-16 flex items-center p-3 mt-10 rounded-3xl text-white" onClick={()=>navigate(-1)} ><IoArrowBackOutline style={{"display":"inline","fontSize":"50px"}}/> <span className="text-3xl">BACK</span> </button>
                
            <NotificationEditForm notification = {notification} />
            </>
        )
        
        
    
        }
    return <p>Unknown error occured on ythe </p>
}
export default NotificationEdit