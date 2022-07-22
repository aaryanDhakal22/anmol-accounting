import { Button, TextField } from "@mui/material"
import { FormikConfig, useFormik } from "formik"
import { useNavigate, useParams } from "react-router-dom";
import { Student } from "../../../gtypes"
import { useNotificationQuery, useUpdateNotification } from "../../../hooks/useNotification";
import { useAddStudentData, useUpdateStudentData } from "../../../hooks/useStudentQuery"
import NotificationEditForm from "../notification_edit_form/notificationeditform.component";
import { deleteNotification } from "../../../hooks/useNotification";

const NotificationEdit = ()=>{
    const params = useParams()
    const notificationId = params["notificationId"]
    const {mutate:addStudent} = useUpdateNotification()
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
            <Button color = "error" onClick={()=>deleteNotification(notification.notificationId,()=>navigate(-1))} >(X) Delete</Button>
            <Button onClick={()=>navigate(-1)} > Back</Button>
            <NotificationEditForm notification = {notification} />
            </>
        )
        
        
    
        }
    return <p>Unknown error occured on ythe </p>
}
export default NotificationEdit