import { Button, TextField } from "@mui/material"
import { FormikConfig, useFormik } from "formik"
import { Student } from "../../../gtypes"
import { useAddStudentData, useUpdateStudentData } from "../../../hooks/useStudentQuery"

const AccountForm = ({student,toAdd}:{student:Student,toAdd:boolean})=>{
    const {mutate:updateStudent} = useUpdateStudentData()
    const {mutate:addStudent} = useAddStudentData()

    const formik= useFormik<Student>({
        initialValues: student,
        onSubmit:(values)=>{
            console.log(values)
            if(toAdd){
                addStudent(values)
            }else{
                updateStudent(values)
            }
        }
    }as FormikConfig<Student>)
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
export default AccountForm