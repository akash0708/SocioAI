import React from "react";
import "aos/dist/aos.css";
import "./timeline.css"; // Make sure to adjust the path based on your project structure
import AOS from "aos";

const Timeline = () => {
  // Initialize AOS in useEffect
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="py-16 ">
      <div className="max-w-[1240px]  xl:px-2vw px-5vw mx-auto ">
        <h1
          className="text-6xl timeline-text"
          style={{ fontFamily: "Gothic A1" }}
        >
          TIMELINE
        </h1>

        <div className="timeline">
          <div className="container left-container px-8" data-aos="fade-in">
            <div className="text-box">
              <h2>15.08.2024</h2>
              <span className="uppercase" style={{ fontWeight: 600 }}>
                First round deadline
              </span>
              <p>
                <p>Upload a video of 3-5 minutes presentation including:</p>
                <div className="w-full px-8">
                  <ul className="list-disc">
                    <li>Problem Statement and Novelty</li>
                    <li>Proposed Methodology</li>
                    <li>Result and Analysis</li>
                    <li>Comparison with State-of-the-art</li>
                  </ul>
                </div>
                <p>
                  Conclusion with appropriate demo/screenshots within the video.
                </p>
                <div className="w-full px-8">
                  <ul className="list-disc">
                    <li>
                      An endorsement letter by HOD/Supervisor/Mentor is required
                      with the application.
                    </li>
                    <li>
                      An extended abstract of 500-1000 words highlighting the
                      significance of the project pertaining to the theme, “AI
                      for Social Goods”.
                    </li>
                  </ul>
                </div>
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container" data-aos="fade-in">
            <div className="text-box">
              <h2>28.08.2024</h2>
              <span style={{ fontWeight: 600 }} className="uppercase">
                result declaration
              </span>
              <p>Results will be declared on 28th August, 2024</p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container" data-aos="fade-in">
            <div className="text-box">
              <h2>31.08.2024</h2>
              <span style={{ fontWeight: 600 }} className="uppercase">
                second round (online){" "}
              </span>
              <p>
                Selected candidates will be notified for online presentation
                along with a live demo. Details will be notified later.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container" data-aos="fade-in">
            <div className="text-box">
              <h2>07.09.2024</h2>
              <span style={{ fontWeight: 600 }} className="uppercase">
                result declaration
              </span>
              <p>
                Selected candidates will be notified for in-person presentation
                along with a live demo at Jadavpur University
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container" data-aos="fade-in">
            <div className="text-box">
              <h2>12.09.2024</h2>
              <span style={{ fontWeight: 600 }} className="uppercase">
                final round (offline)
              </span>
              <p>In-person at Jadavpur University </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
