import React from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';
import ProductList from './components/ProductList';
// import PrivateRoute from './PrivateRoute';
import './index.css';



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
//     <Router>
//      <main>
//        <Route exact path="/">
//            <ProductList />
//          </Route>
//          <Route path="/productlist">
//          <ProductList/>
//        </Route>
//        <Route path="/employeelist">
//          <EmployeeList/>
//        </Route>
//      </main>
//  </Router>
    <div className="container">
      {/* <EmployeeList /> */}
      <ProductList />
    </div>
  );
}

export default App;
