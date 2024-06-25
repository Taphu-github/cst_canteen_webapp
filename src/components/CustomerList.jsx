import React, {Component} from 'react';
import Customer from '../services/Customer';
import { Link } from 'react-router-dom';

class CustomerList extends Component{
    constructor(props) {
        super(props)
        this.state = {
            students: [],
            mid:""
        }
        this.addStudent=this.addStudent.bind(this);
        this.editStudent=this.editStudent.bind(this);
    }
    

    componentDidMount(){
        Customer.getStudent().then((res) => {
            this.setState({students: res.data})
        });
    }
    editStudent(id){
    
        this.props.history.push(`/update-student/${id}`);
    }

    addStudent(){
        this.props.history.push('/add-student');
    }

    render(){
        return(
            <div>
                <h2 className="text-center">Customer List</h2>   
                <div >
                    <button type="button" className='btn btn-primary' onClick={this.addStudent}>Add Student</button>
                </div>
                <div><Link to="/add-student" className='btn btn-primary'>Add</Link></div>
                <div><Link to="/update-student" className='btn btn-primary'>Update</Link></div>
                <div className="row">

                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Student ID</th>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Year</th>
                                <th>Contact No</th>
                                <th>Email ID</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.map(
                                    student =>
                                    <tr key={student.id}>
                                        <td>{student.stdID}</td>
                                        <td>{student.name}</td>
                                        <td>{student.department}</td>
                                        <td>{student.year}</td>
                                        <td>{student.contactNo}</td>
                                        <td>{student.emailID}</td>
                                        <td>
                                            <button onClick={()=> this.editStudent(student.id)} className='btn btn-info'>
                                                Update</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                   
                </div>
            </div>
        );
    }
}

export default CustomerList