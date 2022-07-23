import { useMutation, useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query";
import { Transaction } from "../gtypes";
import { getReq, putReq, deleteReq} from "../utils/axios-utils";
import { dateFormatter } from "../utils/temp_dateformatter";

const updateTransaction = (transaction:Transaction):Promise<Transaction>=>{
    return putReq({url:`/transaction/details/${transaction.transactionId}`, method:"put",data:transaction})
}

const addTransaction = (transaction:Transaction):Promise<Transaction>=>{
    return putReq({url:'/transaction/', method:"post",data:transaction})
}

const fetchTransaction = ():Promise<Transaction[]>=>{
   return getReq({url:'/transaction/'})
}

export const useTransactionQuery = ():UseQueryResult<Transaction[]>=>{
    
    return useQuery<Transaction[],Error>(['transactions'],fetchTransaction,{
        refetchOnWindowFocus:false,
        select:(data)=>{ 
            return data.map((transaction)=>{
                return {...transaction,date:dateFormatter(transaction.date)}
            })
        }
    })
}
export const useUpdateTransaction = ()=>{
    const queryClient = useQueryClient()
    return useMutation(updateTransaction,{
        onSuccess: ()=>{
            queryClient.invalidateQueries(['transactions'])
        }
    })
}
export const useAddTransaction = ()=>{
    const queryClient = useQueryClient()
    return useMutation(addTransaction,{
        onSuccess: ()=>{
            queryClient.invalidateQueries(['transactions'])
        }
    })
}

export const deleteTransaction = (transactionId:string,redirect:any)=>{
    
    // axios.delete(`www.anmolsec.com/api/transaction/details/${transactionId}`)
    deleteReq({url:`/transaction/details/${transactionId}`})
    redirect()
}
