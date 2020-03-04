import React from 'react';
import './lightencyInMedia.scss';

const media = [
  {
    image:
      'https://en.decentral.news/wp-content/uploads/2018/04/30184777_1767732933266391_946186034_n.png',
    link: ''
  },
  {
    image: 'https://miro.medium.com/max/3052/1*0TTkooEmqpkWXWyP0m40eA.png'
  }
];
export default function index() {
  return (
    <div style={{ background: '#fff' }}>
      <div className="lightency-in-media-container">
        <p className="lightency-in-media-title">lightency in the Media</p>
        <div className="lightency-in-media">
          {media.map(el => (
            <img src={el.image} style={{ width: '200px' }} />
          ))}
        </div>
      </div>
    </div>
  );
}
