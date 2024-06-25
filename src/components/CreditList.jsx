import React, {Component} from 'react';
import OrderandCredit from '../services/OrderandCredit';
import Product from '../services/Product';
import OwnHeader from './OwnHeader';

class CreditList extends Component{
    constructor(props) {
        super(props)
        this.state = {
            credits:[],
            
        }
       
        this.editCredit=this.editCredit.bind(this);
        this.deleteCredit=this.deleteCredit.bind(this);
    }
    

    componentDidMount(){
        OrderandCredit.getCredit().then((res) => {
            this.setState({credits: res.data})
        });
    }
    editCredit(sid){
        let canteenname='';
        let emailid='';
        let names='';
        let products='';
        let quantity='';
        let states=' ';
        let totalamount=' ';
        let date=' ';
        
       /* OrderandCredit.getCreditById(id).then((res)=>{
            this.setState({creditsolo: res.data})

        });*/
        //console.log(this.state.credits);
        let res = this.state.credits.find((item) => {
            return item.id == sid;
        });
        //console.log(res);
       let productsolo={id: sid, name: res['name'], canteenname: res['canteenname'], emailid:res['emailid'], 
            products: res['products'], quantity:res['quantity'], 
            totalamount:res['totalamount'], state: 'PAIDSS', date: res['date'] };
        let arr2=this.state.credits;
            /*
        console.log('student =>'+JSON.stringify(productsolo));

        ;
        */
       let index=arr2.findIndex(object => {return object.id==sid;});
       console.log(index);
       arr2.splice(index,1,productsolo);
       console.log(arr2);
       OrderandCredit.updateCredit(productsolo,sid).then(res=>{
        this.setState({credits:arr2});
    })
    }

    
    deleteCredit(sid){
        
        this.setState({credits: this.state.credits.filter(product=> product.id !==sid)});
            
    }

    
    render(){
        return(
            <div> 
                <OwnHeader/>  
                
                <h2>Credits</h2>
                <div className="row">
                    
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Products</th>
                                <th>Total Amount</th>
                                <th>Date</th>
                                <th>State</th>
                                <th>PAID</th>
                                <th>DELETE OPTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.credits.map(
                                    student =>
                                    <tr key={student.id}>
                                        <td>{student.name}</td>
                                        <td>{student.emailid}</td>
                                        <td>{student.products}</td>
                                        <td>{student.totalamount}</td>
                                        <td>{student.date}</td>
                                        <td>{student.state}</td>
                                        <td>
                                            <button onClick={()=> this.editCredit(student.id)} className='btn btn-info'>
                                                PAID</button>
                                        </td>
                                        <td>
                                            <button onClick={()=> this.deleteCredit(student.id)} className='btn btn-info'>
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

export default CreditList
/**
 * this.setState({creditsjm: this.state.credits.filter(product=> product.canteenname !=='GNH')});
            this.setState({creditsgnh: this.state.credits.filter(product=> product.canteenname !=='JM')});
 */