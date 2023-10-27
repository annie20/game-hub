import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import logo from "../assets/logo.webp";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={logo} boxSize="200px" />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
