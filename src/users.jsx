import { useEffect, useState } from "react"

export default function Users (){
  const [Users,setUsers]=useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div className="card">
      <h3>Users: {Users.length} </h3>
      {
        <ol>
          {Users.map(user=> <li key={user.id}>{user.name}</li>)}
        </ol>
      }
    </div>
  )
}