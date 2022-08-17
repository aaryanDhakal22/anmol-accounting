import { useNavigate } from "react-router-dom";

import { Transaction } from "../../../gtypes";
import { useTransactionQuery } from "../../../hooks/useTransaction";
import LinedTile from "../../lined_tile/linedtile.component";
import Totaller from "../../totaller/totaller.component";

interface TransactionCollectionProps{
    type:string
    year:string
    month:string
}

// {type,subType}:TransactionCollection
const TransactionCollection = ({type,year,month}:TransactionCollectionProps)=>{
    const navigate = useNavigate()
    const transactions = useTransactionQuery()
    console.log(type)
    if(transactions.isLoading){
        return <div>Loading...</div>
    }
    if(transactions.isError){
        if(transactions.error instanceof Error){
            return <div>Error Occured: {transactions.error.message}</div>
        }
    }
    
    if(transactions.isSuccess){
        if(transactions.data.length === 0){
            return <div className="text-white text-center mt-96 text-3xl" >EMPTY</div>
        }
        console.log(transactions.data[0].date.substring(0,4))
        console.log(year)
        const allFiltered = transactions.data.filter((item)=>{
            if (type=== "Select"){
                if (month.length!==0){

                    return true && item.date.substring(0,4) === year && item.date.substring(5,7) === month.padStart(2,"0")
                }
                else{
                    return true && item.date.substring(0,4) === year
                }
            }
            else{
                if (month.length!==0){

                    return item.type=== type  && item.date.substring(0,4) === year && item.date.substring(5,7) === month.padStart(2,"0")
                }
                else{
                    return item.type=== type  && item.date.substring(0,4) === year
                }
            }
                    //  return item.type=== type   || item.date.substring(0,4) === year || item.date.substring(5,7) === month.padStart(2,"0")
        })
        let totalSum = 0
        allFiltered.forEach((item)=>{
            totalSum+=item.amount
        })
        console.log(allFiltered)
        return (
            <div  className="grid grid-cols-2 gap-5 p-10 mt-5">
            {allFiltered.map((item:Transaction)=>{
                return <LinedTile key={item.transactionId}  onClick={()=>navigate(`/transaction/edit/${item.transactionId}`)} left={item.date} center={item.note} right={item.amount.toString()} />
            })}
            <Totaller amount={totalSum}/>
            </div>
        )   
    }
    return <div>An Unkonwn Error Occured in Collection</div>
}

export default TransactionCollection