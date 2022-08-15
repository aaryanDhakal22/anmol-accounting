import { FormikConfig, useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { Transaction } from "../../../gtypes";
import { assets, incomeAndExpense, liabilities } from "../../../headers";
import { deleteTransaction, useUpdateTransaction } from "../../../hooks/useTransaction";
import { FormField } from "../../formfield/formfield.component";

// TODO: Make this global

const typeToSubType :{
    Donation:string[],
    SchoolMaintainance:string[]
    Supplies:string[]
    Bills:string[]
    Kitchen:string[]
    Select:string[]
} = {
    Donation:["Invidual","Company"],
    SchoolMaintainance :["Building","Reconstruction","Fixing","Furniture"],
    Supplies:["Stationaries","Toys"],
    Bills:["Electricity","Water","Telephone"],
    Kitchen:["Food","Beverages","Utensils","Pots and Pans"],
    Select:["Select"]
}
const TransactionEditForm = ({transaction} : {transaction:Transaction})=>{


        const navigate = useNavigate()
        const {mutate:updateTransaction} = useUpdateTransaction()
    
        const formik= useFormik<Transaction>({
            initialValues: transaction,
            onSubmit:(values:Transaction)=>{
                updateTransaction(values)
            }
        }as FormikConfig<Transaction>)

    return (
        <div className="grid grid-cols-12 mt-16">
        <div className="col-start-4 col-span-6 mt-6 text-center">
<form onSubmit={formik.handleSubmit}>
    <FormField fieldFor={"date"} type={"date"} handleChange = {formik.handleChange} value ={formik.values.date}  />
    <div className="formField">
                <label className="labelField" htmlFor="type">TYPE</label>
                <select className="inputField"  id="type" name="type" value={formik.values.type}  onChange={formik.handleChange}>  
                    <option value={"Select"}>Select</option>
                    {incomeAndExpense.map((title)=>{
                        return <option value={title}>{title}</option>
                    })}
                </select>
            </div>
    <div className="formField">
        <label className="labelField" htmlFor="paidFrom">PAID FROM</label>
        <select className="inputField"  id="paidFrom" name="paidFrom" value={formik.values.paidFrom}  onChange={formik.handleChange}>  
        <option value={"Select"}>Select</option>

        <option value={"Outside"}>Outside</option>
            {assets.map((title)=>{
                return <option value={title}>{title}</option>
            })}
        </select>
    </div>
    <div className="formField">
        <label className="labelField" htmlFor="paidTo">PAID TO</label>
        <select className="inputField"  id="paidTo" name="paidTo" value={formik.values.paidTo}  onChange={formik.handleChange}>  
        <option value={"Select"}>Select</option>
        <option value={"Outside"}>Outside</option>

            {liabilities.map((title)=>{
                return <option value={title}>{title}</option>
            })}
            {assets.map((title)=>{
                return <option value={title}>{title}</option>
            })}
        </select>
    </div>
    
    <FormField fieldFor={"payer"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.payer}  />
    <div className="formField">
        <label className="labelField" htmlFor="type">NOTE</label>
        <textarea className="inputField" name="note" id="note" onChange = {formik.handleChange} rows={5} value={formik.values.note}></textarea>
    </div>
    <FormField fieldFor={"amount"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.amount}  />
    <button className="btn bg-dangerRed border-dangerRed active:text-dangerRed mt-10 ml-5" onClick={()=>deleteTransaction(transaction.transactionId,()=>navigate(-1))}type="button">DELETE</button>
    <button className="btn mt-10" type="submit">Submit</button>
</form>
</div>
</div>
    )
}
export default TransactionEditForm