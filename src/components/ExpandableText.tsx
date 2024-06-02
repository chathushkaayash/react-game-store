import { Children, useState } from "react";

interface Props {
  children: string;
  size: number;
}

const ExpandableText = ({ size, children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {children.length > size && !isExpanded
        ? children.slice(0, size) + "..."
        : children}

      <button onClick={() => setIsExpanded(!isExpanded)}>
        {children.length > size && !isExpanded ? "see more" : "see Less"}
      </button>
    </>
  );
};

export default ExpandableText;
