import { use } from "react"

export default function Friends({friendsFetch}){
    const friends = use(friendsFetch);
    console.log(friends)
return (
    <div className="card">
        <h3>Friends: {friends.length} </h3>
    </div>
)
}