import { useMutation, useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { Notification } from "../gtypes";
import { getReq, putReq, deleteReq} from "../utils/axios-utils";
import { dateFormatter } from "../utils/temp_dateformatter";

const updateNotification = (notification:Notification):Promise<Notification>=>{
    return putReq({url:`/notification/details/${notification.notificationId}`, method:"put",data:notification})
}

const addNotification = (notification:Notification):Promise<Notification>=>{
    return putReq({url:'/notification/', method:"post",data:notification})
}

const fetchNotification = ():Promise<Notification[]>=>{
   return getReq({url:'/notification/'})
}

export const useNotificationQuery = ():UseQueryResult<Notification[]>=>{
    
    return useQuery<Notification[],Error>(['notifications'],fetchNotification,{
        refetchOnWindowFocus:false,
        select:(data)=>{ 
            return data.map((notification)=>{
                return {...notification,date:dateFormatter(notification.date)}
            })
        }
    })
}
export const useUpdateNotification = ()=>{
    const queryClient = useQueryClient()
    return useMutation(updateNotification,{
        onSuccess: ()=>{
            queryClient.invalidateQueries(['notifications'])
        }
    })
}
export const useAddNotification = ()=>{
    const queryClient = useQueryClient()
    return useMutation(addNotification,{
        onSuccess: ()=>{
            queryClient.invalidateQueries(['notifications'])
        }
    })
}

export const deleteNotification = (notificationId:string,redirect:any)=>{
    
    // axios.delete(`www.anmolsec.com/api/notification/details/${notificationId}`)
    deleteReq({url:`/notification/details/${notificationId}`})
    redirect()
}
