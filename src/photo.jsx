export default function Photo({photo}){
    const {title}=photo
    return (
        <div className="card">
            <p>{title}</p>
           
        </div>
    )
}