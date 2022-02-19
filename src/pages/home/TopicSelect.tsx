import React, { useState } from "react";

import "../../css/filter.css";

type Option = { value: string; lable: string };

type Props = {
  updateSelectedTopiclist: (value: string) => void;
};

export const TopicSelect: React.FC<Props> = ({ updateSelectedTopiclist }) => {
  const listOptions: Option[] = [
    {
      value: "all",
      lable: "all",
    },
    {
      value: "house",
      lable: "house",
    },
    {
      value: "people",
      lable: "people",
    },
    {
      value: "health",
      lable: "health",
    },
    {
      value: "work",
      lable: "work",
    },
    {
      value: "educatoion",
      lable: "educatoion",
    },
  ];

  const [selectedOption, setSelectedOption] = useState("Select section");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <select
        className="select"
        value={selectedOption}
        onChange={handleSelectChange}
        onClick={() => {
          updateSelectedTopiclist(selectedOption);
        }}
        style={styles.select}
      >
        <option value="Select section" disabled>
          Select section
        </option>
        {listOptions.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.lable}
            </option>
          );
        })}
      </select>
    </>
  );
};

const styles = {
  select: {
    height: "37px",
    fontSize: "24px",
    margin: "5px",
  },
} as const;
