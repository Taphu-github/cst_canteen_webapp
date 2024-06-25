import React, { Component } from 'react';
import Customer from '../services/Customer';


class UpdateStudent extends Component {
    constructor(props) {
        super(props);

        this.state = {  
            id:this.props.match.params.id,
            stdID:'',
            names:'',
            department:'',
            year:'',
            contactno:'',
            emailid:''
        }
        this.changeStdIDHandler=this.changeStdIDHandler.bind(this);
        this.changeContactNoHandler=this.changeContactNoHandler.bind(this);
        this.changeDepartmentHandler=this.changeDepartmentHandler.bind(this);
        this.changeEmailIDHandler=this.changeEmailIDHandler.bind(this);
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeYearHandler=this.changeYearHandler.bind(this);
        this.updateStudent=this.updateStudent.bind(this);
    }

    componentDidMount(){
        Customer.getStudentById(this.state.id).then((res)=>{
            let student=res.data;
            this.setState({stdID: student.stdID,
                names: student.name, department:student.department,
                year: student.year, contactno: student.contactNo,
                emailid: student.emailID
            })
        });
    }
    
    updateStudent=(e)=>{
        e.preventDefault();
        let student={stdID: this.state.stdID, name: this.state.names, department: this.state.department, year:this.state.year, contactNo: this.state.contactno, emailID: this.state.emailid};
        console.log('student =>'+JSON.stringify(student));
        
        Customer.updateStudent(student,this.state.id).then(res=>{
            this.props.history.push('/students');
        });
            
    }
    changeStdIDHandler=(event)=>{
        this.setState({stdID: event.target.value});
    }
    changeNameHandler=(event)=>{
        this.setState({names: event.target.value});
    }
    changeDepartmentHandler=(event)=>{
        this.setState({department: event.target.value});
    }
    changeYearHandler=(event)=>{
        this.setState({year: event.target.value});
    }
    changeContactNoHandler=(event)=>{
        this.setState({contactno: event.target.value});
    }
    changeEmailIDHandler=(event)=>{
        this.setState({emailid: event.target.value});
    }
    
    render(){ 
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className = 'card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Update Students</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Student ID:</label>
                                        <input placeholder='Student ID' name='sdtID' className='form-control'
                                        value={this.state.stdID} onChange={this.changeStdIDHandler}/>
                                    </div> 
                                    <div className='form-group'>
                                        <label>Name:</label>
                                        <input placeholder='Name' name='names' className='form-control'
                                        value={this.state.names} onChange={this.changeNameHandler}/>
                                    </div>  
                                    <div className='form-group'>
                                        <label>Department:</label>
                                        <input placeholder='Department' name='department' className='form-control'
                                        value={this.state.department} onChange={this.changeDepartmentHandler}/>
                                    </div>  
                                    <div className='form-group'>
                                        <label>Year:</label>
                                        <input placeholder='Year' name='year' className='form-control'
                                        value={this.state.year} onChange={this.changeYearHandler}/>
                                    </div>  
                                    <div className='form-group'>
                                        <label>Contact No:</label>
                                        <input placeholder='contact no' name='contactno' className='form-control'
                                        value={this.state.contactno} onChange={this.changeContactNoHandler}/>
                                    </div>  
                                    <div className='form-group'>
                                        <label>email :</label>
                                        <input placeholder='Email' name='emailid' className='form-control'
                                        value={this.state.emailid} onChange={this.changeEmailIDHandler}/>
                                    </div>   
                                    <button className='btn btn-success' onClick={this.updateStudent}>Update</button>
                                    <button className='btn btn-danger' onClick={this.changeContactNoHandler.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default UpdateStudent;