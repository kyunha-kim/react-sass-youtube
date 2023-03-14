import React, { useContext, useEffect } from "react";
import useWindowSize from "../../helpers/useWindowSize";
import SmallSideBar from "./SmallSideBar";
import BigSideBar from "./BigSideBar";
import { SidebarContext } from "../../context/SideBarContext";

const SideBar = () => {
  const { width } = useWindowSize();
  const { isToggled, setIsToggled } = useContext(SidebarContext);

  useEffect(() => {
    width <= 1320 ? setIsToggled(false) : setIsToggled(true);
  }, [width]);

  return (
    <>{width < 792 ? null : isToggled ? <BigSideBar /> : <SmallSideBar />}</>
  );
};

export default SideBar;
