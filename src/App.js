import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import CustomerList from './components/CustomerList';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddStudent from './components/AddStudent';
import UpdateStudent from './components/UpdateStudent';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import { UserContext } from './UserContext';
import Buy from './components/Buydaily';
import AddProduct from './components/AddDailyProducts';
import ProductEditList from './components/ProductEditList';
import AddDailyProducts from './components/AddDailyProducts';
import AddGroceryProducts from './components/AddGroceryProducts';
import UpdateDaily from './components/UpdateDaily';
import UpdateGrocery from './components/UpdateGrocery';
import Feedback from './components/Feedback';
import Buydaily from './components/Buydaily';
import Buygrocery from './components/Buygrocery';
import CreditList from './components/CreditList';
import OrderList from './components/OrderList';
import Addfeedback from './components/Addfeedback';
import Homes from './components/Homes';
import Feedbacks from './components/Feedbacks';
import Aboutus from './components/AboutUs';

function App() {
 
  
  return (
        
          <Router>
            <HeaderComponent/>
            <div className="container">
                <Switch> localhost:3000/
                  <Route path= "/homes" component={ Homes }></Route>
                  <Route path= "/home" component={ Home  }></Route>
                  <Route path= "/aboutus" component={ Aboutus }></Route>
                  <Route path= "/" exact component={ Home  }></Route>
                  <Route path= "/students" component={ CustomerList  }></Route>
                  <Route path= "/add-student"  component={ AddStudent  }></Route>
                  <Route path= "/update-student/:id"  component={ UpdateStudent  }></Route>
                  <Route path= "/register"  component={ Register  }></Route>
                  <Route path= "/login"  component={ Login  }></Route>
                  <Route path= "/creditlist"  component={ CreditList  }></Route>
                  <Route path= "/orderlist"  component={ OrderList  }></Route>
                  <Route path= "/feedback"  component={ Feedback  }></Route>
                  <Route path= "/feedbacks"  component={ Feedbacks  }></Route>
                  <Route path="/buydaily/:id" component={Buydaily}></Route>
                  <Route path="/buygrocery/:id" component={Buygrocery}></Route>
                  <Route path="/add-dailyproduct" component={AddDailyProducts}></Route>
                  <Route path="/add-groceryproduct" component={AddGroceryProducts}></Route>
                  <Route path="/update-dailyproduct/:id" component={UpdateDaily}></Route>
                  <Route path="/update-groceryproduct/:id" component={UpdateGrocery}></Route>
                  <Route path="/addfeed" component={Addfeedback}></Route>
                  
                  <Route path="/editproduct" component={ProductEditList}></Route>
                  
                </Switch>
            </div>
          </Router> 
        
  );
}

export default App;
