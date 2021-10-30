import React, {Component} from 'react';
import Newsitem from "./Newsitem";
import Loading from "./Loading";

class Newslist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=27bbbcc320764f08a2550b902da29a02&pageSize=${this.props.pageSize}&category=${this.props.category}`
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults,
            loading: false
        });
    }

    prevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=27bbbcc320764f08a2550b902da29a02&page=${this.state.page - 1}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        });
    }
    nextClick = async () => {
        if (this.state.page + 1 <= Math.ceil(this.state.totalArticles / this.props.pageSize)) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=27bbbcc320764f08a2550b902da29a02&page=${this.state.page + 1}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1,
                loading: false
            });
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h2 className="my-3 mb-4 text-center">Today's News</h2>
                    <div className="row m-0 p-0 justify-content-center">
                        {this.state.loading && <Loading/>}
                        {!this.state.loading && this.state.articles.map((item) => {
                            return <Newsitem key={item.url} title={item.title} desc={item.description}
                                             imgUrl={item.urlToImage} url={item.url}/>;
                        })}
                    </div>
                    <div className="d-flex justify-content-between my-3 px-4">
                        <button className="btn btn-dark" disabled={this.state.page <= 1}
                                onClick={this.prevClick}>&larr;  Previous
                        </button>
                        <button className="btn btn-dark"
                                disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)}
                                onClick={this.nextClick}>Next  &rarr;</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newslist;