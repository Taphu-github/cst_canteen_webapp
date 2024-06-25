import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/C.png';

class OwnHeader extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md '>
                        <Link to={'/editproduct'} className='btn ' style={{marginLeft:'3%'
                        , color:'black', background:'#ADADC9'}}>Edit The Products</Link>
                        <Link to={'/feedbacks'} className='btn ' style={{marginLeft:'3%'
                        , color:'black', background:'#ADADC9'}}>View Feedback</Link>
                        <Link to={'/creditlist'} className='btn 'style={{marginLeft:'3%'
                        , color:'black', background:'#ADADC9'}}>CreditList</Link>
                        <Link to={'/orderlist'} className='btn 'style={{marginLeft:'3%'
                        , color:'black', background:'#ADADC9'}}>OrderList</Link>
                        <Link to={'/home'} className='btn 'style={{marginLeft:'3%'
                        , color:'black', background:'#ADADC9'}}>LOG OUT</Link>
                        
                    </nav>
                </header>
            </div>
        );
    }
}
 
export default OwnHeader;