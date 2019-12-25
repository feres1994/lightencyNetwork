import React from 'react';
import facebook from '../../graphics/facebook.png';
import twitter from '../../graphics/twitter.png';
import linkedin from '../../graphics/linkedin.png';
import { Link, withRouter } from 'react-router-dom';

import './Article.scss';

const Article = ({
  title,
  author,
  image,
  preview,
  id,
  history,
  tw,

  fb,
  ln,
  datePretty
}) => {
  console.log(title.replace(/[^\w\s]/gi, ''));
  return (
    <div className="Article">
      <div className="Article-item">
        <div className="Article-title">{title}</div>
        <div className="Article-details">
          <p>
            {datePretty} <span className="text-red">{author}</span>
          </p>
          <div className="social">
            <a href={fb} target="_blank">
              <img src={facebook} alt="facebook" />
            </a>
            <a href={ln} target="_blank">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href={tw} target="_blank">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
        </div>
        <div className="Article-img">
          <img src={image} alt="article-img" />
        </div>
        <div className="Article-preview">
          {preview.split(' _n ').map((item, i) => {
            if (item.length > 0) {
              return <p key={i}>{item}</p>;
            }
            return <br></br>;
          })}
        </div>
        <Link to={`/blog/${id}`}>
          <div className="Article-button">Read More</div>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Article);
