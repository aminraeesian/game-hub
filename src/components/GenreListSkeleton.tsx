import { Text } from "@chakra-ui/react";
import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack>
      <Skeleton boxSize={"32px"} borderRadius={8} />
      <Text>
        <SkeletonText width={"100px"} />
      </Text>
    </HStack>
  );
};

export default GenreListSkeleton;
