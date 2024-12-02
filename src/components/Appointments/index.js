import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import Appointment from '../AppointmentItem'

class Appointments extends Component{

    state={
        title:'',
        date:'',
        appointments:[],
        starredList:[]
    
        
    }
    onChangeTitle=(event)=>{
        this.setState({title:event.target.value})
    }
    onChangeDate=(event)=>{
        this.setState({date:event.target.value})
    }
    onAddAppointment=(event)=>{
        event.preventDefault();
        const {title,date}=this.state
        const newAppointment={
            id:uuidv4(),
            title,
            date,
            isStarred:false
            
        }
        this.setState(prevState=>(
            {
               appointments:[...prevState.appointments,newAppointment],
                title:'',
                date:''
            }
        ))
        
    }

    toggleStarredAppointment = id => {
        this.setState(prevState => ({
            appointments: prevState.appointments.map(eachItem => {
                if (id === eachItem.id) {
                    return { ...eachItem, isStarred: !eachItem.isStarred };
                }
                return eachItem;
            }),
        }));
    };

    starredAppointments=()=>{
        this.setState(prevState=>(
            {
                appointments:prevState.appointments.filter(eachItem=>eachItem.isStarred===true)
            }
        ))
    }
    


    render(){
        const {appointments}=this.state
        return(
            <div className="bg-container">
                <div className="card-container"> 
                        <div className="form-img-container">
                            <img src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png" alt="appointments" className="img" />
                            <form className="form-container" onSubmit={this.onAddAppointment}>
                                <h1 className="heading">Add Appointment</h1>
                                <label for="title">TITLE</label>
                                <input type="text" placeholder="Title" id="title" onChange={this.onChangeTitle} value={this.state.title}/>
                                <label for="date">DATE</label>
                                <input type="date" placeholder="dd/mm/yyyy" id="date" onChange={this.onChangeDate} value={this.state.date} />
                                <button type="submit" className="btn">Add</button>
                            </form>
                        </div>
                        <hr/>
                        <div className="heading-btn-container">
                            <p className="appointments-heading">Appointments</p>
                            <button className="starred-btn" onClick={this.starredAppointments}>Starred</button>
                            </div>
                        <ul className="list-items-container">
                            {appointments.map(eachItem=>(
                                <Appointment details={eachItem} key={eachItem.id} toggleStarredAppointment={this.toggleStarredAppointment}/>
                            ))}
                            
                        </ul>
                </div>
            </div>
        )
    }


}

export default Appointments