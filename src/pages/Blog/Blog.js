import React from "react";
import Article from "../../components/Article/Article";
import { getFirebase } from "../../firebase";
import Loader from "../../components/loader";
import "./Blog.scss";

class Blog extends React.Component {
  state = {
    articles: false
  };
  componentDidMount() {
    getFirebase()
      .database()
      .ref("/articles")
      .once("value")
      .then(snapshot => {
        console.log(snapshot.val());
        this.setState({
          articles: Object.entries(snapshot.val())
        });
      });
    window.scrollTo(0, 0);
  }
  render() {
    const { articles } = this.state;
    return (
      <section className="Blog">
        <div className="Blog-header">
          <div className="Blog-header-title">Latest articles</div>
        </div>
        {!articles ? (
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
          <div style={{ minHeight: "100vh" }}>
            {articles.map((article, index) => {
              return (
                <Article
                  title={article[1].title}
                  author={article[1].author}
                  preview={article[1].content.slice(0, 300)}
                  image={article[1].coverImage}
                  datePretty={article[1].datePretty}
                  key={article[0]}
                  id={article[0]}
                  fb={article[1].authorFacebook}
                  ln={article[1].authorLinkedIn}
                  tw={article[1].authorTwitter}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default Blog;
