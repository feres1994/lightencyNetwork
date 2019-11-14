import React from "react";
import partner_1 from "../../graphics/P.png";
import partner_2 from "../../graphics/P1.png";
import partner_3 from "../../graphics/P2.png";
import partner_4 from "../../graphics/p4.png";
import partner_6 from "../../graphics/p6.png";
import partner_7 from "../../graphics/P7.png";
import partner_8 from "../../graphics/p9.png";
import partner_9 from "../../graphics/p10.png";
import partner_10 from "../../graphics/p12.png";
import partner_11 from "../../graphics/p13.png";
import partner_12 from "../../graphics/p14.png";
import partner_13 from "../../graphics/p15.png";
import partner_14 from "../../graphics/p16.png";

import "./Partners.scss";

const partnerTab = [
  partner_1,
  partner_2,
  partner_3,
  partner_4,
  partner_6,
  partner_7,
  partner_8,
  partner_9,
  partner_10,
  partner_11,
  partner_12,
  partner_13,
  partner_14
];

class Partners extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div className="Partners">
          <section className="Partners-box">
            {partnerTab.map((el, i) =>
              i < 6 ? (
                <img src={el} alt="partner" />
              ) : (
                <img src={el} alt="partner" className="new_part" />
              )
            )}
          </section>
        </div>
      </div>
    );
  }
}

export default Partners;
