import { FormikConfig, useFormik } from "formik";
import { useParams } from "react-router-dom";

import { Notification, Student } from "../../../gtypes";
import { useAddNotification } from "../../../hooks/useNotification";
import { useStudentQuery } from "../../../hooks/useStudentQuery";
import randomStrGen from "../../../utils/randomAlNumGen";
import { FormField } from "../../formfield/formfield.component";

// const initialNotificationValues = {
    
//     'date':'',
//     'amount':0,
//     'month':'',
//     'speechTherapy':0,
//     'therapy': 0 ,
//     'transportation':  0,
//     'extras':0,
//     'note' : '',
//     'tuition':0,
//     'snacks':0,
//     'paid':''
// }

const NotificationAdd = ()=>{
    const params = useParams()
    const studentId = params["studentId"]?params["studentId"]:""
    const initialValues = useStudentQuery().data?.filter((item)=>{
        return item.studentId===studentId
    })[0] as Student
    
    const {mutate:addNotification} = useAddNotification()
    const newNotificationId = randomStrGen()
    const newTransactionId = randomStrGen()
    const notification = {  "studentId": studentId?studentId:"",
                            'transactionId':newTransactionId,
                            "notificationId":newNotificationId,
                            'date':'',
                            'amount':0,
                            'month':'',
                            'year':'',
                            'speechTherapy':initialValues.speechTherapy,
                            'therapy': initialValues.therapy ,
                            'transportation':  initialValues.transportation,
                            'extras':0,
                            'note' : '',
                            'tuition':initialValues.tuition,
                            'snacks':initialValues.snacks,
                            'paid':'Unpaid'

}
    const formik= useFormik<Notification>({
        initialValues: notification,
        onSubmit:(values:Notification)=>{
            const totalSum = values.speechTherapy + values.therapy + values.transportation + values.snacks + values.tuition + values.extras
            const finalValues = {...values,amount:totalSum}
            addNotification(finalValues)
        }
    }as FormikConfig<Notification>)
    
    return(
         
        <div className="grid grid-cols-12 mt-10">
                <div className="col-start-4 col-span-6 mt-6 text-center">
        <form onSubmit={formik.handleSubmit}>

            <FormField fieldFor={"date"} type={"date"} handleChange = {formik.handleChange} value ={formik.values.date}  />
            <FormField fieldFor={"year"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.year}  />
            <div className="formField">
                <label className="labelField" htmlFor="month">MONTH</label>
                <select className="inputField" name='month'  value={formik.values.month} onChange={formik.handleChange} id="month">
                    <option value={"Cash"}>Baisakh</option>
                    <option value={"Baisakh"}>Baisakh</option>
                    <option value={"Jestha"}>Jestha</option>
                    <option value={"Ashar"}>Ashar</option>
                    <option value={"Shrawan"}>Shrawan</option>
                    <option value={"Bhadra"}>Bhadra</option>
                    <option value={"Ashoj"}>Ashoj</option>
                    <option value={"Kartik"}>Kartik</option>
                    <option value={"Mangsir"}>Mangsir</option>
                    <option value={"Poush"}>Poush</option>
                    <option value={"Magh"}>Magh</option>
                    <option value={"Falgun"}>Falgun</option>
                    <option value={"Chaitra"}>Chaitra</option>
                </select>
            </div>
            <FormField fieldFor={"speechTherapy"} type={"number"} handleChange = {formik.handleChange} value ={formik.values.speechTherapy}  />
            <FormField fieldFor={"therapy"} type={"number"} handleChange = {formik.handleChange} value ={formik.values.therapy}  />
            <FormField fieldFor={"transportation"} type={"number"} handleChange = {formik.handleChange} value ={formik.values.transportation}  />
            <FormField fieldFor={"snacks"} type={"number"} handleChange = {formik.handleChange} value ={formik.values.snacks}  />
            <FormField fieldFor={"extras"} type={"number"} handleChange = {formik.handleChange} value ={formik.values.extras}  />
            <FormField fieldFor={"note"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.note}  />
            <FormField fieldFor={"tuition"} type={"number"} handleChange = {formik.handleChange} value ={formik.values.tuition}  />


            {/* <label htmlFor="paid">PAID</label>
            <Select id="paid" name="paid" value={formik.values.paid} label="Paid" onChange={formik.handleChange}>
                <MenuItem value={"Cash"}>Cash</MenuItem>
                <MenuItem value={"EPay"}>EPay</MenuItem>
                <MenuItem value={"Unpaid"}>Unpaid</MenuItem>
            </Select> */}
            <div className="formField">
                <label className="labelField" htmlFor="paid">PAID</label>
                <select className="inputField" name='paid'  value={formik.values.paid} onChange={formik.handleChange} id="paid">
                    <option value={"Cash"}>Cash</option>
                    <option value={"EPay"}>EPay</option>
                    <option value={"Unpaid"}>Unpaid</option>
                </select>
            </div>
            <button className="btn mt-10 ml-5" type="submit">SUBMIT</button>
            </form>
        </div>
        </div>
    )
}
export default NotificationAdd