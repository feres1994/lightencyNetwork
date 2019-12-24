import React from "react";
import facebook from "../../graphics/facebook.png";
import twitter from "../../graphics/twitter.png";
import linkedin from "../../graphics/linkedin.png";
import { Link, withRouter } from "react-router-dom";

import "./Article.scss";

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
  console.log(title.replace(/[^\w\s]/gi, ""));
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
            <img src={twitter} alt="twitter" />
          </div>
        </div>
        <div className="Article-img">
          <a href={tw} target="_blank">
            <img src={image} alt="article-img" />
          </a>
        </div>
        <div className="Article-preview">{preview}</div>
        <Link to={`/blog/${id}`}>
          <div className="Article-button">Read More</div>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Article);
