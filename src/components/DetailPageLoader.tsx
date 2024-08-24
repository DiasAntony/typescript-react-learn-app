import {
  SimpleGrid,
  GridItem,
  Heading,
  SkeletonText,
  Skeleton,
  Box,
} from "@chakra-ui/react";

const DetailPageLoader = () => {
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem >
          <Heading marginY={5}>
            <Skeleton
              height="20px"
              width={"50%"}
              startColor="green.500"
              endColor="gray.500"
            />
          </Heading>
          <SkeletonText
            noOfLines={16}
            marginY={5}
            startColor="green.500"
            endColor="gray.500"
            //   isLoaded={get value from prop}
            fadeDuration={5}
          />
          <SimpleGrid columns={2} spacing={2} as="dl">
            {[1, 2, 3, 4].map((e) => (
              <Box key={e}>
                <SkeletonText
                marginY={5}
                  noOfLines={3}
                  startColor="green.500"
                  endColor="gray.500"
                  //   isLoaded={get value from prop}
                  fadeDuration={5}
                />
              </Box>
            ))}
          </SimpleGrid>
        </GridItem>
        {/* <Heading>{game?.name}</Heading> (method 1) */}
        <GridItem>
          <Skeleton
            marginY={5}
            height="500px"
            startColor="green.500"
            endColor="gray.500"
          />
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
            {[1, 2, 3, 4].map((e) => (
              <Skeleton
                key={e}
                height="200px"
                startColor="green.500"
                endColor="gray.500"
              />
            ))}
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default DetailPageLoader;
