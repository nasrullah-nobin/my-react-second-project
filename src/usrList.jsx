import { use } from "react"
import Data from "./data";

export default function UserList({usersFetch}){
    const usrList = use(usersFetch);
    return(
        <div className="card">
           {usrList.map(data=> <Data key={data.id} data={data}></Data>)}
        </div>
    )
}