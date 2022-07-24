import { FormikConfig } from "formik";
import { ChangeEventHandler } from "react";

export const FormField = ({fieldFor,type,handleChange,value}:{fieldFor:string,type:string,handleChange:ChangeEventHandler,value:any}) => {
    return(
        <div className="formField">
                <label className="labelField" htmlFor={fieldFor}>{fieldFor.toUpperCase()}</label>
                <input className="inputField" id={fieldFor} name={fieldFor} type={type} onChange={handleChange} value={value}/>
        </div>
    )
}