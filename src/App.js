import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import Cars from "./componenets/cars/Cars";
import './App.css'
import CreateCar from "./componenets/createCar/CreateCar";
import UpdateCar from "./componenets/updateCar/UpdateCar";

export default function App() {
    return (

        <Router>
            <div>
                <div className={'link'}>
                    <Link to={'/cars'}>Cars</Link>
                    <Link to={'/create-car'}>Create car</Link>
                    <Link to={'/update-car'}>update car</Link>
                </div>
                <div>
                    <Route path={'/cars'} render={() => <Cars/>}/>
                    <Route path={'/create-car'} render={() => <CreateCar/>}/>
                    <Route path={'/update-car'} render={() => <UpdateCar/>}/>
                </div>
            </div>
        </Router>

    );
}
