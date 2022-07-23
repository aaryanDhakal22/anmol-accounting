const Totaller = ({amount}:{amount:number})=>{
    return(
        <>
        <h1 className="text-danger">Grand Total : {amount.toString()}</h1> 
        </>
    )
}

export default Totaller