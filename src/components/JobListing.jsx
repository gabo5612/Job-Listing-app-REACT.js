import React from "react";
import "../Style/JobListing.css";
import datas from "../data.json";

function JobListing() {
  const jobs = datas.map((data) => (
    <div className="JobListing" key={data.id}>
      <div className="topJL">
        <img src={data.logo} alt={data.company} />
      </div>
      <div className="middleJL">
        <div className="mTopSection">
          <div className="titleJL">
            <h3>{data.company}</h3>
          </div>
          <div>
            {" "}
            {data.new ? (
              <div className="newJL">
                <span>NEW</span>
              </div>
            ) : null}
          </div>
          <div>
            {data.featured ? (
              <div className="featuredJL">
                <span>FEATURED</span>
              </div>
            ) : null}
          </div>
        </div>
        <div className="mMidSection">
          <h2>{data.position}</h2>
        </div>
        <div className="mBottonSection">
          <div className="bottonInfo">
            <p>{data.postedAt}</p>
          </div>
          <div className="bottonInfo">
            <p>{data.contract}</p>
          </div>
          <div className="bottonInfo">
            <p>{data.location}</p>
          </div>
        </div>
      </div>
      <div className="bottonJL">
        <div className="bottonTags">
          <div className="roleJL">{data.role}</div>
          <div className="levelJL">{data.level}</div>
          <div className="languagesJL">
            {data.languages.map((language, index) => (
              <div key={index} className="languageJL">
                {language}
              </div>
            ))}
          </div>
          <div className="toolsJL">
            {data.tools.map((tool, index) => (
              <div key={index} className="toolJL">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ));
  return <React.Fragment>{jobs}</React.Fragment>;
}
export { JobListing };
