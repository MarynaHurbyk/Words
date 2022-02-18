import React, { useState } from "react";

import "../../css/filter.css";

interface Props {
  updateSelectedOption: (value: string) => void;
}

export const SelectTopic: React.FC<Props> = ({ updateSelectedOption }) => {
  type Option = { value: string; isDisabled: boolean };

  const listOptions: Option[] = [
    {
      value: "Select section",
      isDisabled: true,
    },
    {
      value: "all",
      isDisabled: false,
    },
    {
      value: "house",
      isDisabled: false,
    },
    {
      value: "people",
      isDisabled: false,
    },
    {
      value: "health",
      isDisabled: false,
    },
    {
      value: "work",
      isDisabled: false,
    },
    {
      value: "educatoion",
      isDisabled: false,
    },
  ];

  const [selectedOption, setSelectedOption] = useState("Selected section");

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
          updateSelectedOption(selectedOption);
        }}
        style={styles.select}
      >
        <option value="" disabled>
          hi
        </option>
        {listOptions.map((item) => {
          return (
            <option
              key={item.value}
              value={item.value}
              disabled={item.isDisabled}
            >
              {item.value}
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
