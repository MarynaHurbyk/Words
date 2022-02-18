import React from "react";

interface Props {
  name: string;
  imageResource: string;
  imageAlt: string;
  updatePage: (value: string) => void;
}

export const ListItem: React.FC<Props> = ({
  name,
  imageResource,
  imageAlt,
  updatePage,
}) => (
  <div style={styles.item}>
    <button
      onClick={() => {
        updatePage("quiz");
      }}
      style={styles.itemButton}
    >
      {name}

      <img src={imageResource} alt={imageAlt} style={styles.itemImage} />
    </button>
  </div>
);

const styles = {
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#e7f1f7",
    width: "300px",
    height: "220px",
    margin: "10px",
  },
  itemButton: { color: "green", textDecoration: "none", fontWeight: "bold" },
  itemImage: { width: "250px", height: "160px", marginTop: "5px" },
} as const;
