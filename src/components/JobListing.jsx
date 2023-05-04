import React, { useState, useEffect } from "react";
import "../Style/JobListing.css";
import datas from "../data.json";
import { SearchBar } from "./SearchBar";

function JobListing() {
  const [searchData, setSearchData] = useState([]);
  const [filteredData, setFilteredData] = useState(datas);

  const handleClick = (tag) => {
    if (!searchData.includes(tag)) {
      setSearchData([...searchData, tag]);
    }
  };
  useEffect(() => {

    const filteredJobs = datas.filter((job) => {
      const tags = [
        job.role,
        job.level,
        ...job.languages,
        ...job.tools,
      ].map((tag) => tag.toLowerCase());
      return searchData.every((tag) => tags.includes(tag.toLowerCase()));
    });
    setFilteredData(filteredJobs);
  }, [searchData]);

  const jobs = filteredData.map((data) => (
 
    <div className={data.featured?('JobListing isFeatured'):'JobListing'} key={data.id}>
      <div className="jobListingContainer">
        <div className="topJL">
          <img src={process.env.PUBLIC_URL + data.logo} alt={data.company} />
        </div>
        <div className="middleJL">
          <div className="mTopSection">
            <div className="titleJL">
              <h3>{data.company}</h3>
            </div>
            <div>
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
            <div className="roleJL tags"><p onClick={()=>handleClick(data.role)}>{data.role}</p></div>
            <div className="levelJL tags"><p onClick={()=>handleClick(data.level)}>{data.level}</p></div>
            
              {data.languages.map((language, index) => (
                <div key={index} className="languageJL tags">
                  <p onClick={()=>handleClick(language)}>{language}</p>
                </div>
              ))}
            
            
              {data.tools.map((tool, index) => (
                <div key={index} className="toolJL tags">
                  <p onClick={()=>handleClick(tool)}>{tool}</p>
                </div>
              ))}
            
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <React.Fragment>
       <SearchBar searchData={searchData} setSearchData={setSearchData} />
      {jobs}
    </React.Fragment>
  );
}
export { JobListing };
