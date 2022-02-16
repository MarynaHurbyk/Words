import React from "react";

import "../../css/filter.css";

interface Props {
  updateSortedOption: (value: string) => void;
}

export const Sorter: React.FC<Props> = ({ updateSortedOption }) => {
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
            onChange={() => {
              updateSortedOption("NameUp");
            }}
          />
          NameUp
        </label>
      </div>
      <div className="sort_radio_btn">
        <label>
          <input
            type="radio"
            name="sort"
            onClick={() => {
              updateSortedOption("NameDown");
            }}
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
