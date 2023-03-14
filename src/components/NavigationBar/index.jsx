import React, { useContext } from "react";
import LeftNav from "./LeftNav";
import SearchBar from "./SearchBar";
import RightNav from "./RightNav";
import { BiArrowBack } from "react-icons/bi";
import { ImSearch } from "react-icons/im";
import { MdKeyboardVoice } from "react-icons/md";
import useWindowSize from "../../helpers/useWindowSize";
import { SearchContext } from "../../context/SearchContext";

const NavigationBar = () => {
  const { width } = useWindowSize();

  const { showSpecialSearchBar, setShowSpecialSearchBar } =
    useContext(SearchContext);

  const specialSearchBarRender = (
    <div className="special_searchbar">
      <button
        onClick={() => setShowSpecialSearchBar(false)}
        style={{ cursor: "pointer" }}
      >
        <BiArrowBack size={25} />
      </button>
      <form>
        <input type="text" name="search" placeholder="Search" />
        <button>
          <ImSearch size={20} />
        </button>
      </form>
      <button className="icon-container voiceIcon">
        <MdKeyboardVoice size={25} />
      </button>
    </div>
  );

  return (
    <nav className="Navbar">
      {width <= 640 && showSpecialSearchBar ? (
        specialSearchBarRender
      ) : (
        <>
          <LeftNav />
          <SearchBar />
          <RightNav />
        </>
      )}
    </nav>
  );
};

export default NavigationBar;
