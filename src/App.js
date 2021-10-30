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
                        <Newslist key="" pageSize={5} category="general" country="in"/>
                    </Route>
                    <Route exact path="/business">
                        <Newslist key="business" pageSize={5} category="business" country="in"/>
                    </Route>
                    <Route exact path="/entertainment">
                        <Newslist key="entertainment" pageSize={5} category="entertainment" country="in"/>
                    </Route>
                    <Route exact path="/general">
                        <Newslist key="general" pageSize={5} category="general" country="in"/>
                    </Route>
                    <Route exact path="/health">
                        <Newslist key="health" pageSize={5} category="health" country="in"/>
                    </Route>
                    <Route exact path="/science">
                        <Newslist key="science" pageSize={5} category="science" country="in"/>
                    </Route>
                    <Route exact path="/sports">
                        <Newslist key="sports" pageSize={5} category="sports" country="in"/>
                    </Route>
                    <Route exact path="/technology">
                        <Newslist key="technology" pageSize={5} category="technology" country="in"/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
