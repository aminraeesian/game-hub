import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/getCroppedImage";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selecteGenre: Genre | null;
}

const GenresList = ({ selecteGenre, onSelectedGenre }: Props) => {
  const { data, isloading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text>{error}</Text>;

  return (
    <List>
      {isloading &&
        skeletons.map((skeleton) => (
          <ListItem key={skeleton} paddingY={"5px"}>
            <GenreListSkeleton />
          </ListItem>
        ))}

      {!isloading &&
        data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImage(genre.image_background)}
              />
              <Button
                fontWeight={selecteGenre?.id === genre.id ? "bold" : "normal"}
                fontSize={"md"}
                variant={"link"}
                onClick={() => onSelectedGenre(genre)}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
    </List>
  );
};

export default GenresList;
