import React, { useContext } from "react";
import "./Podcast.css";
import { podcastSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Podcast() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="podcast-header">
          <h1 className="podcast-header-title">{podcastSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode podcast-header-subtitle"
                : "subTitle podcast-header-subtitle"
            }
          >
            {podcastSection.subtitle}
            <br />
            <a href="https://www.youtube.com/channel/UCUNKlsGUtcwAclmyatjo1ow">
              Channel link
            </a>
          </p>
        </div>
        <div className="podcast-main-div">
          {podcastSection.podcast.map((podcastLink) => {
            return <div></div>;
          })}
        </div>
      </div>
    </Fade>
  );
}
