import React from 'react';
import './lightencyInMedia.scss';

const media = [
  {
    image:
      'data:image/png;base64,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',
    link:
      'https://en.decentral.news/electrify-network-decentralized-electrification-and-beyond/',
    width: '390px'
  },
  {
    image: 'https://miro.medium.com/max/3052/1*0TTkooEmqpkWXWyP0m40eA.png',
    link:
      'https://www.theblockbox.io/the-use-of-blockchain-in-the-energy-industry/ ',
    width: '230px'
  }
];
export default function index() {
  return (
    <div style={{ background: '#fff' }}>
      <div className="lightency-in-media-container">
        <p className="lightency-in-media-title">Lightency In The Media</p>
        <div className="lightency-in-media">
          {media.map(el => (
            <a href={el.link} target="_blank">
              <img src={el.image} style={{ width: el.width }} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
