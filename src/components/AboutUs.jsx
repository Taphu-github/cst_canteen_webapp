import React, { Component } from 'react';
class Aboutus extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <br></br>
                <br></br>
              <h1 style={{textAlign:'center'}}>About Us</h1>
              <center><hr style={{width:500}}></hr></center>
              
              <p style={{marginLeft:280}}>
                    CST canteen website is developed for all the people residing inside college which offers<br></br>
                    online ordering feature and one of the speciality is ordering the product with credits .<br></br> 
                    Not only this website is user-friendly but also a great plateform for the CST'ians to <br></br>
                    view and check the availability of the product they want.  
                </p>
              
                <br></br>
                <br></br>
                
                <ul class="list-group list-group-horizontal" style={{marginLeft:220}}>
                    <li class="list-group-item"><img src='https://i.pinimg.com/236x/bc/83/c1/bc83c1b9531bba665376829044d1f56c.jpg'></img></li>
                    <li class="list-group-item"><img src='https://i.pinimg.com/236x/68/2a/a8/682aa8e9ec824f542c69548b1a51a48d.jpg'></img></li>
                    <li class="list-group-item"><img src='https://i.pinimg.com/236x/8f/50/f6/8f50f65868818a18f43a429f370a4419.jpg'></img></li>
                </ul>
            </div>
         );
    }
}
 
export default Aboutus;