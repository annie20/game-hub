import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  childrend: ReactNode;
}

const GameCardContainer = ({ childrend }: Props) => {
  return (
    <Box borderRadius={10} overflow={"hidden"}>
      {childrend}
    </Box>
  );
};

export default GameCardContainer;
