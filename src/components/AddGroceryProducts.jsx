import React, { Component } from 'react';
import Product from '../services/Product';


class AddGroceryProducts extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            url:'', 
            names:'',
            price:'',
            available:'',
            canteenName:'',
        }
        this.changeUrlHandler=this.changeUrlHandler.bind(this);
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changePriceHandler=this.changePriceHandler.bind(this);
        this.changeAvailabilityHandler=this.changeAvailabilityHandler.bind(this);
        this.changeCanteenNameHandler=this.changeCanteenNameHandler.bind(this);
        this.saveProduct=this.saveProduct.bind(this);
    }
    
    saveProduct=(e)=>{
        e.preventDefault();
        let student={name: this.state.names, price: this.state.price, availability: this.state.available, canteenname:this.state.canteenName, url: this.state.url};
        console.log('student =>'+JSON.stringify(student));
        
        Product.addGroceryProduct(student).then(res =>{
            this.props.history.push('/editproduct');
        });
        
    }
    
    changeNameHandler=(event)=>{
        this.setState({names: event.target.value});
    }
    changeUrlHandler=(event)=>{
        this.setState({url: event.target.value});
    }
    changePriceHandler=(event)=>{
        this.setState({price: event.target.value});
    }
    changeAvailabilityHandler=(event)=>{
        this.setState({available: event.target.value});
    }
    changeCanteenNameHandler=(event)=>{
        this.setState({canteenName: event.target.value});
    }
    
   
    
    
    render(){ 
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className = 'card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add To Grocery Product</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Name:</label>
                                        <input placeholder='Name' name='names' className='form-control'
                                        value={this.state.names} onChange={this.changeNameHandler}/>
                                    </div> 
                                    <div className='form-group'>
                                        <label>URL of pic:</label>
                                        <input placeholder='URL of pic' name='url' className='form-control'
                                        value={this.state.url} onChange={this.changeUrlHandler}/>
                                    </div>  
                                    <div className='form-group'>
                                        <label>Price:</label>
                                        <input placeholder='Price' name='price' className='form-control'
                                        value={this.state.price} onChange={this.changePriceHandler}/>
                                    </div>  
                                    <div className='form-group'>
                                        <label>Available:</label>
                                        <input placeholder='Availability' name='available' className='form-control'
                                        value={this.state.available} onChange={this.changeAvailabilityHandler}/>
                                    </div>  
                                    <div className='form-group'>
                                        <label>Canteen Name:</label>
                                        <input placeholder='Canteen Name' name='canteenName' className='form-control'
                                        value={this.state.canteenName} onChange={this.changeCanteenNameHandler}/>
                                    </div>  
                                      
                                    <button className='btn btn-success' onClick={this.saveProduct}>Save</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AddGroceryProducts;