import React from "react";
import { useNavigate } from "react-router-dom";
export const Navbar = ()=>{
    const navigate = useNavigate()

    const studentNavigate = ()=>{
        navigate('/student')
    }
    const feesNavigate = ()=>{
        navigate('/fees')
    }

    return (
        <>
        <p onClick={studentNavigate}>STUDENT</p>
        <p onClick={feesNavigate} >FEES</p>
        </>
    )
}