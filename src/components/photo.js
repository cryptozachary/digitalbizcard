import myPhoto from "../images/Zachary2.jpg"

export default function Photo() {
    return (
        <div className="photo-container">
            <img src={myPhoto} className="my-photo" alt="zachary">
            </img>
        </div>
    )
}