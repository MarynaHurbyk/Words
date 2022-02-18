import React from "react";

import { SelectTopic } from "./SelectTopic.tsx";
import { SortTopic } from "./SortTopic.tsx";
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
        <SelectTopic updateSelectedOption={updateSelectedOption} />
      </div>
      <div>
        <SortTopic updateSortedOption={updateSortedOption} />
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
