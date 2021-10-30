import React, {Component} from 'react';

class Newsitem extends Component {
    render() {
        let {title, desc, imgUrl, url} = this.props;
        return (
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 my-2 d-flex justify-content-center">
                <div className="card" style={{width: "18rem"}}>
                    <img
                        src={imgUrl ? imgUrl : "https://www.vskills.in/certification/blog/wp-content/uploads/2015/01/structure-of-a-news-report.jpg"}
                        className="card-img-top" alt="Display Images" style={{height: "150px"}}/>
                    <div className="card-body text-center">
                        <h5 className="card-title">{title ? title.slice(0, 66) : ""}</h5>
                        <p className="card-text">{desc ? desc.slice(0, 100) : ""}</p>
                        <a href={url} className="btn btn-dark btn-sm">Explore it</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newsitem;