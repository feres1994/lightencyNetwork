import React from "react";
import partner_1 from "../../graphics/P.png";
import partner_2 from "../../graphics/P1.png";
import partner_3 from "../../graphics/P2.png";
import partner_5 from "../../graphics/p4.png";
import partner_6 from "../../graphics/P5.png";
import partner_7 from "../../graphics/p6.png";
import partner_8 from "../../graphics/P7.png";
import partner_9 from "../../graphics/p9.png";
import partner_10 from "../../graphics/p10.png";
import partner_12 from "../../graphics/p12.png";
import partner_13 from "../../graphics/p13.png";
import partner_14 from "../../graphics/p14.png";
import partner_15 from "../../graphics/p15.png";
import partner_16 from "../../graphics/p16.png";

import "./Partners.scss";

class Partners extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div className="Partners">
          <section className="Partners-box">
            <img src={partner_1} alt="partner" />
            <img src={partner_2} alt="partner" />
            <img src={partner_3} alt="partner" />
            <img src={partner_5} alt="partner" />
            <img src={partner_6} alt="partner" />
            <img src={partner_7} alt="partner" />
            <img src={partner_8} alt="partner" />
            <img src={partner_9} alt="partner" className="new_part" />
            <img src={partner_10} alt="partner" className="new_part" />
            <img src={partner_12} alt="partner" className="new_part" />
            <img src={partner_13} alt="partner" className="new_part" />
            <img src={partner_14} alt="partner" className="new_part" />
            <img src={partner_15} alt="partner" className="new_part" />
            <img src={partner_16} alt="partner" className="new_part" />
          </section>
        </div>
      </div>
    );
  }
}

export default Partners;
