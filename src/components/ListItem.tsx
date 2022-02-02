import React, { useState, useEffect } from "react";

import { Item } from "./Item.tsx";
import { listTopicData } from "../listTopicData.tsx";

const sortNameUp = (a, b) => {
  if (a.name > b.name) {
    return -1;
  }
  if (a.name < b.name) {
    return 1;
  }
  return 0;
};

const sortNameDown = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

const listData = listTopicData.sort(sortNameUp);

interface Props {
  selectedData: string;
  sortedData: string;
}
export const ListItem: React.FC<Props> = ({ selectedData, sortedData }) => {
  const [filteredListData, setFilteredListData] = useState(listData);

  console.log("listData:" + { listData });

  const filtered = () => {
    if (selectedData === "all" || selectedData === "Select section")
      return listData;
    const result = listData.filter((item) => item.section === selectedData);
    return result;
  };

  useEffect(() => {
    setFilteredListData(filtered);
  }, [selectedData]);

  useEffect(() => {
    let res;
    if (sortedData === "NameUp") {
      res = filteredListData.sort(sortNameUp);
    }
    if (sortedData !== "NameUp") {
      res = filteredListData.sort(sortNameDown);
    }
    return res;
  }, [sortedData]);

  const list = filteredListData.map((filtredItem) => {
    return (
      <Item
        key={filtredItem.id}
        name={filtredItem.name}
        linkResource={filtredItem.linkResource}
        imageResource={filtredItem.imageResource}
        ImageAlt={filtredItem.imageAlt}
      />
    );
  });

  return (
    <div
      style={{
        width: "500px",
        height: "900px",
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
      }}
    >
      {list}
    </div>
  );
};
