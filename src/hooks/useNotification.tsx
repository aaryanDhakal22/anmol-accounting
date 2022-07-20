import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import {Notification} from '../gtypes'


const fetchNotification = ():Promise<Notification[]>=>{
    return axios.get<Notification[]>("https://anmolsec.com/api/notification/").then(response => response.data)
}

export const useNotificationQuery = ():UseQueryResult<Notification[]>=>{
    return useQuery<Notification[],Error>(['students'],fetchNotification)
}
