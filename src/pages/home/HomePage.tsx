import React, { useEffect, useState } from "react";

import { Filter } from "./Filter.tsx";
import { TopicList } from "./TopicList.tsx";
import { listTopicData } from "../../listTopicData.ts";

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

type Props = {
  updatePage: (value: string) => void;
};

export const HomePage: React.FC<Props> = ({ updatePage }) => {
  const [selectedTopicOption, setSelectedOption] = useState("");
  const [sortedOption, setSortedOption] = useState("");
  const [filteredListTopic, setFilteredListTopic] = useState(listTopicData);

  useEffect(() => {
    let filtered;
    if (selectedTopicOption === "all") {
      filtered = listTopicData;
    } else {
      filtered = listTopicData.filter(
        (item) => item.section === selectedTopicOption
      );
    }
    setFilteredListTopic(filtered);
  }, [selectedTopicOption]);

  useEffect(() => {
    if (sortedOption === "NameUp") {
      setFilteredListTopic(filteredListTopic.sort(sortNameUp));
    }
    if (sortedOption !== "NameUp") {
      setFilteredListTopic(filteredListTopic.sort(sortNameDown));
    }
  }, [sortedOption,]);

  return (
    <>
      <p> Sort global: {sortedOption}</p>
      <Filter
        updateSelectedOption={setSelectedOption}
        updateSortedOption={setSortedOption}
      />
      <TopicList filtredListTopic={filteredListTopic} updatePage={updatePage} />
    </>
  );
};
