import { useQuery } from "@tanstack/react-query";

import { getReq } from "../utils/axios-utils";

const fetchFeeStatus = (studentId:string)=>{

    return getReq({url:`/fee/status/${studentId}`})
}

export const useFeeStatus=(studentId:string)=>{
    return useQuery(['status',studentId],()=>fetchFeeStatus(studentId))
}