import React from "react";
import AboutImage from "../assets/images/images02.jpg";
export default function About() {
    return (
      <div className="about--section">
        <div className="id--links" id="About"></div>
        <h3 className="about--head">ABOUT US</h3>
        <div className="about--body">
          <div className="about--img--sec">
            <div className="about--img--div">
              <img
                src={AboutImage}
                alt="aboutUs image"
                className="about--img"
              />
            </div>
          </div>

          <div className="about--txt--sec">
            <p className="about--txt--head">Welcome to J-Foods</p>
            <p className="about--txt--body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
              incidunt inventore? Laborum pariatur at soluta possimus fugit quae
              vero numquam sit deserunt molestiae nostrum autem, magni labore
              accusantium fuga, nemo quisquam tempora, consequuntur nam?
              Laboriosam voluptate odio omnis necessitatibus ipsum ducimus esse,
              ratione labore placeat veniam mollitia repudiandae error tenetur.
            </p>
          </div>
        </div>
        {/* <div className="id--links" id="Menu"></div> */}
      </div>
    );
}