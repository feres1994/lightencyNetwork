import React, { Component } from 'react';
import { getFirebase } from '../../firebase';
import { Link } from 'react-router-dom';
import Loader from '../../components/loader';
import facebook from '../../graphics/facebook.png';
import NotFound from '../../graphics/p404.png';
import linkedin from '../../graphics/linkedin.png';
import twitter from '../../graphics/twitter.png';
import './ArticlePage.scss';

const RedirectingBtn = {
  width: '150px',
  padding: '7px',
  height: '50px',
  color: 'white',
  background: 'black',
  border: 'black'
};

function strReplaceNewLine(myStr) {
  myStr.split('_n').map((item, i) => {
    return <p key={i}>{item}</p>;
  });
  // return myStr.replace(/(?:_n)/g, '\n');
  // return myStr.replace(/(_n)/g, '\\n');
}

export default class ArticlePage extends Component {
  state = {
    article: false,
    error: 'this article is not found'
  };
  componentDidMount() {
    getFirebase()
      .database()
      .ref('/articles')
      .child(this.props.match.params.id)
      .once('value')
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
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Loader />
      </div>
    ) : article === null ? (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img src={NotFound} />

        <Link to="/blog">
          <button style={RedirectingBtn}>back to blog page</button>
        </Link>
      </div>
    ) : (
      <div className="ArticlePage" style={{ minHeight: '100vh' }}>
        <div className="ArticlePageWrapper">
          <div className="Article-title">{article.title}</div>
          <div className="Article-info">
            <p>
              Posted on{' '}
              <span style={{ fontWeight: 'bold', width: '150px' }}>
                {article.dateFormatted}
              </span>{' '}
              by{' '}
              <span style={{ fontWeight: 'bold', width: '150px' }}>
                {article.author}
              </span>{' '}
            </p>
            <div className="social">
              {article.authorFacebook !== '' && (
                <a href={article.authorFacebook} target="_blank">
                  <img src={facebook} alt="facebook" />
                </a>
              )}

              {article.authorLinkedIn !== '' && (
                <a href={article.authorLinkedIn} target="_blank">
                  <img src={linkedin} alt="linkedin" />
                </a>
              )}

              {article.authorTwitter !== '' && (
                <a href={article.authorTwitter} target="_blank">
                  <img src={twitter} alt="twitter" />
                </a>
              )}
            </div>
          </div>
          <div className="Article-image">
            <img src={article.coverImage} alt="article" />
          </div>
          <div className="Article-text">
            {article.content.split(' _n ').map((item, i) => {
              if (item.length > 0) {
                return <p key={i}>{item}</p>;
              }
              return <br></br>;
            })}
          </div>
          <hr />
          <div className="Article-footer">
            <div className="Article-author-img">
              <img
                src={article.authorImage}
                alt="author"
                style={{ borderRadius: '50px' }}
              />
            </div>
            <div>
              <div className="Article-wb">Written by:</div>
              <div className="Article-author">{article.author}</div>
              <div className="Article-author-info">{article.authorBio}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
