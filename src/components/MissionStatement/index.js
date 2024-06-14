import {
  Grid,
  GridItem,
  Text,
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
      py={12}
      px={[`1rem`, `1rem`, `3rem`, `5rem`, `5rem`]}
      borderTopRightRadius={80}
      mt={"auto"}
    >
      <Container>
        <div
          className={`flex flex-row justify-start items-center gap-4 w-full text-center`}
        >
          <Text
            my={4}
            color="darkGray"
            fontSize="6xl"
            textAlign={"center"}
            fontFamily={`var(--chakra-fonts-heading)`}
            id="testimonial-label"
            px={[4, 0]}
          >
            {title}
          </Text>
          <div
            className={`flex-grow h-[2px] bg-secondary rounded hidden md:flex`}
          />
        </div>
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
          <GridItem
            color={`black`}
            className={`bg-gray px-4 py-8 md:px-12 md:py-16 rounded-lg`}
          >
            <Heading color={`primary`}>{visionTitle}</Heading>
            <Text mt={3}>{visionDescription}</Text>
          </GridItem>
          <GridItem
            color={`black`}
            className={`bg-gray px-4 py-8 md:px-12 md:py-16 rounded-lg`}
          >
            <Heading color={`secondary`}>{missionTitle}</Heading>
            <Text mt={3}>{missionDescription}</Text>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default MissionStatement;
