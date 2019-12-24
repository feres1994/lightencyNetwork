import React, { Component } from "react";
import { getFirebase } from "../../firebase";
import { Link } from "react-router-dom";
import Loader from "../../components/loader";
import facebook from "../../graphics/facebook.png";
import NotFound from "../../graphics/p404.png";
import linkedin from "../../graphics/linkedin.png";
import twitter from "../../graphics/twitter.png";
import "./ArticlePage.scss";

const RedirectingBtn = {
  width: "150px",
  padding: "7px",
  height: "50px",
  color: "white",
  background: "black",
  border: "black"
};
export default class ArticlePage extends Component {
  state = {
    article: false,
    error: "this article is not found"
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
    const { article, error } = this.state;
    return article === false ? (
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
    ) : article === null ? (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <img src={NotFound} />

        <Link to="/blog">
          <button style={RedirectingBtn}>Redirect to blog page</button>
        </Link>
      </div>
    ) : (
      <div className="ArticlePage" style={{ minHeight: "100vh" }}>
        <div className="ArticlePageWrapper">
          <div className="Article-title">{article.title}</div>
          <div className="Article-info">
            <p>
              Posted on{" "}
              <span style={{ fontWeight: "bold", width: "150px" }}>
                {article.dateFormatted}
              </span>{" "}
              by{" "}
              <span style={{ fontWeight: "bold", width: "150px" }}>
                {article.author}
              </span>{" "}
            </p>
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
