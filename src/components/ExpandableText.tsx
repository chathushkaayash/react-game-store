import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children: string;
  maxLength?: number;
}

const ExpandableText = ({ children, maxLength = 300 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  if (children.length <= maxLength) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, maxLength) + "...";

  return (
    <Text>
      {summary}
      <Button
      ml={1}
        onClick={() => setExpanded(!expanded)}
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
