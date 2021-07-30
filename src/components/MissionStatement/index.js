import {
  Grid,
  GridItem,
  Text,
  IconButton,
  useColorModeValue as mode,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const MissionStatement = ({
  title,
  missionTitle,
  visionTitle,
  missionDescription,
  visionDescription,
  id,
}) => {
  return (
    <Grid
      gridTemplateColumns={[
        `repeat(1,1fr)`,
        `repeat(1,1fr)`,
        `repeat(2,1fr)`,
        `repeat(2,1fr)`,
        `repeat(2,1fr)`,
      ]}
      gridTemplateRows={[
        `repeat(2,1fr)`,
        `repeat(2,1fr)`,
        `repeat(1,1fr)`,
        `repeat(1,1fr)`,
        `repeat(1,1fr)`,
      ]}
      gridGap={8}
      justifyContent={`space-around`}
      bg={mode(`darkGray`)}
      py={12}
      px={`5rem`}
      borderTopRightRadius={80}
      mt={"auto"}
    >
      <GridItem color={`white`}>
        <Heading color={`secondary`}>{visionTitle}</Heading>
        <Text mt={3}>{visionDescription}</Text>
      </GridItem>
      <GridItem color={`white`}>
        <Heading color={`secondary`}>{missionTitle}</Heading>
        <Text mt={3}>{missionDescription}</Text>
      </GridItem>
    </Grid>
  );
};

export default MissionStatement;
