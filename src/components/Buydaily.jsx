import React, { Component } from 'react';
import OrderandCredit from '../services/OrderandCredit';
import Product from '../services/Product';


class Buydaily extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            id:this.props.match.params.id,
            products:'',
            price:'',
            available:'',
            canteenName:'',
            quantity:'',
            customername:'',
            credit:'',
            emailid:'',
            contact:'',
            totalamount:'0',

        }
        this.changeQuantityHandler=this.changeQuantityHandler.bind(this);
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeContactNoHandler=this.changeContactNoHandler.bind(this);
        this.orderProduct=this.orderProduct.bind(this);
        this.creditProduct=this.creditProduct.bind(this);
    }
    
    componentDidMount(){
        Product.getDailyMenuProductById(this.state.id).then((res)=>{
            let student=res.data;
            this.setState({products: student.name,
                price: student.price, available:student.availability,
                canteenName: student.canteenname, contact: student.contactNo, totalamount:'0', customername: '',
                credit: 'false', emailid: ' ', quantity: ' 0'
            })
        });
    }
    changeNameHandler=(event)=>{
        this.setState({customername: event.target.value});
    }
    changeEmailHandler=(event)=>{
        this.setState({emailid: event.target.value});
    }
    changeQuantityHandler=(event)=>{
        this.setState({quantity: event.target.value});
        this.setState({totalamount: this.state.price*event.target.value});
    }
    changeContactNoHandler=(event)=>{
        this.setState({contact: event.target.value});
    }
    
    

    orderProduct(e){
        e.preventDefault();
        let times= new Date();
        let dates='Year: '+times.getFullYear()+', Month: '+times.getMonth()+', Date: '+times.getDate()+', Hours(24hrs fromat): '+times.getHours()+', Minutes: '+times.getMinutes();
        if(this.state.available.match('YES')){
            let student={name: this.state.customername, canteenname: this.state.canteenName, credit: this.state.credit, emailid:this.state.emailid, 
                products: this.state.products,quantity:this.state.quantity, totalamount:this.state.totalamount, state: 'Not Accepted', date: dates };
            console.log('student =>'+JSON.stringify(student));
            
            OrderandCredit.addOrders(student).then(res =>{
                this.props.history.push('/home');
            });
        }
            
    }

    creditProduct(e){
        
        e.preventDefault();
        let times= new Date();
        let dates='Year: '+times.getFullYear()+' Month: '+times.getMonth()+' Date: '+times.getDate()+' Hours(24hrs fromat): '+times.getHours()+' Minutes: '+times.getMinutes();
        
        if(this.state.available.match('YES')){
            let student={name: this.state.customername, canteenname: this.state.canteenName, credit: 'true', emailid:this.state.emailid, 
            products: this.state.products, quantity:this.state.quantity, totalamount:this.state.totalamount, state: 'Not Accepted', date: dates };
        console.log('student =>'+JSON.stringify(student));
        OrderandCredit.addOrders(student).then(res =>{
            
        });
       
        
        let productsolo={name: this.state.customername, canteenname: this.state.canteenName, emailid:this.state.emailid, 
            products: this.state.products, quantity:this.state.quantity, totalamount:this.state.totalamount, state: 'Not Accepted', date: dates };
        console.log('student =>'+JSON.stringify(productsolo));
        OrderandCredit.addCredit(student).then(res =>{
            this.props.history.push('/home');
        });
        }
        
    }

   
    
    
    render(){ 
        return (
            <div >
                <div className='container'>
                    <div className='row'>
                        <div className = 'card col-md-6 offset-md-3'>
                            <h3 className='text-center'>Buy</h3>
                            <div  className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>CustomerName:</label>
                                        <input placeholder='Name' name='customername' className='form-control'
                                        value={this.state.customername} type={'text'} onChange={this.changeNameHandler}/>
                                    </div> 
                                    <div className='form-group'>
                                        <label>Email ID:</label>
                                        <input placeholder='Email' name='email' className='form-control'
                                        value={this.state.emailid} type={'email'} onChange={this.changeEmailHandler}/>
                                    </div>  
                                    <div className='form-group'>
                                        <label>ConatactNo:</label>
                                        <input placeholder='Contact No' name='contact' className='form-control'
                                        value={this.state.contact} type={'tel'} onChange={this.changeContactNoHandler}/>
                                    </div>  
                                    <div className='form-group'>
                                        <label>Quantity:</label>
                                        <input placeholder='Quantity' name='available' className='form-control'
                                        value={this.state.quantity} onChange={this.changeQuantityHandler}/>
                                    </div>  
                                    <div className='form-group'>
                                        <label>Amount:</label>
                                        <p className='form-control'>{this.state.totalamount}</p>
                                    </div>  
                                    
                                    
                                    <button className='btn btn-success' onClick={this.orderProduct} style={{marginRight:10}} >Order</button>
                                    <button className='btn btn-success' onClick={this.creditProduct}>Add to Credits</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Buydaily;
/*
componentDidMount(){
        Product.getDailyMenuProductById(this.state.id).then((res)=>{
            let student=res.data;
            this.setState({url: student.url,names: student.name,
                price: student.price, available:student.availability,
                canteenName: student.canteenname, contactno: student.contactNo,
            })
        });
    }
    
    updateProduct=(e)=>{
        e.preventDefault();
        let student={name: this.state.names, price: this.state.price, availability: this.state.available, canteenname:this.state.canteenName, url: this.state.url};
        console.log('student =>'+JSON.stringify(student));
        console.log(student);
        
        Product.updateDailyProduct(student,this.state.id).then(res=>{
            this.props.history.push('/editproduct');
        });
            
    }
     */