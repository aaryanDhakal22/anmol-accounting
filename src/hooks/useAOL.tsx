import {  useQuery, UseQueryResult } from "@tanstack/react-query";
import { getReq, putReq } from "../utils/axios-utils"
import { Assets ,Liabilities } from "../gtypes";


const fetchAssets = ():Promise<Assets[]>=>{
   return getReq({url:'/assets'})
}

export const useAssetsQuery = ():UseQueryResult<Assets[]>=>{
    return useQuery<Assets[],Error>(['assets'],fetchAssets,{
        // cacheTime:5000,
        refetchOnWindowFocus:false,
        onError:(error)=>{
            console.log(error)
        }
    })
}

const fetchLiabilities = ():Promise<Liabilities[]>=>{
   return getReq({url:'/liability'})
}

export const useLiabilitiesQuery = ():UseQueryResult<Liabilities[]>=>{
    return useQuery<Liabilities[],Error>(['liabilities'],fetchLiabilities,{
        // cacheTime:5000,
        refetchOnWindowFocus:false,
        onError:(error)=>{
            console.log(error)
        }
    })
}
