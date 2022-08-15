import { Account } from "../../gtypes";

export const AccountTile = ({account}:{account:Account}) => {
    return(
        <div className="bg-background p-10 rounded-2xl hover:scale-105 transition-all ease-linear hover:shadow-primaryText hover:shadow-xl " >
            <div className="text-white">
                <div className="text-3xl"><span className="text-primaryText">Name </span>: {account.bankName}</div><br></br>
                <div className="">
                    <p><span className="text-primaryText text-xl">Account No.</span> : {account.accountId}</p>
                    <p><span className="text-primaryText text-xl">Current Bal</span> : {account.currBalance}</p>
                    <p><span className="text-primaryText text-xl">Loan </span> : {account.currLoan}</p>     
                </div>
            </div>
        </div>
    )
}