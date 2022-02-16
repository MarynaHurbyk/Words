import React, { useState, useEffect } from "react";

import { Item } from "./Item.tsx";
import { listTopicData } from "../../listTopicData.tsx";
import "../../css/listItem.css";

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

interface Props {
  selectedOption: string;
  sortedOption: string;
  updatePage: (value: string) => void;
}

export const ListItem: React.FC<Props> = ({
  selectedOption,
  sortedOption,
  updatePage,
}) => {
  const [filteredListTopicData, setFilteredListTopicData] =
    useState(listTopicData);

  const filtered = () => {
    if (selectedOption === "all") {
      setFilteredListTopicData(listTopicData);
    } else {
      setFilteredListTopicData(
        listTopicData.filter((item) => item.section === selectedOption)
      );
    }
  };

  useEffect(() => {
    setFilteredListTopicData(filtered);
  }, [selectedOption]);

  useEffect(() => {
    if (sortedOption === "NameUp") {
      setFilteredListTopicData(filteredListTopicData.sort(sortNameUp));
    }
    if (sortedOption !== "NameUp") {
      setFilteredListTopicData(filteredListTopicData.sort(sortNameDown));
    }
  }, [sortedOption]);

  return (
    <div style={styles.listItems}>
      {filteredListTopicData.map((filtredItem) => {
        return (
          <Item
            key={filtredItem.id}
            name={filtredItem.name}
            linkResource={filtredItem.linkResource}
            imageResource={filtredItem.imageResource}
            ImageAlt={filtredItem.imageAlt}
            updatePage={updatePage}
          />
        );
      })}
    </div>
  );
};

const styles = {
  listItems: {
    width: "500px",
    height: "900px",
    margin: "20px",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
} as const;
