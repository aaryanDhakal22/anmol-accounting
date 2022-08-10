import { FormikConfig, useFormik } from "formik";

import { Student } from "../../../gtypes";
import { useAddStudentData, useUpdateStudentData } from "../../../hooks/useStudentQuery";
import { FormField } from "../../formfield/formfield.component";

const PersonalForm = ({student,toAdd}:{student:Student,toAdd:boolean})=>{
    const {mutate:updateStudent} = useUpdateStudentData()
    const {mutate:addStudent} = useAddStudentData()

    const formik= useFormik<Student>({
        initialValues: student,
        onSubmit:(values)=>{
            if(toAdd){
                addStudent(values)
            }else{
                updateStudent(values)
            }
        }
    }as FormikConfig<Student>)
    return (
        <form className="" onSubmit={formik.handleSubmit}>
            {/* <div className="formField">
                <label className="labelField" htmlFor="name">NAME</label>
                <input className="inputField" id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name}/>
            </div> */}
            <FormField fieldFor={"name"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.name}  />
            <FormField fieldFor={"studentId"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.studentId}  />
            <FormField fieldFor={"group"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.group}  />
            <FormField fieldFor={"address"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.address}  />
            <FormField fieldFor={"age"} type={"number"} handleChange = {formik.handleChange} value ={formik.values.age}  />
            <FormField fieldFor={"phone"} type={"number"} handleChange = {formik.handleChange} value ={formik.values.phone}  />
            <FormField fieldFor={"father"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.father}  />
            <FormField fieldFor={"mother"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.mother}  />
            <FormField fieldFor={"dob"} type={"date"} handleChange = {formik.handleChange} value ={formik.values.dob}  />
            <div className="formField">
                <label className="labelField" htmlFor="gender">GENDER</label>
                <select className="inputField" name='gender'  value={formik.values.gender} onChange={formik.handleChange} id="gender">
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                </select>
            </div>
        {/* <Select
        defaultValue="M"
        id="gender"
        name="gender"
        value={formik.values.gender}
        onChange={formik.handleChange}
        >
        <MenuItem value={"M"}>Male</MenuItem>
        <MenuItem value={"F"}>Female</MenuItem>
        <MenuItem value={"O"}>Other</MenuItem>
        </Select> */}
        
        <button className="btn mt-3" type = "submit">Submit</button>
    </form>
    )

}
export default PersonalForm
