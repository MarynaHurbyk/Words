import React, { useState } from "react";

import { Filter } from "./Filter.tsx";
import { TopicList } from "./TopicList.tsx";
import { topicListData } from "../../topicListData.ts";
import { PageName } from "../../App";

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
  updatePage: (value: PageName) => void;
};

export const HomePage: React.FC<Props> = ({ updatePage }) => {
 
  const [topicList, setTopicList] = useState(topicListData);

  const updateSortedTopiclist = (sortedTopicOption) => {
    if (sortedTopicOption === "NameUp") {
      setTopicList(topicList.sort(sortNameUp));
    }
    if (sortedTopicOption !== "NameUp") {
      setTopicList(topicList.sort(sortNameDown));
    }
  };

  const updateSelectedTopicList = (selectedTopicOption) => {
    let filtered;
    if (selectedTopicOption === "all") {
      filtered = topicListData;
    } else {
      filtered = topicListData.filter(
        (item) => item.section === selectedTopicOption
      );
    }
    setTopicList(filtered);
  };

  return (
    <>
      <Filter
        updateSelectedTopicList= {updateSelectedTopicList}
        updateSortedTopiclist= {updateSortedTopiclist}
      />
      <TopicList topicList={topicList} updatePage={updatePage} />
    </>
  );
};
