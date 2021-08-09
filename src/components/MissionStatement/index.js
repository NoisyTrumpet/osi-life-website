import {
  Grid,
  GridItem,
  Text,
  useColorModeValue as mode,
  Heading,
  Container,
  Box,
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
    <Box
      bg={mode(`darkGray`)}
      py={12}
      px={[`1rem`, `1rem`, `3rem`, `5rem`, `5rem`]}
      borderTopRightRadius={80}
      mt={"auto"}
    >
      <Container>
        <Grid
          gridTemplateColumns={[
            `repeat(1,1fr)`,
            `repeat(1,1fr)`,
            `repeat(1,1fr)`,
            `repeat(2,1fr)`,
            `repeat(2,1fr)`,
          ]}
          gridTemplateRows={[
            `repeat(2,1fr)`,
            `repeat(2,1fr)`,
            `repeat(2,1fr)`,
            `repeat(1,1fr)`,
            `repeat(1,1fr)`,
          ]}
          gridGap={8}
          justifyContent={`space-around`}
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
      </Container>
    </Box>
  );
};

export default MissionStatement;
