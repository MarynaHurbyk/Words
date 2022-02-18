import React from "react";

import { TopicSelect } from "./TopicSelect.tsx";
import { TopicSort } from "./TopicSort.tsx";
import "../../css/filter.css";

interface Props {
  updateSelectedOption: (value: string) => void;
  updateSortedOption: (value: string) => void;
}

export const Filter: React.FC<Props> = ({
  updateSelectedOption,
  updateSortedOption,
}) => {
  return (
    <div className="filter" style={styles.filter}>
      <div>
        <TopicSelect updateSelectedOption={updateSelectedOption} />
      </div>
      <div>
        <TopicSort updateSortedOption={updateSortedOption} />
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
