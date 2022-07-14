import React from "react";
import {useParams} from 'react-router-dom'
import { StudentProfile } from "../../gtypes";
import { FormikConfig, replace, useFormik } from "formik";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
const StudentDetails = ({profiles}:{profiles :StudentProfile[]})=>{
    let searchId = useParams()
    const found_profile = profiles.filter((item)=>{
        return item.unid === searchId['unid']
    })[0]


    const formik= useFormik<StudentProfile>({
        initialValues: found_profile,
        onSubmit:(values)=>{
            const putURL = "https://djangostudenttestapi.herokuapp.com/student/details/"+values.unid
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
    }as FormikConfig<StudentProfile>)
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
            <label htmlFor="group">group</label>
            <TextField
            variant="outlined"
                id="group"
                name="group"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.group}
            /><br></br>
            <label htmlFor="address">address</label>
            <TextField
            variant="outlined"
                id="address"
                name="address"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.address}
            /><br></br>
            <label htmlFor="age">age</label>
            <TextField
            variant="outlined"
                id="age"
                name="age"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.age}
            /><br></br>
            <label htmlFor="phone">phone</label>
            <TextField
            variant="outlined"
                id="phone"
                name="phone"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.phone}
            /><br></br>
            <label htmlFor="dob">dob</label>
            <TextField
            variant="outlined"
                id="dob"
                name="dob"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.dob}
            /><br></br>
            <label htmlFor="gender">gender</label>
            <TextField
            variant="outlined"
                id="gender"
                name="gender"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.gender}
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
            <label htmlFor="admissionCharge">admissionCharge</label>
            <TextField
            variant="outlined"
                id="admissionCharge"
                name="admissionCharge"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.admissionCharge}
            /><br></br>
            <label htmlFor="monthlyCharge">monthlyCharge</label>
            <TextField
            variant="outlined"
                id="monthlyCharge"
                name="monthlyCharge"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.monthlyCharge}
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

export default StudentDetails