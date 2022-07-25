import NepaliDate from "nepali-date-converter";
import { useParams } from "react-router-dom";
import logo from '../../assets/images/schoolLogo.png'
import { useNotificationQuery } from "../../hooks/useNotification";
import { useStudentQuery } from "../../hooks/useStudentQuery";
export const PrintPage = () => {
    const notsOfStudent = useNotificationQuery()
    const params = useParams()
    const notificationId = params['notificationId']
    const student = useStudentQuery()


    if (notsOfStudent.isLoading  || student.isLoading){
        return <p>Loading...</p>
    }
    if (notsOfStudent.isError){
        if(notsOfStudent.error instanceof Error){
            return <p>An Error Occured in Fetching Notification : {notsOfStudent.error.message}</p>
        }
    }
    if (student.isError){
        if(student.error instanceof Error){
            return <p>An Error Occured in Fetching Notification : {student.error.message}</p>
        }
    }
    if(notsOfStudent.isSuccess && student.isSuccess){
        console.log("isSuccess")
        const notification = notsOfStudent.data.filter((item)=>{
            return item.notificationId === notificationId
        })[0]
        const studentfiltered = student.data.filter((item)=>{
            return item.studentId === notification.studentId
        })[0]
        const date1 = new NepaliDate(new Date(notification.date))
        const formatterDate = date1.format('YYYY-MM-DD')
    return (
        <div className="absolute bg-white aspect-[1/1.41] w-screen top-0 left-0 p-5 flex flex-col items-center">
            <img className="w-40 h-40 ml-[-1rem]" src={logo} alt="" />
            <div className="text-2xl mt-3 ml-4" >ANMOL SPECIAL EDUCATION CENTER</div>
            <div className="flex justify-between w-96 mt-16 text-lg">
                <div className="">
                    Name : <span className="text-lg border-dotted border-b-2 border-b-black ">{studentfiltered.name}</span>

                </div>
                <div className="">
                    Date : <span className="text-lg border-dotted border-b-2 border-b-black ">{formatterDate}</span>
                </div>
            </div>
            <div className="w-96 mt-5 text-2xl">
                <table className=" w-full border-2 border-black p-3">
                    <thead className="">
                        <tr className="">
                            <th className=" text-left p-1 border-b-2 border-black font-normal border-r-2">Header</th>
                            <th className=" text-right p-1 border-b-2 font-normal border-black">Amount</th>
                        </tr>
                    </thead>
                    <tbody className=" " >
                        <TableRowComp header={"monthly charge"} amount={notification.tuition} />
                        <TableRowComp header={"therapy"} amount={notification.therapy} />
                        <TableRowComp header={"speech therapy"} amount={notification.speechTherapy} />
                        <TableRowComp header={"transportation"} amount={notification.transportation} />
                        <TableRowComp header={"snacks"} amount={notification.snacks} />
                        <TableRowComp header={"extras"} amount={notification.extras} />
                        <tr className=" text-xl">
                            <td className=" text-left border-b-2 border-gray-500 p-2 font-bold ">Grand Total</td>
                            <td className=" text-right border-b-2 border-gray-500 p-2 font-bold ">Rs.{notification.amount}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div className="mt-10 border-t-2 ml-72 border-black p-5">
                Signature
            </div>
        </div>
    )
    }
    
    return <div>Unkown Error Occured</div>
    
}

const TableRowComp = ({header,amount}:{header:string,amount:number})=>{
    return (
        <tr className=" text-sm">
                    <td className=" text-left border-b-2 border-gray-500 p-2 ">{header.toUpperCase() }</td>
                    <td className=" text-right border-b-2 border-gray-500 p-2 ">Rs.{amount.toString()}</td>
         </tr>
    )
}