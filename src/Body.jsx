import React from "react";
import "./Body.css";
import profilePic from "./assets/profilePic.jpeg";
function Body(){
    return(
       <section className="about">
      <div className="about-container">

        {/* TEXT */}
        <div className="about-text">
          <span className="about-label">About Me</span>

          <h2 className="about-title">
            I build ideas <br /> into digital experiences
          </h2>

          <p>
            I am a passionate learner and creative professional with a strong
            interest in web development, design, and digital storytelling.
            I enjoy turning complex problems into simple, elegant, and
            user-friendly solutions.
          </p>

          <p>
            Currently, I focus on building responsive web applications using
            modern technologies like React, JavaScript, and CSS while
            continuously improving my design and problem-solving skills.
          </p>

          <div className="about-stats">
            <div>
              <h3>10+</h3>
              <span>Projects</span>
            </div>
            <div>
              <h3>2+</h3>
              <span>Years Learning</span>
            </div>
            <div>
              <h3>100%</h3>
              <span>Dedication</span>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="about-image">
          <div className="image-bg"></div>
           <img
            src={profilePic}
            alt="Profile"
          
          />
        </div>

      </div>
    </section>   
    )
};export default Body;