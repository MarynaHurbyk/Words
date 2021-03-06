import React from "react";

import { TopicListItem } from "./TopicListItem.tsx";
import "../../css/listItem.css";

type ListItemTopic = {
  id: number;
  section: string;
  name: string;
  imageResource: string;
  imageAlt: string;
};

type Props = {
  topicList: ListItemTopic[];
  updatePage: (value: string) => void;
}

export const TopicList: React.FC<Props> = ({
  updatePage,
  topicList,
}) => {
  return (
    <div style={styles.listItems}>
      {topicList.map((filtredItem) => {
        return (
          <TopicListItem
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
