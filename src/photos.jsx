import { use } from "react"
import Photo from "./photo";

export default function Photos({photoFetch}){
const photos = use(photoFetch);
    return (
        <div className="card">
            <h1>Here is all photo collection</h1>
            {photos.map(photo=> <Photo key={photo.id} photo={photo}></Photo>)}
        </div>
    )
}