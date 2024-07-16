import React from "react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const param = useParams<{ id: string }>();
  return <div>GameDetailPage {param.id}</div>;
};

export default GameDetailPage;
