import { Card, CardBody, CardHeader, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"} >
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={"xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
