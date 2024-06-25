import React, { Component } from 'react';
import Product from '../services/Product';
import Logo from '../images/C.png';
import Card from '../functions/Card'
import '../Home.css';
import Cards from '../functions/EditCard';
import OwnHeader from './OwnHeader';

class Homes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dailymenus: [],
            daily:[],
            grocerys:[],
            state:false,
        }
        
       
    }
    

    componentDidMount(){
        Product.getDailyMenuProduct().then((res) => {
            this.setState({dailymenus: res.data})
        });
        Product.getDailyMenuProduct().then((res) => {
            this.setState({daily: res.data})
        });

        Product.getGroceryProduct().then((res) => {
            this.setState({grocerys: res.data})
        });
    }
    
    
    render(){
        const filtercards=event=>{
            const value=event.target.value.toLowerCase();
            const filtered=this.state.daily.filter(
                singlemenu=>(`${singlemenu.name}`.toLowerCase()
                .includes(value)
                )
            );

            this.setState({daily:filtered});
        };
        return(
            <div>
                <OwnHeader/>
                <h3>DailyMenu</h3>
                <div className='dailymenu' style={{display:'flex',flexWrap:'wrap'}}>
                    <div style={{display:'flex',flexWrap:'wrap'}}>
                    {
                        this.state.dailymenus.map(
                        product =>
                            (
                            <Card products={product} key={product.id}/>
                            )
                        )
                    }

                    </div>    
                </div> 
                <h3>Grocery</h3>
                <div className='Grocery'>
                    <div style={{display:'flex',flexWrap:'wrap'}}>
                    {
                        this.state.grocerys.map(
                        product =>
                            (
                            <Cards products={product} key={product.id}/>
                            )
                        )
                    }

                    </div> 
                    
                </div>   
         
         
         
         
            </div>
        );
    }
}
 
export default Homes;