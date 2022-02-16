import React, { useState } from "react";

import { Filter } from "./Filter.tsx";
import { ListItem } from "./ListItem.tsx";

interface Props {
  updatePage: (value: string) => void;
}
export const HomePage: React.FC<Props> = ({ updatePage }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [sortedOption, setSortedOption] = useState("");

  const updateSelectedOption = (value) => {
    setSelectedOption(value);
  };
  const updateSortedOption = (value) => {
    setSortedOption(value);
  };

  return (
    <>
      <p> Sort global: {sortedOption}</p>
      <Filter
        updateSelectedOption={updateSelectedOption}
        updateSortedOption={updateSortedOption}
      />
      <ListItem
        selectedOption={selectedOption}
        sortedOption={sortedOption}
        updatePage={updatePage}
      />
    </>
  );
};
