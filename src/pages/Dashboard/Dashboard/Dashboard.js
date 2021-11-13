import './Dasgboard.css'
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Myorders from '../Myorders/Myorders';
import Pay from './Pay/Pay';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import useAuth from '../../../Hooks/useAuth';
import SequreRoute from '../../Login/SequreRoute/SequreRoute';
import AddReviews from '../AddReviews/AddReviews';

const Dashboard = () => {
    const { isAdmin } = useAuth()
    let { path, url } = useRouteMatch();
    return (
        <div>
            <div className="dashboard-container ">
                <div className="row gx-0">
                    <div className="col-md-3 ">
                        <div className="dashboard pt-2">
                            <h5><i className="fas fa-tachometer-alt me-2"></i>Dashboard</h5>
                            <Link className="linking" to={`${url}`}>
                                <li className="dashboard-menu mt-5"><i className="fas fa-shopping-bag me-2"></i>My Orders</li>
                            </Link>
                            <Link className="linking" to={`${url}/pay`}>
                                <li className="dashboard-menu mt-5"><i className="fas fa-money-check-alt me-2"></i>Payment</li>
                            </Link>
                            <Link className="linking" to={`${url}/review`}>
                                <li className="dashboard-menu mt-5"><i className="fas fa-hand-peace me-2"></i>Review</li>
                            </Link>

                            {
                                isAdmin && <div>
                                    <Link className="linking" to={`${url}/makeadmin`}>
                                        <li className="dashboard-menu mt-5"><i className="fas fa-user-shield me-2"></i>Make Admin</li>
                                    </Link>
                                    <Link className="linking" to={`${url}/addproduct`}>
                                        <li className="dashboard-menu mt-5"><i className="fas fa-plus-circle me-2"></i>Add A Product</li>
                                    </Link>
                                    <Link className="linking" to={`${url}/manageorders`}>
                                        <li className="dashboard-menu mt-5"><i className="fas fa-project-diagram me-2"></i>Manage All Orders</li>
                                    </Link>
                                    <Link className="linking" to={`${url}/manageproducts`}>
                                        <li className="dashboard-menu mt-5"><i className="fas fa-border-style me-2"></i>Manage Products</li>
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
                                <AddReviews></AddReviews>
                            </Route>
                            <SequreRoute exact path={`${path}/makeadmin`}>
                                <MakeAdmin></MakeAdmin>
                            </SequreRoute>
                            <SequreRoute exact path={`${path}/addproduct`}>
                                <AddProduct></AddProduct>
                            </SequreRoute>
                            <SequreRoute exact path={`${path}/manageproducts`}>
                                <ManageProducts></ManageProducts>
                            </SequreRoute>
                            <SequreRoute exact path={`${path}/manageorders`}>
                                <ManageAllOrders></ManageAllOrders>
                            </SequreRoute>

                        </Switch>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;