import {  useMutation, useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query";
import { Account } from "../gtypes";
import { getReq,putReq } from "../utils/axios-utils"



const fetchAccounts = ():Promise<Account[]>=>{
   return getReq({url:'/account'})
}

const addAccounts = (account:Account):Promise<Account>=>{
    return putReq({url:'/account/', method:"post",data:account})
}


export const useAccountsQuery = ():UseQueryResult<Account[]>=>{
    return useQuery<Account[],Error>(['accounts'],fetchAccounts,{
        // cacheTime:5000,
        refetchOnWindowFocus:false,
        onError:(error)=>{
            console.log(error)
        }
    })
}
export const useAddAccounts = ()=>{
    const queryClient = useQueryClient()
    return useMutation(addAccounts,{
        onSuccess: ()=>{
            queryClient.invalidateQueries(['accounts'])
        }
    })
}