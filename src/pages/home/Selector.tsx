import React, { useState } from "react";

import "../../css/filter.css";

interface Props {
  updateSelectedOption: (value: string) => void;
}

export const Selector: React.FC<Props> = ({ updateSelectedOption }) => {
  const listOptions = [
    {
      value: "Select section",
      title: "Select section",
      isDisabled: true,
    },
    {
      value: "all",
      title: "Tutti",
      isDisabled: false,
    },
    {
      value: "house",
      title: "La casa",
      isDisabled: false,
    },
    {
      value: "people",
      title: "Le persone",
      isDisabled: false,
    },
    {
      value: "health",
      title: "La salute",
      isDisabled: false,
    },
    {
      value: "work",
      title: "Il lavoro",
      isDisabled: false,
    },
    {
      value: "educatoion",
      title: "Lo studio",
      isDisabled: false,
    },
  ];

  const [selectedOption, setSelectedOption] = useState(listOptions[0].title);

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
        {listOptions.map((item) => {
          return (
            <option
              key={item.value}
              value={item.value}
              disabled={item.isDisabled}
            >
              {item.title}
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
