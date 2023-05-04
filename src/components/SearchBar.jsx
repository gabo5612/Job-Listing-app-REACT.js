import React, { useEffect } from "react";
import "../Style/SearchBar.css";

function SearchBar(props) {
  const { searchData, setSearchData } = props;

  useEffect(() => {
 
  }, [searchData]);

  const handleClearButton = () => {
    setSearchData([]);
  };
  const handleDeleteTag = (tag) => {
    const newSearchData = searchData.filter((search) => search !== tag);
    setSearchData(newSearchData);
  }
  const searchTags = searchData.map((search) => (
    <div className="bottonTags" key={search.length}>
      <div className="tags searchTags">
        <p>{search}</p>
        <button onClick={()=>handleDeleteTag(search)}>X</button>
      </div>
    </div>
  ));
    if(searchTags.length>0){
  return (
    <div className="JobListing searchBar">
      <div className="leftSideSB margin">{searchTags}</div>
      <div className="rightSideSB margin">
        <button onClick={handleClearButton} className="clearButton">Clear</button>
      </div>
    </div>
  );
} else{
  return <React.Fragment/>
}
}

export { SearchBar };
