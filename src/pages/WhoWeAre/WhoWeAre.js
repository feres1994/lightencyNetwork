import React from 'react';

// Components
import WWAItem from '../../components/WWAItem/WWAItem';

// Data
import { users } from '../../data/users.data';
import LightWomenSvg from '../../svgComponent/lightWomen';

// Styles
import './WhoWeAre.scss';

class WhoWeAre extends React.Component {
  state = { isVisible: false };

  handleScroll = () => {
    window.scrollY > 50 && this.setState({ isVisible: true });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  render() {
    const { isVisible } = this.state;
    const mainStyles = {
      transform: isVisible && 'translateY(0px)',
      opacity: isVisible && '1'
    };
    return (
      <div className="WhoWeAre">
        <div className="WWA-header">Who we are</div>
        <section className="WWA-intro">
          <div className="WWA-intro-first-container">
            <p>
              <span className="text-gold">Lightency</span> is a gathering of
              experts in deep technologies who strongly believe that in this
              digital revolution everyone has the right to consume energy
              without any difficulty and that renewable energy is the solution
              for climate change.
            </p>
            <p>
              Our alliance aims to put new technologies at the service of a
              green transition coupled with a strong economic and social impact.
            </p>
          </div>
          <LightWomenSvg />
        </section>

        <div className="WWA-WE" style={mainStyles}>
          <div className="WWA-team group">
            <div className="WWA-title">TEAM</div>
            <div className="WWA-team-founders">
              {users
                .filter(user => user.tag === 'founder')
                .map(({ id, link, name, position, image }) => (
                  <WWAItem
                    key={id}
                    link={link}
                    title={name}
                    subtitle={position}
                    image={image}
                  />
                ))}
            </div>
            <div className="WWA-vps">
              {users
                .filter(user => user.tag === 'vp')
                .map(({ id, link, name, position, image }) => (
                  <WWAItem
                    key={id}
                    link={link}
                    title={name}
                    subtitle={position}
                    image={image}
                  />
                ))}
            </div>
            <div className="WWA-tech">
              {users
                .filter(user => user.tag === 'tech')
                .map(({ id, link, name, position, image }) => (
                  <WWAItem
                    key={id}
                    link={link}
                    title={name}
                    subtitle={position}
                    image={image}
                  />
                ))}
            </div>

            <div className="WWA-ambassadors group">
              {users
                .filter(user => user.tag === 'business')
                .map(({ id, link, name, position, image }) => (
                  <WWAItem
                    key={id}
                    link={link}
                    title={name}
                    subtitle={position}
                    image={image}
                  />
                ))}
            </div>
          </div>
          <div className="WWA-title">Advisors</div>
          <div className="WWA-advisors group">
            {users
              .filter(user => user.tag === 'advisor')
              .map(({ id, link, name, position, image }) => (
                <WWAItem
                  key={id}
                  link={link}
                  title={name}
                  subtitle={position}
                  image={image}
                />
              ))}
          </div>
          <div className="WWA-title">mentors</div>
          <div className="WWA-advisors group">
            {users
              .filter(user => user.tag === 'mentor')
              .map(({ id, link, name, position, image }) => (
                <WWAItem
                  key={id}
                  link={link}
                  title={name}
                  subtitle={position}
                  image={image}
                />
              ))}
          </div>
          <div className="WWA-title">Ambassadors</div>
          <div className="WWA-ambassadors group">
            {users
              .filter(user => user.tag === 'ambassador')
              .map(({ id, link, name, position, image }) => (
                <WWAItem
                  key={id}
                  link={link}
                  title={name}
                  subtitle={position}
                  image={image}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default WhoWeAre;
