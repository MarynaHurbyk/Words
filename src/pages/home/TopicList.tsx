import React from "react";

import { ListItem } from "./ListItem.tsx";
import "../../css/listItem.css";

type ListItemTopic = {
  id: number;
  section: string;
  name: string;
  imageResource: /*?*/ string;
  imageAlt: string;
};

interface Props {
  filteredlistTopic: [ListItemTopic];
  updatePage: (value: string) => void;
}

export const TopicList: React.FC<Props> = ({
  updatePage,
  filteredlistTopic,
}) => {
  return (
    <div style={styles.listItems}>
      {filteredlistTopic.map((filtredItem) => {
        return (
          <ListItem
            key={filtredItem.id}
            name={filtredItem.name}
            imageResource={filtredItem.imageResource}
            ImageAlt={filtredItem.imageAlt}
            updatePage={updatePage}
          />
        );
      })}
    </div>
  );
};

const styles = {
  listItems: {
    width: "500px",
    height: "900px",
    margin: "20px",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
} as const;
