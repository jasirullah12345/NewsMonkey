import './App.css';
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Navbar title="NewsMonkey"/>
                <Switch>
                    <Route exact path="/">
                        <h3>This is home page.</h3>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
