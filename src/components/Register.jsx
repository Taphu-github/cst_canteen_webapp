import React, { Component } from 'react';
import Logo from '../images/C.png';
import Customer from '../services/Customer';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            names:'',
            email:'',
            contactNo:'',
            password:''
        }
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeContactNoHandler=this.changeContactNoHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.register=this.register.bind(this);
    }
    register=(e)=>{
        e.preventDefault();
        let customer={name: this.state.names, contactNo:this.state.contactNo, emailID:this.state.email, password:this.state.password}
        console.log('customer=>'+JSON.stringify(customer));
        
        if(this.state.email.includes("cst@rub.edu.bt")){
            console.log("in validate");
            Customer.addCustomer(customer).then(
                res=>{

                }
            );
            this.props.history.push('/login');
        }else{

        }
    }
    changeEmailHandler=(event)=>{
        this.setState({email: event.target.value});
    }
    changeNameHandler=(event)=>{
        this.setState({names: event.target.value});
    }
    changeContactNoHandler=(event)=>{
        this.setState({contactNo: event.target.value});
    }
    changePasswordHandler=(event)=>{
        this.setState({password: event.target.value});
    }
    
    
    
    render() { 
       
        return ( 
            <div style={{border:'1px solid black', marginTop:'2%'}}>
                   <img src={Logo} style={{width:100, height:100, marginLeft:'40%'}}/>
                   <form name='my'>
                    <div>
                            <label>Name:</label> <input value={this.setState.names}  type={'text'} onChange={this.changeNameHandler}/>
                    </div>
                    <div>
                            <label>ContactNo:</label> <input value={this.setState.contactNo} maxLength='8' min='8' onChange={this.changeContactNoHandler} type={'tel'}/>
                    </div>
                    <div>
                            <label>Email Address:</label> <input name='email' id='em' value={this.setState.email} onChange={this.changeEmailHandler} type={'email'} />
                    </div>
                    <div>
                            <label>Password</label> <input value={this.setState.password} min='8' onChange={this.changePasswordHandler} type={'password'}/>
                    </div>
                    <input type={'checkbox'} />
                    <input type={'submit'} onClick={this.register}/>
                   </form>
                   
              
            </div>
         );
    }
}
 
export default Register;