import React, { Component } from 'react';
import OrderandCredit from '../services/OrderandCredit';
import Product from '../services/Product';


class Addfeedback extends Component {
    constructor(props) {
        super(props);

        this.state = {  
            email:'',
            feed:'',
           
        }
        this.changeFeedHandler=this.changeFeedHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.saveFeed=this.saveFeed.bind(this);
    }
    
    saveFeed=(e)=>{
        e.preventDefault();
        let student={sender: this.state.email, feedback: this.state.feed};
        console.log('student =>'+JSON.stringify(student));
        if(this.state.email.includes("cst@rub.edu.bt")){
            OrderandCredit.addFeed(student).then(res =>{
                this.props.history.push('/feedback');
            });
        }
        
        
    }
    
    changeEmailHandler=(event)=>{
        this.setState({email: event.target.value});
    }
    changeFeedHandler=(event)=>{
        this.setState({feed: event.target.value});
    }
    
    render(){ 
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className = 'card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Write Feedback</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Email:</label>
                                        <input placeholder='Email' className='form-control'
                                        value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div> 
                                    <div className='form-group'>
                                        <label>Feed of pic:</label>
                                        <textarea placeholder='Feed'  className='form-control'
                                        value={this.state.feed} style={{height:250}} onChange={this.changeFeedHandler}/>
                                    </div>  
                                    
                                      
                                    <button className='btn btn-success' onClick={this.saveFeed}>Save</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Addfeedback;