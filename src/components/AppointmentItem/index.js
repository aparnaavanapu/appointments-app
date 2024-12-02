import './index.css'
import {format} from 'date-fns'


const Appointment=(props)=>{
    const {details, toggleStarredAppointment}=props
    const {title,date,id,isStarred}=details
    const imgUrl=isStarred ?'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png':'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png';

    const handleClick=()=>{
        toggleStarredAppointment(id);
    }

    
    return(
        <li className="list-item">
            <div className="title-star-container">
            <h3 className="title">{title}</h3>
            <button className="star-btn" onClick={handleClick}><img src={imgUrl}  alt="star" /></button>
            </div>
            <p className="date">{format(new Date(date), 'dd MMMM yyyy, EEEE')}</p>
        </li>
    )


}
export default Appointment