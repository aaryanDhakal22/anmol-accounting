import { FormikConfig, useFormik } from "formik";
import { useUpdateNotification } from "../../../hooks/useNotification";
import { Notification } from "../../../gtypes";
import { Button, MenuItem, Select, TextField } from "@mui/material";
const NotificationEditForm = ({notification}:{notification:Notification})=>{
    const {mutate:updateNotification} = useUpdateNotification()
    const formik= useFormik<Notification>({
        initialValues: notification,
        onSubmit:(values:Notification)=>{
            const totalSum = values.speechTherapy + values.therapy + values.transportation + values.snacks + values.tuition + values.extras
            const finalValues = {...values,amount:totalSum}
            updateNotification(finalValues)
        }
    }as FormikConfig<Notification>)
    return (
        
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
            <Select id="paid" name="paid" value={formik.values.paid} label="Paid" onChange={formik.handleChange}>
                <MenuItem value={"Cash"}>Cash</MenuItem>
                <MenuItem value={"EPay"}>EPay</MenuItem>
                <MenuItem value={"Unpaid"}>Unpaid</MenuItem>
            </Select>
            <Button variant="contained" type="submit">Submit</Button>
        </form>
        )
}

export default NotificationEditForm