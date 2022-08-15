import { FormikConfig, useFormik } from "formik";

import { Transaction } from "../../../gtypes";
import { useAddTransaction } from "../../../hooks/useTransaction";
import randomStrGen from "../../../utils/randomAlNumGen";
import { FormField } from "../../formfield/formfield.component";
import { assets, incomeAndExpense, liabilities } from "../../../headers";
const initialValues:Transaction = {
    "transactionId":'',
    "date":'',
    "type":'',
    "payer":'',
    "note":'',
    "amount":0,
    "paidTo":'',
    "paidFrom":"",
    'mode':''
    
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
    return(
        <div className="grid grid-cols-12 mt-36">
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
                <textarea className="inputField" name="note" id="note" onChange={formik.handleChange} value={formik.values.note}  rows={5} ></textarea>
            </div>
            <FormField fieldFor={"amount"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.amount}  />
            
            <FormField fieldFor={"mode"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.mode}  />
            
            <button className="btn mt-10" type="submit">Submit</button>

        </form>
        </div>
        </div>
    )
}

export default TransactionAdd

