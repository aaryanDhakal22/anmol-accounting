import { FormikConfig, useFormik } from "formik";
import { deleteNotification, useUpdateNotification } from "../../../hooks/useNotification";
import { Notification } from "../../../gtypes";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { FormField } from "../../formfield/formfield.component";
import { useNavigate } from "react-router-dom";
const NotificationEditForm = ({notification}:{notification:Notification})=>{
    const {mutate:updateNotification} = useUpdateNotification()
    const navigate = useNavigate()
    const formik= useFormik<Notification>({
        initialValues: notification,
        onSubmit:(values:Notification)=>{
            const totalSum = values.speechTherapy + values.therapy + values.transportation + values.snacks + values.tuition + values.extras
            const finalValues = {...values,amount:totalSum}
            updateNotification(finalValues)
        }
    }as FormikConfig<Notification>)
    return (
        <div className="grid grid-cols-12">
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
            <FormField fieldFor={"speechTherapy"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.speechTherapy}  />
            <FormField fieldFor={"therapy"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.therapy}  />
            <FormField fieldFor={"transportation"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.transportation}  />
            <FormField fieldFor={"snacks"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.snacks}  />
            <FormField fieldFor={"extras"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.extras}  />
            <FormField fieldFor={"note"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.note}  />
            <FormField fieldFor={"tuition"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.tuition}  />


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
            <button className="btn bg-dangerRed border-dangerRed active:text-dangerRed mt-10 ml-5" onClick={()=>deleteNotification(notification.notificationId,()=>navigate(-1))}type="button">DELETE</button>
            <button className="btn mt-10 ml-5 bg-blue-400 " onClick={()=>navigate(`/print/${notification.notificationId}`)} type="button">PRINT</button>
            <button className="btn mt-10 ml-5" type="submit">SUBMIT</button>
        </form>
        </div>
        </div>
        )
}

export default NotificationEditForm