import React, { Component } from "react";
import { getFirebase } from "../../firebase";
import Loader from "../../components/loader";
import facebook from "../../graphics/facebook.png";
import linkedin from "../../graphics/linkedin.png";
import twitter from "../../graphics/twitter.png";
import "./ArticlePage.scss";

export default class ArticlePage extends Component {
  state = {
    article: false
  };
  componentDidMount() {
    getFirebase()
      .database()
      .ref("/articles")
      .child(this.props.match.params.id)
      .once("value")
      .then(snapshot => {
        this.setState({
          article: snapshot.val()
        });
      });
    window.scrollTo(0, 0);
  }

  render() {
    const { article } = this.state;
    return !article ? (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Loader />
      </div>
    ) : (
      <div className="ArticlePage" style={{ minHeight: "100vh" }}>
        <div className="ArticlePageWrapper">
          <div className="Article-title">{article.title}</div>
          <div className="Article-info">
            Posted on {article.dateFormatted} by {article.author}{" "}
            <div className="social">
              <a href={article.fb} target="_blank">
                <img src={facebook} alt="facebook" />
              </a>
              <a href={article.ln} target="_blank">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href={article.tw} target="_blank">
                <img src={twitter} alt="twitter" />
              </a>
            </div>
          </div>
          <div className="Article-image">
            <img src={article.coverImage} alt="article" />
          </div>
          <div className="Article-text">{article.content}</div>
          <hr />
          <div className="Article-footer">
            <div className="Article-author-img">
              <img alt="author" />
            </div>
            <div>
              <div className="Article-wb">Written by:</div>
              <div className="Article-author">{article.author}</div>
              <div className="Article-author-info">{}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
