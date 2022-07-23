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
    const creditNavigate = ()=>{
        navigate('/credit')
    }
    const debitNavigate = ()=>{
        navigate('/debit')
    }
    const transactionNavigate = ()=>{
        navigate('/transaction/add')
    }

    return (
        <>
        <h1 className="text-3xl from-neutral-700  underline">
      Hello world!
    </h1>
        <p onClick={transactionNavigate} > (+)Transaction</p>
        <p onClick={studentNavigate}>STUDENT</p>
        <p onClick={feesNavigate} >FEES</p>
        <p onClick={creditNavigate} >C/D</p>
        </>
    )
}