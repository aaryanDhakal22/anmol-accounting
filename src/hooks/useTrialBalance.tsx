import { useQuery } from "@tanstack/react-query";

import { getReq } from "../utils/axios-utils";

const fetchTrialBalance = ()=>{

    return getReq({url:`/trialbalance`})
}
export const createTrialBalance = ()=>{
    return getReq({url:'/trialbalance/create'})
}
export const useTrialBalance=()=>{
    return useQuery(['trialBalance'],()=>fetchTrialBalance())
}