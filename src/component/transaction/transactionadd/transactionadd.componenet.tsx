import { FormikConfig, useFormik } from "formik";
import { Transaction } from "../../../gtypes";
import { useAddTransaction } from "../../../hooks/useTransaction";
import randomStrGen from "../../../utils/randomAlNumGen";
import { FormField } from "../../formfield/formfield.component";

const initialValues:Transaction = {
    "transactionId":'',
    "date":'',
    "type":'Select',
    "subType":'',
    "payer":'',
    "note":'',
    "amount":0,
    "paid":'Unpaid',
    
}
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
const TransactionAdd = ()=>{
    const newTransactionId = randomStrGen()
    const {mutate:addTransaction} = useAddTransaction()

    const transaction = {...initialValues, "transactionId":newTransactionId}
    const formik= useFormik<Transaction>({
        initialValues: transaction,
        onSubmit:(values:Transaction)=>{
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
                    <option value={"Donation"}>Donation</option>
                    <option value={"SchoolMaintainance"}>School Maintainance</option>
                    <option value={"Supplies"}>Supplies</option>
                    <option value={"Bills"}>Bills</option>
                    <option value={"Kitchen"}>Kitchen</option>
                </select>
            </div>
            <div className="formField">
                <label className="labelField" htmlFor="subType">SUB-TYPE</label>
                <select className="inputField" id="subType" name="subType"  value={formik.values.subType} onChange={formik.handleChange}>     
                <option key={"Select"} value={"Select"}>Select</option>
                {typeToSubType[formik.values.type].map((item:string)=>{
                    return <option key={item} value={item}>{item}</option>
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
                <label className="labelField" htmlFor="paid">PAID</label>
                <select className="inputField" name='paid'  value={formik.values.paid} onChange={formik.handleChange} id="paid">
                    <option value={"Cash"}>Cash</option>
                    <option value={"EPay"}>EPay</option>
                    <option value={"Unpaid"}>Unpaid</option>
                </select>
            </div>
            <button className="btn mt-10" type="submit">Submit</button>
        </form>
        </div>
        </div>
    )
}
{/* <Select id="type" name="type" defaultValue={"Donation"} value={formik.values.type} label="Paid" onChange={formik.handleChange}>     
                <MenuItem value={"Donation"}>Donation</MenuItem>
                <MenuItem value={"SchoolMaintainance"}>School Maintainance</MenuItem>
                <MenuItem value={"Supplies"}>Supplies</MenuItem>
                <MenuItem value={"Bills"}>Bills</MenuItem>
                <MenuItem value={"Kitchen"}>Kitchen</MenuItem>
            </Select> */}
{/* <Select id="subType" label="subTypeLabel" labelId="subTypeLabel" name="subType"  value={formik.values.subType} onChange={formik.handleChange}>     
                {typeToSubType[formik.values.type?formik.values.type:"Donation"].map((item:string)=>{
                    return <MenuItem value={item}>{item}</MenuItem>
                })}
            </Select> */}

export default TransactionAdd

