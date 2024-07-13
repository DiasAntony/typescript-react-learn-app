import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width={"300px"} borderRadius={10} overflow={"hidden"}>
      <Skeleton height={"200px"} startColor="gray.500" endColor="green.500" />
      {/* <Skeleton height={"200px"} /> */}
      <CardBody>
        <SkeletonText
          noOfLines={3}
          startColor="green.500"
          endColor="gray.500"
          //   isLoaded={get value from prop}
          fadeDuration={5}
        />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
