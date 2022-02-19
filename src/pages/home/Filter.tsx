import React from "react";

import { TopicSelect } from "./TopicSelect.tsx";
import { TopicSort } from "./TopicSort.tsx";
import "../../css/filter.css";

type Props = {
  updateSelectedTopicList: (value: string) => void;
  updateSortedTopiclist: (value: string) => void;
}

export const Filter: React.FC<Props> = ({
  updateSelectedTopicList,
  updateSortedTopiclist,
}) => {
  return (
    <div className="filter" style={styles.filter}>
      <div>
        <TopicSelect updateSelectedTopicList={updateSelectedTopicList} />
      </div>
      <div>
        <TopicSort updateSortedTopiclist={updateSortedTopiclist} />
      </div>
    </div>
  );
};

const styles = {
  filter: {
    background: "#e7f1f7",
    height: "90px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
} as const;
