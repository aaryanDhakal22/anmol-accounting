import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { FormikConfig, useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { Transaction } from "../../../gtypes";
import { deleteTransaction, useAddTransaction, useTransactionQuery, useUpdateTransaction } from "../../../hooks/useTransaction";
import randomStrGen from "../../../utils/randomAlNumGen";
import TransactionEditForm from "./transactioneditform.component";

import {IoArrowBackOutline} from 'react-icons/io5'

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

    const navigate = useNavigate()
    const transactionId = params?params:''
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
            
            <button className="btn  ml-16 flex items-center p-3 mt-10 rounded-3xl text-white" onClick={()=>navigate(-1)} ><IoArrowBackOutline style={{"display":"inline","fontSize":"50px"}}/> <span className="text-3xl">BACK</span> </button>

            <TransactionEditForm transaction = {transaction} />
            </>
        )
        
        
    
        }
    return <p>Unknown error occured on ythe </p>
    
}
export default TransactionEdit

