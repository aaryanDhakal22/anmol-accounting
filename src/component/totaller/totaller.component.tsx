const Totaller = ({amount}:{amount:number})=>{
    return(
        <div className="fixed flex justify-center items-center bg-background bottom-0 w-full left-[12rem] h-24 ">

                <h1 className="text-4xl text-white"><span className="text-primaryText">GRAND TOTAL</span> : Rs.{amount.toString()}</h1> 
        </div>
    )
}

export default Totaller