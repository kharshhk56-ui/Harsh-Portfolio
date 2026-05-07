import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editor</h4>
                <h5>Mothers Pride & Presidium School</h5>
              </div>
              <h3>2014-2020</h3>
            </div>
            <p>
              Created educational videos for school content. Shot and edited interview & feedback videos. Produced promotional and advertisement videos. Managed social media video content.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editor</h4>
                <h5>E-Commerce Company</h5>
              </div>
              <h3>2021-2023</h3>
            </div>
            <p>
              Created fashion and clothing product videos. Edited promotional content for online platforms. Worked on brand-focused visual storytelling.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editor & Videographer</h4>
                <h5>YAMARKETS Company</h5>
              </div>
              <h3>2023-NOW</h3>
            </div>
            <p>
              Created educational and advertisement videos. Produced paranormal content for YouTube & Instagram. Handled videography including camera setup and lighting. Edited videos using Premiere Pro & After Effects. Designed content using Canva and Photoshop.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Video Editor</h4>
                <h5>OKNA Company</h5>
              </div>
              <h3>2024-NOW</h3>
            </div>
            <p>
              Creating social media and promotional video content. Editing reels, ads, and branded videos. Working with clients remotely on freelance projects. Delivering optimized content for Instagram & marketing campaigns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
