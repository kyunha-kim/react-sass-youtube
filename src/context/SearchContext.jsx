import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = (props) => {
  const [showSpecialSearchBar, setShowSpecialSearchBar] = useState(false);

  return (
    <SearchContext.Provider
      {...props}
      value={{ showSpecialSearchBar, setShowSpecialSearchBar }}
    />
  );
};
