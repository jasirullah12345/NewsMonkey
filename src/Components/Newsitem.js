import React, {Component} from 'react';

class Newsitem extends Component {
    render() {
        let {title, desc, imgUrl} = this.props;
        return (
            <div className="col-3 my-2">
                <div className="card" style={{width: "18rem"}}>
                    <img
                        src={imgUrl}
                        className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <a href="/#" className="btn btn-dark btn-sm">Explore it</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newsitem;