import React from "react";

export const EmptyPage = () => {
    return (
        <>
        {/* <button className="btn" onClick={()=>{}} >Display Alert</button>
        <SideAlert  message={"Unknown error at Collections"} /> */}

        <div >
            WELCOME
        </div>
        </>
    )
    }

const SideAlert = ({message}:{message:string})=>{
    return(
        <div className="fixed right-10 bg-dangerRed p-3 rounded-lg text-white w-60 scale-100 transition-all duration-100 origin-right">
            <button className="bg-red-400 shadow-lg fixed right-3 rounded-full px-2"  >
                x
            </button>
            <div className="font-bold text-xl ">
                Error
            </div>
            <div>
                {message}
            </div>
        </div>
    )
}