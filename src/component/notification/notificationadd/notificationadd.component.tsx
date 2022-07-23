import { Button, MenuItem, Select, TextField } from "@mui/material";
import { FormikConfig, useFormik } from "formik";
import React from "react";
import { useParams } from "react-router-dom";
import { uuid } from "uuidv4";
import { Notification, Student } from "../../../gtypes";
import { useAddNotification } from "../../../hooks/useNotification";
import { useStudentQuery } from "../../../hooks/useStudentQuery";
import randomStrGen from "../../../utils/randomAlNumGen";

const initialNotificationValues = {
    
    'date':'',
    'amount':0,
    'month':'',
    'speechTherapy':0,
    'therapy': 0 ,
    'transportation':  0,
    'extras':0,
    'note' : '',
    'tuition':0,
    'snacks':0,
    'paid':''
}

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
                            'speechTherapy':initialValues.speechTherapy,
                            'therapy': initialValues.therapy ,
                            'transportation':  initialValues.transportation,
                            'extras':0,
                            'note' : '',
                            'tuition':initialValues.tuition,
                            'snacks':initialValues.snacks,
                            'paid':''

}
    const formik= useFormik<Notification>({
        initialValues: notification,
        onSubmit:(values:Notification)=>{
            console.log(values)
            addNotification(values)
        }
    }as FormikConfig<Notification>)
    
    return(
         
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="date">DATE</label>
            <TextField  variant="outlined" id="date" name= "date" type= "date" onChange={formik.handleChange}value={formik.values.date}/><br></br>
            <label htmlFor="month">MONTH</label>
            <TextField  variant="outlined" id="month" name= "month" type= "text" onChange={formik.handleChange}value={formik.values.month}/><br></br>
            <label htmlFor="speechTherapy">SPEECH</label>
            <TextField  variant="outlined" id="speechTherapy" name= "speechTherapy" type= "number" onChange={formik.handleChange}value={formik.values.speechTherapy}/><br></br>
            <label htmlFor="therapy">THERAPY</label>
            <TextField  variant="outlined" id="therapy" name= "therapy" type= "number" onChange={formik.handleChange}value={formik.values.therapy}/><br></br>
            <label htmlFor="transportation">TRANSPORTATION</label>
            <TextField  variant="outlined" id="transportation" name= "transportation" type= "number" onChange={formik.handleChange}value={formik.values.transportation}/><br></br>
            <label htmlFor="snacks">SNACKS</label>
            <TextField  variant="outlined" id="snacks" name= "snacks" type= "number" onChange={formik.handleChange}value={formik.values.snacks}/><br></br>
            <label htmlFor="extras">EXTRA</label>
            <TextField  variant="outlined" id="extras" name= "extras" type= "number" onChange={formik.handleChange}value={formik.values.extras}/><br></br>
            <label htmlFor="note">NOTE</label>
            <TextField  variant="outlined" id="note" name= "note" type= "text" onChange={formik.handleChange}value={formik.values.note}/><br></br>
            <label htmlFor="tuition">TUITION</label>
            <TextField  variant="outlined" id="tuition" name= "tuition" type= "number" onChange={formik.handleChange}value={formik.values.tuition}/><br></br>
            <label htmlFor="paid">PAID</label>
            <Select id="paid" name="paid"  value={formik.values.paid} label="Paid" onChange={formik.handleChange}>
                
                <MenuItem value={"Cash"}>Cash</MenuItem>
                <MenuItem value={"EPay"}>EPay</MenuItem>
                <MenuItem value={"Unpaid"}>Unpaid</MenuItem>
            </Select>
            <Button variant="contained" type="submit">Submit</Button>
        </form>
    )
}
export default NotificationAdd