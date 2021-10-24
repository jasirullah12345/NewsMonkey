import './App.css';
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Newslist from "./Components/Newslist";

function App() {
    return (
        <>
            <Router>
                <Navbar title="NewsMonkey"/>
                <Switch>
                    <Route exact path="/">
                        <Newslist/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
