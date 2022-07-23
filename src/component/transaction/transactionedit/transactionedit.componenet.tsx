import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { FormikConfig, useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { Transaction } from "../../../gtypes";
import { deleteTransaction, useAddTransaction, useTransactionQuery, useUpdateTransaction } from "../../../hooks/useTransaction";
import randomStrGen from "../../../utils/randomAlNumGen";
import TransactionEditForm from "./transactioneditform.component";


const typeToSubType :{
    Donation:string[],
    SchoolMaintainance:string[]
    Supplies:string[]
    Bills:string[]
    Kitchen:string[]
} = {
    Donation:["Invidual","Company"],
    SchoolMaintainance :["Building","Reconstruction","Fixing","Furniture"],
    Supplies:["Stationaries","Toys"],
    Bills:["Electricity","Water","Telephone"],
    Kitchen:["Food","Beverages","Utensils","Pots and Pans"],
}
const TransactionEdit= ()=>{
    const transactions = useTransactionQuery()
    const params = useParams()["transactionId"]
    const transactionId = params?params:''
    const navigate = useNavigate()
    if (transactions.isLoading  ){
        return <p>Loading...</p>
    }
    if (transactions.isError){
        if(transactions.error instanceof Error){
            return <p>An Error Occured in Fetching Transaction : {transactions.error.message}</p>
        }
    }
    if(transactions.isSuccess){
        console.log("isSuccess")
        const transaction = transactions.data.filter((item)=>{
            return item.transactionId === transactionId
        })[0]
        return(
            <>
            <Button color = "error" onClick={()=>deleteTransaction(transaction.transactionId,()=>navigate(-1))} >(X) Delete</Button>
            <Button onClick={()=>navigate(-1)} > Back</Button>
            <TransactionEditForm transaction = {transaction} />
            </>
        )
        
        
    
        }
    return <p>Unknown error occured on ythe </p>
    
}
export default TransactionEdit

