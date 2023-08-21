import React from "react";
import profile from "../assets/profile.jpg";
import {
  SiReactrouter,
  SiReact,
  SiCss3,
  SiNetlify,
  SiFontawesome,
  SiGithub,
} from "react-icons/si";

function About() {
  return (
    <div style={{ padding: "1em", display: "grid", gap: "1em", overflow: "auto" }}>
      <AboutCard>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1em",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <picture>
            <img src={profile} alt="my profile" />
          </picture>
          <article>
            <h1 style={{ fontSize: "clamp(1.5rem, 5vw, 3rem" }}>
              Mel Alejandrino
            </h1>
            <p>Aspiring Web Developer from the Philippines.</p>
          </article>
        </div>
      </AboutCard>

      <AboutCard>
        <div>
          <ul role="list">
            <li>
              <a target="_blank" href="https://www.facebook.com/Melkun02">FACEBOOK</a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/MelAlejandrino">GITHUB</a>
            </li>
            <li>
              <a target="_blank" href="https://melcommissioner.netlify.app/">MEL'S COMMISSIONS</a>
            </li>
          </ul>
        </div>
      </AboutCard>

      <AboutCard>
        <h1>POWERED WITH</h1>
        <ul role="list" className="stacks">
          <li>
            <SiReact size={31} />
          </li>
          <li>
            <SiReactrouter size={31} />
          </li>
          <li>
            <SiCss3 size={31} />
          </li>
          <li>
            <SiNetlify size={31} />
          </li>
          <li>
            <SiFontawesome size={31} />
          </li>
          <li>
            <SiGithub size={31} />
          </li>
          <li>
            <img
              src="https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667"
              alt=""
            />
          </li>
        </ul>
      </AboutCard>
    </div>
  );
}

function AboutCard(props) {
  return <div className="about-container">{props.children}</div>;
}

export default About;
