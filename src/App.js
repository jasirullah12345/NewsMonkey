import './App.css';
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Newslist from "./Components/Newslist";

function App() {
    const pageSize =5;
    const apiKey = process.env.REACT_APP_API_KEY;
    return (
        <>
            <Router>
                <Navbar title="NewsMonkey"/>
                <Switch>
                    <Route exact path="/">
                        <Newslist apiKey={apiKey}  key="default" pageSize={pageSize} category="general" country="in"/>
                    </Route>
                    <Route exact path="/business">
                        <Newslist apiKey={apiKey}  key="business" pageSize={pageSize} category="business" country="in"/>
                    </Route>
                    <Route exact path="/entertainment">
                        <Newslist apiKey={apiKey}  key="entertainment" pageSize={pageSize} category="entertainment" country="in"/>
                    </Route>
                    <Route exact path="/general">
                        <Newslist apiKey={apiKey}  key="general" pageSize={pageSize} category="general" country="in"/>
                    </Route>
                    <Route exact path="/health">
                        <Newslist apiKey={apiKey}  key="health" pageSize={pageSize} category="health" country="in"/>
                    </Route>
                    <Route exact path="/science">
                        <Newslist apiKey={apiKey}  key="science" pageSize={pageSize} category="science" country="in"/>
                    </Route>
                    <Route exact path="/sports">
                        <Newslist apiKey={apiKey}  key="sports" pageSize={pageSize} category="sports" country="in"/>
                    </Route>
                    <Route exact path="/technology">
                        <Newslist apiKey={apiKey}  key="technology" pageSize={pageSize} category="technology" country="in"/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
