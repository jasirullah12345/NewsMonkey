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

    async fetchArticle() {
        const url = `https://newsapi.org/v2/top-headlines?
                    country=${this.props.country}&apiKey=${this.props.apiKey}
                    &page=${this.state.page}&pageSize=${this.props.pageSize}
                    &category=${this.props.category}`
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults,
            loading: false
        });
    }

    async componentDidMount() {
        this.fetchArticle();
    }

    prevClick = () => {
        this.setState({page: this.state.page - 1});
        this.fetchArticle();
    }
    nextClick = () => {
        if (this.state.page + 1 <= Math.ceil(this.state.totalArticles / this.props.pageSize)) {
            this.setState({page: this.state.page + 1});
            this.fetchArticle();
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h2 className="mb-2 text-center" style={{marginTop: "90px"}}>Today's News</h2>
                    <div className="row m-0 p-0 gy-5 justify-content-center">
                        {this.state.loading && <Loading/>}
                        {!this.state.loading && this.state.articles.map((item) => {
                            return <Newsitem key={item.url} title={item.title} desc={item.description}
                                             imgUrl={item.urlToImage} url={item.url} author={item.author}
                                             date={item.publishedAt} source={item.source}/>;
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