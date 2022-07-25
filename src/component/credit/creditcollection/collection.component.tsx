import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Transaction } from "../../../gtypes";
import { useTransactionQuery } from "../../../hooks/useTransaction";
import LinedTile from "../../lined_tile/linedtile.component";
import Totaller from "../../totaller/totaller.component";

interface TransactionCollectionProps{
    type:string
    subType:string
}

// {type,subType}:TransactionCollection
const TransactionCollection = ({type,subType}:TransactionCollectionProps)=>{
    const navigate = useNavigate()
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
        console.log(type,subType)
        const allFiltered = transactions.data.filter((item)=>{
            return item.type === type && item.subType === subType
        })
        let totalSum = 0
        allFiltered.forEach((item)=>{
            totalSum+=item.amount
        })
        return (
            <div  className="grid grid-cols-2 gap-5 p-10 mt-5">
            {allFiltered.map((item:Transaction)=>{
                return <LinedTile key={item.transactionId}  onClick={()=>navigate(`/transaction/edit/${item.transactionId}`)} left={item.date} center={item.payer} right={item.amount.toString()} />
            })}
            <Totaller amount={totalSum}/>
            </div>
        )   
    }
    return <div>An Unkonwn Error Occured in Collection</div>
}

export default TransactionCollection