import React, {useState} from 'react';
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Newslist from "./Components/Newslist";
import LoadingBar from 'react-top-loading-bar'
import './App.css';

function App() {
    const pageSize =5;
    const apiKey = process.env.REACT_APP_API_KEY;
    const [progress, setProgress] = useState(0);
    return (
        <>
            <Router>
                <LoadingBar color="#f11946" height={3} progress={progress} onLoaderFinished={() => setProgress(0)} />
                <Navbar title="NewsMonkey"/>
                <Switch>
                    <Route exact path="/">
                        <Newslist setProgress={setProgress}  apiKey={apiKey}  key="default" pageSize={pageSize} category="general" country="in"/>
                    </Route>
                    <Route exact path="/business">
                        <Newslist setProgress={setProgress}  apiKey={apiKey}  key="business" pageSize={pageSize} category="business" country="in"/>
                    </Route>
                    <Route exact path="/entertainment">
                        <Newslist setProgress={setProgress}  apiKey={apiKey}  key="entertainment" pageSize={pageSize} category="entertainment" country="in"/>
                    </Route>
                    <Route exact path="/general">
                        <Newslist setProgress={setProgress}  apiKey={apiKey}  key="general" pageSize={pageSize} category="general" country="in"/>
                    </Route>
                    <Route exact path="/health">
                        <Newslist setProgress={setProgress}  apiKey={apiKey}  key="health" pageSize={pageSize} category="health" country="in"/>
                    </Route>
                    <Route exact path="/science">
                        <Newslist setProgress={setProgress}  apiKey={apiKey}  key="science" pageSize={pageSize} category="science" country="in"/>
                    </Route>
                    <Route exact path="/sports">
                        <Newslist setProgress={setProgress}  apiKey={apiKey}  key="sports" pageSize={pageSize} category="sports" country="in"/>
                    </Route>
                    <Route exact path="/technology">
                        <Newslist setProgress={setProgress}  apiKey={apiKey}  key="technology" pageSize={pageSize} category="technology" country="in"/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
