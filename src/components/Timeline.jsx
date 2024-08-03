import React from 'react';
import 'aos/dist/aos.css';
import './timeline.css'; // Make sure to adjust the path based on your project structure
import AOS from 'aos';

const Timeline = () => {
  // Initialize AOS in useEffect
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (

    <div>
      <h1 className="timeline-text" >TIMELINE</h1>
     

    <div className="timeline"  >
      

      <div className="container left-container" data-aos="fade-in">
        <div className="text-box">
          <h2>DATE</h2>
          <span style={{fontWeight: 600}}>TITLE</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <span className="left-container-arrow"></span>
        </div>
      </div>

      <div className="container right-container" data-aos="fade-in">
      <div className="text-box">
          <h2>DATE</h2>
          <span style={{fontWeight: 600}}>TITLE</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <span className="right-container-arrow"></span>
        </div>
      </div>

      <div className="container left-container" data-aos="fade-in">
      <div className="text-box">
          <h2>DATE</h2>
          <span style={{fontWeight: 600}}>TITLE</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <span className="left-container-arrow"></span>
        </div>
      </div>

      <div className="container right-container" data-aos="fade-in">
      <div className="text-box">
          <h2>DATE</h2>
          <span style={{fontWeight: 600}}>TITLE </span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <span className="right-container-arrow"></span>
        </div>
      </div>

      <div className="container left-container" data-aos="fade-in">
      <div className="text-box">
          <h2>DATE</h2>
          <span style={{fontWeight: 600}}>TITLE</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <span className="left-container-arrow"></span>
        </div>
      </div>

      <div className="container right-container" data-aos="fade-in">
      <div className="text-box">
          <h2>DATE</h2>
          <span style={{fontWeight: 600}}>TITLE</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <span className="right-container-arrow"></span>
        </div>
      </div>

        



    </div>
    </div>
  );
};

export default Timeline;