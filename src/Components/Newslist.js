import React, {Component} from 'react';
import Newsitem from "./Newsitem";

class Newslist extends Component {
    render() {
        let url = "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/06/breaking-news-1621477618-1624842003.jpg";
        return (
            <div>
                <div className="container">
                    <h2 className="my-3 mb-4 text-center">Today's News</h2>
                    <div className="row m-0 align-items-center justify-content-center d-flex">
                        <Newsitem title="Title" desc="lorem20" imgUrl={url}/>
                        <Newsitem title="Title" desc="lorem20" imgUrl={url}/>
                        <Newsitem title="Title" desc="lorem20" imgUrl={url}/>
                        <Newsitem title="Title" desc="lorem20" imgUrl={url}/>
                        <Newsitem title="Title" desc="lorem20" imgUrl={url}/>
                        <Newsitem title="Title" desc="lorem20" imgUrl={url}/>
                        <Newsitem title="Title" desc="lorem20" imgUrl={url}/>
                        <Newsitem title="Title" desc="lorem20" imgUrl={url}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newslist;