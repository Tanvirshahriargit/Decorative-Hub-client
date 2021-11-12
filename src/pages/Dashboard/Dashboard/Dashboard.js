import React from 'react';
import './Dasgboard.css'
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Review from '../../Home/Review/Review';
import Myorders from '../Myorders/Myorders';
import Pay from './Pay/Pay';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import useAuth from '../../../Hooks/useAuth';

const Dashboard = () => {
    const { admin } = useAuth()
    let { path, url } = useRouteMatch();
    return (
        <div>
            <div className="dashboard-container ">
                <div className="row gx-0">
                    <div className="col-md-3 ">
                        <div className="dashboard pt-2">
                            <h5><i class="fas fa-tachometer-alt me-2"></i>Dashboard</h5>
                            <Link className="linking" to={`${url}`}>
                                <li className="dashboard-menu mt-5">My Orders</li>
                            </Link>
                            <Link className="linking" to={`${url}/pay`}>
                                <li className="dashboard-menu mt-5">Payment</li>
                            </Link>
                            <Link className="linking" to={`${url}/review`}>
                                <li className="dashboard-menu mt-5">Review</li>
                            </Link>

                            {
                                admin && <div>
                                    <Link className="linking" to={`${url}/makeadmin`}>
                                        <li className="dashboard-menu mt-5">Make Admin</li>
                                    </Link>
                                    <Link className="linking" to={`${url}/addproduct`}>
                                        <li className="dashboard-menu mt-5">Add A Product</li>
                                    </Link>
                                    <Link className="linking" to={`${url}/manageorders`}>
                                        <li className="dashboard-menu mt-5">Manage All Orders</li>
                                    </Link>
                                    <Link className="linking" to={`${url}/manageproducts`}>
                                        <li className="dashboard-menu mt-5">Manage Products</li>
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route exact path={path}>
                                <Myorders></Myorders>
                            </Route>
                            <Route exact path={`${path}/pay`}>
                                <Pay></Pay>
                            </Route>
                            <Route exact path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <Route exact path={`${path}/makeadmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route exact path={`${path}/addproduct`}>
                                <AddProduct></AddProduct>
                            </Route>
                            <Route exact path={`${path}/manageproducts`}>
                                <ManageProducts></ManageProducts>
                            </Route>
                            <Route exact path={`${path}/manageorders`}>
                                <ManageAllOrders></ManageAllOrders>
                            </Route>

                        </Switch>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;