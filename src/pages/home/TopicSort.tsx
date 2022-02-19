import React, { useState } from "react";

import "../../css/filter.css";

type Props = {
  updateSortedTopiclist: (value: string) => void;
};

export const TopicSort: React.FC<Props> = ({ updateSortedTopiclist }) => {
  const [sortedTopicOption, setSortedTopicOption] = useState("");

  const handleSortChange = (event) => {
    setSortedTopicOption(event.target.value);
    updateSortedTopiclist(sortedTopicOption);
  };

  return (
    <div className="sort" style={styles.sort}>
      <div className="sort__title" style={styles.sortTitle}>
        Sort for
      </div>
      <div className="sort_radio_btn">
        <label>
          <input
            type="radio"
            name="sort"
            value="NameUp"
            onChange={handleSortChange}
          />
          NameUp
        </label>
      </div>
      <div className="sort_radio_btn">
        <label>
          <input
            type="radio"
            name="sort"
            value="NameDown"
            onClick={handleSortChange}
          />
          NameDown
        </label>
      </div>
    </div>
  );
};

const styles = {
  sort: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  sortTitle: { padding: "7px" },
} as const;
