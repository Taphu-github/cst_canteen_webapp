import React, { Component } from 'react';
import FeedbackSolo from '../functions/FeedbackSolo';
import OrderandCredit from '../services/OrderandCredit';
class Feedbacks extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            feeds:[],
         }
         
    }
    

     componentDidMount(){
        OrderandCredit.getFeeds().then((res)=>{
            this.setState({feeds:res.data})
        });
     }
     
    render() { 
        return ( 
            <div>
                <div>
                    <h3 style={{color:'black'}}>FEEDBACK</h3>
                    
                    
                </div>
                <div style={{marginTop:10}}>
                {
                        this.state.feeds.map(
                        product =>
                            (
                                <div className='shadow-none p-2 mb-3 bg-light rounded' style={{color:'red'}}>
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
 
export default Feedbacks;