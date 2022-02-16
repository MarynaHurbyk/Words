import React from "react";

import { Selector } from "./Selector.tsx";
import { Sorter } from "./Sorter.tsx";
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
        <Selector updateSelectedOption={updateSelectedOption} />
      </div>
      <div>
        <Sorter updateSortedOption={updateSortedOption} />
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
