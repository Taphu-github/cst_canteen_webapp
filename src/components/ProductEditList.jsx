import React, {Component} from 'react';
import Product from '../services/Product';
import OwnHeader from './OwnHeader';

class ProductEditList extends Component{
    constructor(props) {
        super(props)
        this.state = {
            dailyproducts: [],
            groceryproducts: [],
        }
        this.addDailyProduct=this.addDailyProduct.bind(this);
        this.addGroceryProduct=this.addGroceryProduct.bind(this);
        this.editDailyProduct=this.editDailyProduct.bind(this);
        this.editGroceryProduct=this.editGroceryProduct.bind(this);
        this.deleteDailyProduct=this.deleteDailyProduct.bind(this);
        this.deleteGroceryProduct=this.deleteGroceryProduct.bind(this);
    }
    

    componentDidMount(){
        Product.getDailyMenuProduct().then((res) => {
            this.setState({dailyproducts: res.data})
        });

        Product.getGroceryProduct().then((res) => {
            this.setState({groceryproducts: res.data})
        });
    }
    editDailyProduct(id){
    
        this.props.history.push(`/update-dailyproduct/${id}`);
    }
    editGroceryProduct(id){
    
        this.props.history.push(`/update-groceryproduct/${id}`);
    }
    deleteDailyProduct(sid){
        Product.deleteDailyProduct(sid).then( res=>{
            this.setState({dailyproducts: this.state.dailyproducts.filter(product=> product.id !==sid)});
        });
    }
    deleteGroceryProduct(sid){
        Product.deleteGroceryProduct(sid).then( res=>{
            this.setState({groceryproducts: this.state.groceryproducts.filter(product=> product.id !==sid)});
        });
    }

    addDailyProduct(){
        this.props.history.push('/add-dailyproduct');
    }
    addGroceryProduct(){
        this.props.history.push('/add-groceryproduct');
    }

    render(){
        return(
            <div> 
                <OwnHeader/>  
                
                <h2>Daily Menu</h2>
                <div className="row">
                    <div >
                        <button type="button" className='btn btn-success' style={{marginBottom:10}} onClick={this.addDailyProduct}>Add to Daily Menu</button>
                    </div>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Product Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Availability</th>
                                <th>CanteenName</th>
                                <th>Edit Action</th>
                                <th>Delete Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.dailyproducts.map(
                                    student =>
                                    <tr key={student.id}>
                                        <td><img src={student.url} style={{width:100, height:100}}/></td>
                                        <td>{student.name}</td>
                                        <td>{student.price}</td>
                                        <td>{student.availability}</td>
                                        <td>{student.canteenname}</td>
                                        <td>
                                            <button onClick={()=> this.editDailyProduct(student.id)} className='btn btn-info'>
                                                Update</button>
                                        </td>
                                        <td>
                                            <button onClick={()=> this.deleteDailyProduct(student.id)} className='btn btn-danger'>
                                                Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                   
                </div>
                <div className="row">
                    <h2>Grocery Product</h2>
                    <div >
                        <button type="button" className='btn btn-success' onClick={this.addGroceryProduct}>Add to Grocery</button>
                    </div>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Product Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Availability</th>
                                <th>CanteenName</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.groceryproducts.map(
                                    student =>
                                    <tr key={student.id}>
                                        <td><img src={student.url} style={{width:100, height:100}}/></td>
                                        <td>{student.name}</td>
                                        <td>{student.price}</td>
                                        <td>{student.availability}</td>
                                        <td>{student.canteenname}</td>
                                        <td>
                                            <button onClick={()=> this.editGroceryProduct(student.id)} className='btn btn-info'>
                                                Update</button>
                                        </td>
                                        <td>
                                            <button onClick={()=> this.deleteGroceryProduct(student.id)} className='btn btn-danger'>
                                                Delete</button>
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

export default ProductEditList