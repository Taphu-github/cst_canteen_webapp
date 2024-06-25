import React, {Component} from 'react';
import OrderandCredit from '../services/OrderandCredit';
import OwnHeader from './OwnHeader';

class OrderList extends Component{
    constructor(props) {
        super(props)
        this.state = {
            Orders:[],
            
        }
       
        this.editOrder=this.editOrder.bind(this);
        this.deleteOrder=this.deleteOrder.bind(this);
    }
    

    componentDidMount(){
        OrderandCredit.getOrder().then((res) => {
            this.setState({Orders: res.data})
        });
    }
    editOrder(sid){
        let canteenname='';
        let emailid='';
        let names='';
        let products='';
        let quantity='';
        let states=' ';
        let totalamount=' ';
        let date=' ';
        
       /* OrderandOrder.getOrderById(id).then((res)=>{
            this.setState({Ordersolo: res.data})

        });*/
        //console.log(this.state.Orders);
        let res = this.state.Orders.find((item) => {
            return item.id == sid;
        });
        //console.log(res);
       let productsolo={id: sid, name: res['name'], canteenname: res['canteenname'], emailid:res['emailid'], 
            products: res['products'], quantity:res['quantity'], 
            totalamount:res['totalamount'],credit:res['credit'] ,state: 'Accept', date: res['date'] };
        let arr2=this.state.Orders;
            /*
        console.log('student =>'+JSON.stringify(productsolo));

        ;
        */
       let index=arr2.findIndex(object => {return object.id==sid;});
       console.log(index);
       arr2.splice(index,1,productsolo);
       console.log(arr2);
       OrderandCredit.updateOrder(productsolo,sid).then(res=>{
        this.setState({Orders:arr2});
    })
    }

    
    deleteOrder(sid){
        
        this.setState({Orders: this.state.Orders.filter(product=> product.id !==sid)});
            
    }

    
    render(){
        return(
            <div> 
                <OwnHeader/>  
                
                <h2>Orders</h2>
                <div className="row">
                    
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Products</th>
                                <th>Quantity</th>
                                <th>Total Amount</th>
                                <th>Date</th>
                                <th>State</th>
                                <th>Credit</th>
                                <th>ACCEPT ORDER</th>
                                <th>DELETE OPTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Orders.map(
                                    student =>
                                    <tr key={student.id}>
                                        <td>{student.name}</td>
                                        <td>{student.emailid}</td>
                                        <td>{student.products}</td>
                                        <td>{student.quantity}</td>
                                        <td>{student.totalamount}</td>
                                        <td>{student.date}</td>
                                        <td>{student.credit}</td>
                                        <td>{student.state}</td>
                                        <td>
                                            <button onClick={()=> this.editOrder(student.id)} className='btn btn-info'>
                                                ACCEPT ORDER</button>
                                        </td>
                                        <td>
                                            <button onClick={()=> this.deleteOrder(student.id)} className='btn btn-info'>
                                                DELETE</button>
                                        </td>
                                        
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                   
                </div>
                
                
                
            </div>

            
        );
    }
}

export default OrderList
/**
 * this.setState({Ordersjm: this.state.Orders.filter(product=> product.canteenname !=='GNH')});
            this.setState({Ordersgnh: this.state.Orders.filter(product=> product.canteenname !=='JM')});
 */