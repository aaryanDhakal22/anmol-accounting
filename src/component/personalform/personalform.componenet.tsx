import { Button, MenuItem, Select, TextField } from "@mui/material"
import { FormikConfig, useFormik } from "formik"
import { Student } from "../../gtypes"
import { useUpdateStudentData } from "../../hooks/useStudentQuery"

const PersonalForm = ({student}:{student:Student})=>{
    const {mutate} = useUpdateStudentData()
    const formik= useFormik<Student>({
        initialValues: student,
        onSubmit:(values)=>{
            mutate(values)
        }
    }as FormikConfig<Student>)
    return (
        <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <TextField
            variant="outlined"
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
        /><br></br>
        <label htmlFor="name">Student ID</label>
        <TextField
            variant="outlined"
            id="studentId"
            name="studentId"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.studentId}
        /><br></br>
        <label htmlFor="group">Group</label>
        <TextField
        variant="outlined"
            id="group"
            name="group"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.group}
        /><br></br>
        <label htmlFor="address">Address</label>
        <TextField
        variant="outlined"
            id="address"
            name="address"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.address}
        /><br></br>
        <label htmlFor="age">Age</label>
        <TextField
        variant="outlined"
            id="age"
            name="age"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.age}
        /><br></br>
        <label htmlFor="phone">Phone</label>
        <TextField
        variant="outlined"
            id="phone"
            name="phone"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.phone}
        /><br></br>
        <label htmlFor="father">father</label>
        <TextField
        variant="outlined"
            id="father"
            name="father"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.father}
        /><br></br>
        <label htmlFor="mother">mother</label>
        <TextField
        variant="outlined"
            id="mother"
            name="mother"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.mother}
        /><br></br>
        <label htmlFor="dob">Birthday</label>
        <TextField
        variant="outlined"
            id="dob"
            name="dob"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.dob}
        /><br></br>
        <label htmlFor="gender">gender</label>

        <Select
        defaultValue="M"
        id="gender"
        name="gender"
        value={formik.values.gender}
        onChange={formik.handleChange}
        >
        <MenuItem value={"M"}>Male</MenuItem>
        <MenuItem value={"F"}>Female</MenuItem>
        <MenuItem value={"O"}>Other</MenuItem>
        </Select>
        
        <Button type = "submit" variant="contained">Submit</Button>
    </form>
    )

}
export default PersonalForm
