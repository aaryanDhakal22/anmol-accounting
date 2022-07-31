import React from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import logo from "../../assets/images/mitosysLogo.png";

export const Navbar = ()=>{
    const navigate = useNavigate()
    const location = useLocation().pathname   
    const transactionNavigate = ()=>{
        navigate('/transaction/add')
    }
    console.log(location)
    const activeClassName = "activated-border"
    const InactiveClassName = "disabled-border"
    if(location.includes("print")){
        return <div></div>
        
    }
    else{
        return (
            <div className="fixed top-0 left-0 h-screen w-50 flex flex-col items-center  bg-background px-5">
                <div onClick={()=>navigate("student")} className="w-46 pl-10 mt-10">
                    <img src={logo} alt="MitosysLogo" />
                </div>
                <div onClick={transactionNavigate} className="text-secondaryText px-5 py-3 rounded-lg w-56 text-center mt-20 border-secondaryText border-2  text-2xl"> <MdAddCircleOutline style={{"display":"inline","fontSize":"25px"}} /> TRANSACTION</div>
                <div className="flex flex-col items-center text-primaryText text-2xl gap-10 mt-10">
                    <NavLink to="/student" className={({isActive})=>{return isActive?activeClassName:InactiveClassName}}>STUDENT</NavLink>
                    <NavLink to="/fees" className={({isActive})=>{return isActive?activeClassName:InactiveClassName}}>FEES</NavLink>
                    <NavLink to="/credit" className={({isActive})=>{return isActive?activeClassName:InactiveClassName}}>C/D</NavLink>
                </div>
            </div>
        )
    }
}