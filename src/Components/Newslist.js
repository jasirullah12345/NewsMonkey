import React, {Component} from 'react';
import Newsitem from "./Newsitem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';

class Newslist extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    }

    async fetchArticle() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`
        this.setState({loading: true});
        this.props.setProgress(10);
        let data = await fetch(url);
        this.props.setProgress(50);
        let parsedData = await data.json();
        this.props.setProgress(80);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalArticles: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress(100);
    }

    componentDidMount() {
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
                        <InfiniteScroll
                            dataLength={this.state.articles.length}
                            next={this.nextClick}
                            hasMore={this.state.articles.length !== this.state.totalArticles}
                            loader={<Loading/>}
                        >
                            {this.state.articles.map((item) => {
                                return <Newsitem key={item.url} title={item.title} desc={item.description}
                                                 imgUrl={item.urlToImage} url={item.url} author={item.author}
                                                 date={item.publishedAt} source={item.source}/>;
                            })}
                        </InfiniteScroll>
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