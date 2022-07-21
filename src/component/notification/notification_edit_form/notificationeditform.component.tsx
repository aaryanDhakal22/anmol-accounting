import { FormikConfig, useFormik } from "formik";
import { useUpdateNotification } from "../../../hooks/useNotification";
import { Notification } from "../../../gtypes";
import { Button, TextField } from "@mui/material";
const NotificationEditForm = ({notification}:{notification:Notification})=>{
    const {mutate:updateNotification} = useUpdateNotification()
    const formik= useFormik<Notification>({
        initialValues: notification,
        onSubmit:(values:Notification)=>{
            updateNotification(values)
        }
    }as FormikConfig<Notification>)
    return (
        
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="therapy">Therapy</label>
            <TextField
            variant="outlined"
                id="therapy"
                name="therapy"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.therapy}
            /><br></br>
            <label htmlFor="speechTherapy">Speech Therapy</label>
            <TextField
            variant="outlined"
                id="speechTherapy"
                name="speechTherapy"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.speechTherapy}
            /><br></br>
            <label htmlFor="transportation">Transportation</label>
            <TextField
            variant="outlined"
                id="transportation"
                name="transportation"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.transportation}
            /><br></br>
            <label htmlFor="tuition">tuition</label>
            <TextField
            variant="outlined"
                id="tuition"
                name="tuition"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.tuition}
            /><br></br>
            <label htmlFor="snacks">snacks</label>
            <TextField
            variant="outlined"
                id="snacks"
                name="snacks"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.snacks}
            /><br></br>

            <Button variant="contained" type="submit">Submit</Button>
        </form>
        )
}

export default NotificationEditForm