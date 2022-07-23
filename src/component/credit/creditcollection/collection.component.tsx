import { useLocation, useParams } from "react-router-dom";
import { Transaction } from "../../../gtypes";
import { useTransactionQuery } from "../../../hooks/useTransaction";

interface TransactionCollectionProps{
    type:string
    subType:string
}

// {type,subType}:TransactionCollection
const TransactionCollection = ({type,subType}:TransactionCollectionProps)=>{
    const transactions = useTransactionQuery()
    if(transactions.isLoading){
        return <div>Loading...</div>
    }
    if(transactions.isError){
        if(transactions.error instanceof Error){
            return <div>Error Occured: {transactions.error.message}</div>
        }
    }
    if(transactions.isSuccess){
        const allFiltered = transactions.data.filter((item)=>{
            return item.type ===type && item.subType ===subType
        })

        return (
            <>
            {allFiltered.map((item:Transaction)=>{
                return <div>{item.transactionId}</div>
            })}
            </>
        )   
    }
    return <div>An Unkonwn Error Occured in Collection</div>
}

export default TransactionCollection