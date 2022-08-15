import { AccountTile } from "../../component/account_tile/account_tile.component";
import { useAccountsQuery } from "../../hooks/useAccount";

const AccountsPage = ()=>{
    const accounts = useAccountsQuery()
    if(accounts.isLoading){
        return <div>LOADING</div>
    }
    if(accounts.isError){
        if(accounts.error instanceof Error){
            return <div>Error Occured : {accounts.error.message}</div>
        }
    }
    if(accounts.isSuccess){

        return (
            <>
            <div className="grid grid-cols-3 gap-12 p-10">
                {accounts.data.map((item)=>{
                    return <AccountTile account = {item}/>
                })}
            </div>
            </>
        )
    }
    return <div>Unknown Error Occured</div>
}
export default AccountsPage 