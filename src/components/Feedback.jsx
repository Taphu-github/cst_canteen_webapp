import React, { Component } from 'react';
import FeedbackSolo from '../functions/FeedbackSolo';
import OrderandCredit from '../services/OrderandCredit';
class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            feeds:[],
         }

         this.addfeeds=this.addfeeds.bind(this);
         
    }
    

     componentDidMount(){
        OrderandCredit.getFeeds().then((res)=>{
            this.setState({feeds:res.data})
        });
     }

     addfeeds(){
        this.props.history.push('/addfeed');
     }

     
    render() { 
        return ( 
            <div>
                <div>
                    <h3 style={{color:'black'}}>FEEDBACK</h3>
                    <button className='btn btn-success' onClick={this.addfeeds}>Add Feedback</button>
                    
                </div>

                    <div style={{marginTop:10}}>
                    {
                        this.state.feeds.map(
                        product =>
                            (
                                <div>
                                    <FeedbackSolo products={product} key={product.id}/>
                                    
                                </div>
                                
                            )
                        )
                    }
                    </div>
             
                

            </div>
         );
    }
}
 
export default Feedback;