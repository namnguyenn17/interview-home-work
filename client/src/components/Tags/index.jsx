import { Tag } from "antd";
import React from "react";

const tagData = [
  "magenta",
  "red",
  "volcano",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple",
];

const Tags = () => {
  return (
    <div>
      {tagData.map((tag, index) => (
        <Tag key={index} color={tag}>
          {tag}
        </Tag>
      ))}
    </div>
  );
};

export default Tags;
