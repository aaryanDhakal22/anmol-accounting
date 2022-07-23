import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { FormikConfig, useFormik } from "formik";
import { Transaction } from "../../../gtypes";
import { useAddTransaction } from "../../../hooks/useTransaction";
import randomStrGen from "../../../utils/randomAlNumGen";

const initialValues = {
    "transactionId":'',
    "date":'',
    "type":'Donation',
    "subType":'',
    "payer":'',
    "note":'',
    "amount":0,
    "mode":'',
    
}
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
const TransactionAdd = ()=>{
    const newTransactionId = randomStrGen()
    const {mutate:addTransaction} = useAddTransaction()

    const transaction = {...initialValues, "transactionId":newTransactionId}
    const formik= useFormik<Transaction>({
        initialValues: transaction,
        onSubmit:(values:Transaction)=>{
            console.log(values)
            addTransaction(values)
        }
    }as FormikConfig<Transaction>)
    console.log(typeToSubType.Supplies)
    return(
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="date">DATE</label>
            <TextField  variant="outlined" id="date" name= "date" type= "date" onChange={formik.handleChange}value={formik.values.date}/><br></br>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
            <InputLabel id="subTypeLabel">Type</InputLabel>
            <Select id="type" name="type" defaultValue={"Donation"} value={formik.values.type} label="Paid" onChange={formik.handleChange}>     
                <MenuItem value={"Donation"}>Donation</MenuItem>
                <MenuItem value={"SchoolMaintainance"}>School Maintainance</MenuItem>
                <MenuItem value={"Supplies"}>Supplies</MenuItem>
                <MenuItem value={"Bills"}>Bills</MenuItem>
                <MenuItem value={"Kitchen"}>Kitchen</MenuItem>
            </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
            <InputLabel id="subTypeLabel">Sub-Type</InputLabel>
            <Select id="subType" label="subTypeLabel" labelId="subTypeLabel" name="subType"  value={formik.values.subType} onChange={formik.handleChange}>     
                {typeToSubType[formik.values.type?formik.values.type:"Donation"].map((item:string)=>{
                    return <MenuItem value={item}>{item}</MenuItem>
                })}
            </Select>
            </FormControl>
            <br/>
            <label htmlFor="payer">BY</label>
            <TextField  variant="outlined" id="payer" name= "payer" type= "text" onChange={formik.handleChange}value={formik.values.payer}/><br></br>
            <label htmlFor="note">NOTES</label>
            <TextField  variant="outlined" id="note" name= "note" type= "text" onChange={formik.handleChange}value={formik.values.note}/><br></br>
            <label htmlFor="amount">AMOUNT</label>
            <TextField  variant="outlined" id="amount" name= "amount" type= "text" onChange={formik.handleChange}value={formik.values.amount}/><br></br>

            <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
            <InputLabel id="subTypeLabel">Mode</InputLabel>
            <Select id="mode" name="mode" value={formik.values.mode} label="Paid" onChange={formik.handleChange}>     
                <MenuItem value={"Credit"}>Credit</MenuItem>
                <MenuItem value={"Debit"}>Debit</MenuItem>
            </Select>
            </FormControl>
            <Button variant="contained" type="submit">Submit</Button>
        </form>
    )
}
export default TransactionAdd
