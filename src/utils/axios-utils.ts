import axios from "axios";
import { Student } from "../gtypes";

const putClient = axios.create({
    baseURL:"https://anmolsec.com/api",
    headers:{
        'Accept':'application/json',
        'Content-Type': 'application/json'},
})

export const putReq = ({...options})=>{
    const onSuccess = (response:any) => {
        console.log(response)
        return response
    }
    const onError = (error:Error)=>{
        console.log(error)
    }
    return putClient(options).then(onSuccess).catch(onError)
}

const getClient = axios.create({
    baseURL:"https://anmolsec.com/api",
    method:'get'
})

export const getReq = ({...options}):Promise<Student[]>=>{
    const onSuccess = (response:any) => response.data
    const onError = (error:Error)=>{
        console.log(error)
    }
    return getClient(options).then(onSuccess).catch(onError)
}