import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCartSkelton = () => {
  return (
    <Card width='250px' borderRadius={10} overflow='hidden'>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCartSkelton;
