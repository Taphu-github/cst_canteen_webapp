import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/C.png';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {  }

        
    }
    
    render() { 
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-light bg-secondary'>
                        <img className='rounded-circle' src={Logo} style={{marginLeft:'2%', width:'4%'}}/>
                        <Link to={'/home'}  className='btn btn-outline-light' style={{marginLeft:'3%'
                        }}>CST CANTEEN</Link>
                        <Link to={'/aboutus'}  className='btn btn-outline-light' style={{marginLeft:'60%'
                        }}>ABOUT US</Link>
                        <Link to={'/feedback'} className='btn btn-outline-light'style={{marginLeft:'1%'
                        }}>FEEDBACK</Link>
                        <Link to={'/login'} className='btn btn-outline-light'style={{marginLeft:'1%'
                        }}>LOGIN</Link>
                        
                    
                        
                    </nav>
                </header>
            </div>
        );
    }
}
 
export default HeaderComponent;