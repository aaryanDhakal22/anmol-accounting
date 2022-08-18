import { FormikConfig, useFormik } from "formik";

import { Transaction } from "../../../gtypes";
import { useAddTransaction } from "../../../hooks/useTransaction";
import randomStrGen from "../../../utils/randomAlNumGen";
import { FormField } from "../../formfield/formfield.component";
import { assets, incomeAndExpense, liabilities } from "../../../headers";
import * as Yup from 'yup'
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
        validationSchema: Yup.object({
            date: Yup.string()
            .max(10,"Date must be less than 10 characters")
            .required('Required')
            .matches(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,"Must Match YYYY-MM-DD")
        }),
        onSubmit:(values:Transaction)=>{
            console.log(values)
            addTransaction(values)
        }
    }as FormikConfig<Transaction>)
    return(
        <div className="grid grid-cols-12 mt-36">
                <div className="col-start-4 col-span-6 mt-6 text-center">
        <form onSubmit={formik.handleSubmit}>
            <div className="formField">
                <label className="labelField" htmlFor="date">DATE</label>
                <input className="inputField" id="date" name="date" type="text" onBlur={formik.handleBlur} placeholder = {"YYYY-MM-DD"} onChange={formik.handleChange} value={formik.values.date}/>
                
            </div>
            {formik.touched.date && formik.errors.date ? (
                <div className="text-dangerRed">{formik.errors.date}</div>
            ) : null}
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
                    {liabilities.map((title)=>{
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
            <div className="formField">
                <label className="labelField" htmlFor="mode">MODE</label>
                <select className="inputField"  id="mode" name="mode" value={formik.values.mode}  onChange={formik.handleChange}>  
                <option value={"Select"}>Select</option>
                <option value={"Income"}>Income</option>
                <option value={"Expense"}>Expense</option>
                <option value={"Account Receivable[DO]"}>Account Receivable [DO] </option>
                <option value={"Account Receivable[DONE]"}>Account Receivable [DONE] </option>
                <option value={"Salary Payable[DO]"}>Salary Payable [DO] </option>
                <option value={"Salary Payable[DONE]"}>Salary Payable [DONE] </option>
                <option value={"Audit Fee Payable[DO]"}>Audit Fee Payable [DO] </option>
                <option value={"Audit Fee Payable[DONE]"}>Audit Fee Payable [DONE] </option>
                <option value={"Other Payable[DO]"}>Other Payable [DO] </option>
                <option value={"Other Payable[DONE]"}>Other Payable [DONE] </option>
                   
                </select>
            </div>
            
            <button className="btn mt-10" type="submit">Submit</button>

        </form>
        </div>
        </div>
    )
}

export default TransactionAdd

