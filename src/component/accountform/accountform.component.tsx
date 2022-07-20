import { Button, TextField } from "@mui/material"
import { FormikConfig, useFormik } from "formik"
import { Student } from "../../gtypes"

const AccountForm = ({student}:{student:Student})=>{
    const formik= useFormik<Student>({
        initialValues: student,
        onSubmit:(values)=>{
            const putURL = "https://anmolsec.com/student/details/"+values.studentId
            fetch(putURL,{
                method:"put",
                headers:{
                    'Accept':'application/json',
                    'Content-Type': 'application/json'},
                body: JSON.stringify(values)
            })
            .then(()=>{
                window.location.replace("/student/")
            })
        }
    }as FormikConfig<Student>)
    return (
        
        <form>
             <label htmlFor="therapy">therapy</label>
            <TextField
            variant="outlined"
                id="therapy"
                name="therapy"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.therapy}
            /><br></br>
            <label htmlFor="speechTherapy">speechTherapy</label>
            <TextField
            variant="outlined"
                id="speechTherapy"
                name="speechTherapy"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.speechTherapy}
            /><br></br>
            <label htmlFor="transportation">transportation</label>
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
export default AccountForm