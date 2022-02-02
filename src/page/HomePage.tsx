import React, { useState }  from "react";

import { Filter } from "../components/Filter.tsx";
import { ListItem } from "../components/ListItem.tsx";

export const HomePage: React.FC = ({ }) => {

  const [section, setSection] = useState("all");
  const updateData = (value) => {
    setSection(value);
  };

  const [sort, setSort] = useState(" ");
  const updateSortedData = (value) => {
    setSort(value);
  };

  return (
    <>
      <p> State global: {section}</p>
      <p> Sort global: {sort}</p>
      <Filter updateName={updateData} updateSort={updateSortedData} />
      <ListItem selectedData={section} sortedData={sort} />
    </>
  );
};
