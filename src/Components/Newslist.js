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
            loading: true,
            page: 1
        };
    }

    async fetchNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`
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
        this.fetchNews();
    }

    fetchMoreNews = () => {
        this.setState({page: this.state.page + 1});
        this.fetchNews();
    }

    render() {
        return (
            <div>
                <div className="container mb-5">
                    <h2 className="mb-2 text-center" style={{marginTop: "90px"}}>Today's News</h2>
                    {this.state.loading && <Loading/>}
                    {!this.state.loading && <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreNews}
                        hasMore={this.state.articles.length !== this.state.totalArticles}
                        loader={<Loading/>}
                    >
                        <div className="row m-0 p-0 gy-5 justify-content-center">
                            {this.state.articles.map((item) => {
                                return <Newsitem key={item.url} title={item.title} desc={item.description}
                                                 imgUrl={item.urlToImage} url={item.url} author={item.author}
                                                 date={item.publishedAt} source={item.source}/>;
                            })}
                        </div>
                    </InfiniteScroll>}
                </div>
            </div>
        );
    }
}

export default Newslist;